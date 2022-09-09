import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { filter, map } from 'rxjs/operators';



class FRIENDS {
  name : string;
  likecount : number;
}
@Injectable()
export class SocialService { 
  
  
  constructor(private http: HttpClient) {
  }

  friends: FRIENDS[];
  friend: FRIENDS;
  privateurl = '../assets/Friends.json';
  getFriends() : Observable<FRIENDS[]> {
    return this.http.get<FRIENDS[]>(this.privateurl);
    
  }
  
  likeFriend(){
    console.log("Like Friends got called");
  }

  }
