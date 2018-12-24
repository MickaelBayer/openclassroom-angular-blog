import { Component } from '@angular/core';
//importation of our type post, declared in post.component.ts
import { Post } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //array of posts
  posts = [
      new Post("My first post", "fruer zeezzrezze ezovnfefzbf ezifbez pakd aifab faof, ai to,ge8f zi jezfezinfe, feznficnznkezic ikiznkz5fz,,znfze."),
      new Post("My second post", "fruer zeezzrezze ezovnfei to,ge8f zi jezfezinfe, feznficnznkezic ikiznkz5fz,,znfze."),
      new Post("Another post", "fruer zeezzrezze ezovnfei to, feznficnznkezic ikiznkz5fz,,znfze.")
  ];
}
