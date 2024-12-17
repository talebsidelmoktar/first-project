import { Injectable } from '@angular/core';
import { Post } from '../shared/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    new Post(1, 'My First Post', 'This is my first post content.', 0, new Date()),
    new Post(2, 'Another Post', 'Content for another post.', 2, new Date()),
    new Post(3, 'Yet Another Post', 'More content here!', -1, new Date())
  ];

  getPosts(): Post[] {
    return this.posts;
  }

  incrementLoveIt(id: number): void {
    const post = this.posts.find(p => p.id === id);
    if (post) {
      post.loveIts++;
    }
  }
}
