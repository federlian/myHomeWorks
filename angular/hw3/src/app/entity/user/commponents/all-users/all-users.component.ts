import { Component } from '@angular/core';
import {User} from "../../../../models/User";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

  usersList: User[] = [];

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.data.subscribe(value => console.log(value));
    this.activatedRoute.data.subscribe(value => this.usersList = value.xxx);
  }
}
