import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/shared/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = []; // Array to hold the posts

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    // Fetch the posts when the component is initialized
    this.posts = this.postService.getPosts();
  }
}
