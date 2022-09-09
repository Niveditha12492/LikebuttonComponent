import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

import {SocialService} from '../service/SocialService.service';
import { filter, map } from 'rxjs/operators';


interface FRIENDS {
  name : string;
  likecount : number;
}
@Component({
  selector: 'app-root',
  
  template: `
  <h2>My friends</h2>
  <div>
  <ul>
      
      <li *ngFor= "let f of Friends">
      <!-- <p>{{f.name}} <button type="button" (click)="f.likecount = f.likecount +1; SuccessScenario ? f.disabled = true : f.disabled = false; Sortagain();" class="btn btn-primary p-4" [disabled]= "f.disabled" style="width: 100px"><span>Likes : </span>{{f.likecount}}</button></p> -->
      <p>{{f.name}} <button type="button" (click)="f.likecount = f.likecount +1; Sortagain();" class="btn btn-primary p-4" style="width: 100px"><span>Likes : </span>{{f.likecount}}</button></p>
     
      </li>
      
  </ul>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      Friends1 : FRIENDS;
      Friends : any = [];
      Friends2 : FRIENDS[];
      ErrorScenario:boolean = false;
      SuccessScenario:boolean = true;
      name:string;
      likecount:number;
      
      constructor(public socialservice:SocialService) 
      {
       
      }
  
   
  ngOnInit(): any{
  
    this.socialservice.getFriends().pipe(
      map( Friendss=>  Friendss.sort((a1: FRIENDS, a2: FRIENDS) => a1.likecount - a2.likecount ))
  ).subscribe(Friendsss => this.Friends = Friendsss.reverse().slice(0,5));
    
   
 }

Sortagain() {
  this.Friends.sort((a1: FRIENDS, a2:FRIENDS) => {
    console.log("there");
    return a2.likecount-a1.likecount;
    
});
}


}

