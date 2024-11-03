export class Comment {
    id:Number;
    message: string;
    date:Date;
    constructor(id:Number,message:string, date:Date){
        this.id=id;
        this.message=message;
        this.date=date;
    }
}
