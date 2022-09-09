// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';

// // import { AssignmentComponent1 } from './Assignment-1.1/Assignment.component-1';
// // import { AssignmentComponent2 } from './Assignment-1.2/Assignment.component-2';
// // import { AssignmentComponent3 } from './Assignement-2/Assignment.component-3';

// // import { ServerComponent } from './server/server.component';
// // import { ServersComponent } from './servers/servers.component';


// @NgModule({
//   declarations: [
//     AppComponent],
//     // ServerComponent,
//     // ServersComponent,
//     // AssignmentComponent1,
//     // AssignmentComponent2,
//     // AssignmentComponent3
    
    
  
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SocialService } from '../service/SocialService.service';

// import { SocialService } from '../service/SocialService.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [SocialService],
  bootstrap: [AppComponent]
})
export class AppModule {}
