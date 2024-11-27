export class Contact {
    id!:number;
    name!:string;
    email!:string;
    website!:string;
    projects!:string[];
    image?:string;
    featured:boolean
    constructor(){
        this.id=-1;
        this.featured=false
    }
}
