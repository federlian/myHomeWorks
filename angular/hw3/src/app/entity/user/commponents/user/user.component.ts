import {Component, Input} from '@angular/core';
import {User} from "../../../../models/User";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  goSomewhere(id: number): void {
    console.log('goSomewhere');
    this.router.navigate(['details', id], {
      relativeTo: this.activatedRoute,
      state: {userId: id}
    });
  }
}
