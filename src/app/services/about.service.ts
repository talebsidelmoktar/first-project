import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  info = {
    name: "demo",
    email: "demo@gmail.com",
    tel: 12345678
  }
  comments:Comment[]=[];
  constructor() { }

  getInfos(){
    return this.info;
  }
  addComment(comment:Comment){
    comment.date=new Date();
    this.comments.push(comment);
  }
  getAllComment(): Comment[]{
    return this.comments
  }
}
