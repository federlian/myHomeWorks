import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoute.queryParams.subscribe(value => {
      console.log(value);
      this.postService.getPostsByUserId(value.id).subscribe(value1 => {
        console.log(value1);
      })
    })
  }

  ngOnInit(): void {
  }

}
