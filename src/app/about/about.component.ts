import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  info = {
    name: "demo",
    email: "demo@gmail.com",
    tel: 12345678
  }
  comment = { date: null, message: "new message" };

  comments = [];
  newComment = false;
  addComment() {
    this.comments.push({
      date:new Date(),message:this.comment.message
    })
    
    //console.log("New Comment:" + this.comment.message);

    this.comment.message = "";
    //this.newComment=true;
  }
}
