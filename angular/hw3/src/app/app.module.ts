import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './entity/user/commponents/user/user.component';
import { UserDetailsComponent } from './entity/user/commponents/user-details/user-details.component';
import { UserDetailsTwoComponent } from './entity/user/commponents/user-details-two/user-details-two.component';
import { UserDetailsThreeComponent } from './entity/user/commponents/user-details-three/user-details-three.component';
import { AllUsersComponent } from './entity/user/commponents/all-users/all-users.component';
import { AllPostsComponent } from './entity/user/commponents/all-posts/all-posts.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {UserResolveService} from "./entity/user/services/user-resolve.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    UserDetailsTwoComponent,
    UserDetailsThreeComponent,
    AllUsersComponent,
    AllPostsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users', component: AllUsersComponent, resolve: {xxx: UserResolveService},
        children: [
          {
            path: 'details/:id', component: UserDetailsThreeComponent
          },
          {
            path: 'posts', component: AllPostsComponent
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
