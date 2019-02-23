export class JavaClass  {
    private className:String;
    private classDeclaration:String;

    set _classDeclaration(val:String) {
       this.classDeclaration = val.replace("\n", "<br>");
    }
}