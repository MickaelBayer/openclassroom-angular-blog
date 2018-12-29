//our type post
export class Post {

    loveIts: number;
    created_at: number; // date.getTime() to store in firebase
  
    public constructor(public title: string, public content: string) {
      this.loveIts = 0;
      this.created_at = new Date().getTime();
    }
  }
  