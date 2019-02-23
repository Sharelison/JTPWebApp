
export class JsonToPojoReq {
    private packageName:String;
    private className:String;
    private json:String;

    constructor(packageName:String, className:String, json:String) {
        this.packageName = packageName;
        this.className = className;
        this.json = json;
    }
}