import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
      this.postsSubject.next(this.posts.slice());
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      });
  }

  createNewPost(newPost: Post) {
    console.log(newPost);
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postElement) => {
        if (postElement === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  plusLoveIts(post: Post) {
    const postIndexPlusLoveIts = this.posts.findIndex(
      (postElement) => {
        if (postElement === post) {
          return true;
        }
      }
    );
    this.posts[postIndexPlusLoveIts].loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  minusLoveIts(post: Post) {
    const postIndexPlusLoveIts = this.posts.findIndex(
      (postElement) => {
        if (postElement === post) {
          return true;
        }
      }
    );
    this.posts[postIndexPlusLoveIts].loveIts--;
    this.savePosts();
    this.emitPosts();
  }
  
}
