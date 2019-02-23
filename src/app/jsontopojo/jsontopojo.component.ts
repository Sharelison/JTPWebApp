import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { JsonToPojoReq } from 'src/app/models/JsonToPojoReq';
import { JavaClass } from 'src/app/models/JavaClass';

@Component({
  selector: 'jsontopojo',
  templateUrl: './jsontopojo.component.html',
  styleUrls: ['./jsontopojo.component.css']
})
export class JsontopojoComponent implements OnInit {

  private restService:RestService;

  public packageInput:String;
  public classInput:String;
  public jsonInput:String;

  public javaClasses: JavaClass[] = [];

  constructor(restService : RestService) {
    this.restService = restService;
  }

  ngOnInit() {
  }

  generateJava() {
    var request = new JsonToPojoReq(this.packageInput, this.classInput, this.jsonInput);
    this.restService.jsonToPojo(request).subscribe(response => {
      this.javaClasses = response;   
    });
  }

  downloadJava() {
      var request = new JsonToPojoReq(this.packageInput, this.classInput, this.jsonInput);
      this.restService.downloadPojo(request).subscribe(generatedClassesZip => {
          var newBlob = new Blob([generatedClassesZip], {type: "application/zip"});
          // IE doesn't allow using a blob object directly as link href
          // instead it is necessary to use msSaveOrOpenBlob
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
              window.navigator.msSaveOrOpenBlob(newBlob);
              return;
          }

          // For other browsers:
          // Create a link pointing to the ObjectURL containing the blob.
          const data = window.URL.createObjectURL(newBlob);

          var link = document.createElement('a');
          link.href = data;
          link.download = "GeneratedClasses.zip";
          // this is necessary as link.click() does not work on the latest firefox
          link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      });
  }

  clearList() {
    this.javaClasses = [];
  }

}
