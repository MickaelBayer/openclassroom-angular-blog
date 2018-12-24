import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor() {
  }

  ngOnInit() {
  }

  //used to get the color of the current post's text
  getColor(){
    if (this.post.getLoveIts() === 0) {
      return 'black';
    } else if (this.post.getLoveIts() < 0) {
      return 'red';
    } else if (this.post.getLoveIts() > 0) {
      return 'green';
    }
  }

  //called on the like button, increment post.loveIts by 1;
  onLike() {
    this.post.addLoveIts();
  }

  //called on the dislike button, decrement post.loveIts by 1;
  onDislike() {
    this.post.minusLoveIts();
  }
}

//our type post
export class Post {

  private title: string;
  private content: string;
  private loveIts: number;
  private created_at: Date;

  public constructor(title: string, content: string) {
    this.title = title;
    this.content = content
    this.loveIts = 0;
    this.created_at = new Date();
  }
  
  public getTitle() {
    return this.title;
  }
  public getContent() {
    return this.content;
  }
  public getLoveIts() {
    return this.loveIts;
  }
  public getCreated_at() {
    return this.created_at;
  }
  public addLoveIts() {
    this.loveIts++;
  }
  public minusLoveIts() {
    this.loveIts--;
  }
}
