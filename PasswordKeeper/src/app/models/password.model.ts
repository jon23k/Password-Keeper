export class FirebaseFlatSnapshot{
    public $key?: String;

    constructor(obj?: any){
        if(obj && obj.$key){
            this.$key = obj.$key;

        }
    }
}


export class Password extends FirebaseFlatSnapshot{
    service: String;
    username: String;
    password: String;
  
    constructor(obj?: any){
        super(obj);
        this.service = obj && obj.service || "";
        this.username = obj && obj.username || "";
        this.password = obj && obj.password || "";
    }
}
