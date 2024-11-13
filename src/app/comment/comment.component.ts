import { Component, Input } from '@angular/core';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
 // @Input() comments:Comment[]=[];
 @Input() comment!:Comment;
 @Input() isFirst!:boolean;
 @Input() isEven!:boolean;
 @Input() isOdd!:boolean;
 @Input() isLast!:boolean;
 @Input() index!:number;
}
