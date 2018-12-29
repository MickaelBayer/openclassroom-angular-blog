import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  datePost : Date;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    if (this.post){
      //to use the pipe function, recreate the date with the right format from the firebase data
      this.datePost = new Date(this.post.created_at);
    }
  }

  //used to get the color of the current post's text
  getColor(){
    if (this.post.loveIts === 0) {
      return 'black';
    } else if (this.post.loveIts < 0) {
      return 'red';
    } else if (this.post.loveIts > 0) {
      return 'green';
    }
  }

  //called on the like button, increment post.loveIts by 1;
  onLike() {
    this.postsService.plusLoveIts(this.post);
  }

  //called on the dislike button, decrement post.loveIts by 1;
  onDislike() {
    this.postsService.minusLoveIts(this.post);
  }

  //called on the Suppression button
  onDeletePost(post: Post) {
    this.postsService.removePost(post);
    
  }
}
