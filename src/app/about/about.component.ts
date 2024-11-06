import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info :any;
  comment:Comment = new Comment(-1,"",new Date());
  colors={even:"green", odd:"red" };
  comments:Comment[] = [];
  newComment = false;
  constructor(private aboutService:AboutService){}

  ngOnInit(): void {
   this.info=this.aboutService.getInfos();
   this.comments=this.aboutService.getAllComment();
  }
  addComment() {
    this.aboutService.addComment(
      new Comment(this.comment.id,this.comment.message,this.comment.date)
      )
  /*  this.comments.push({
      date:new Date(),message:this.comment.message
    })*/
    
    //console.log("New Comment:" + this.comment.message);

    this.comment.message = "";
    //this.newComment=true;
  }
}
