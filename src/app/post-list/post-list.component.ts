import { RestApiService } from './../Services/post.service';
import { Component, OnInit } from '@angular/core';
import { PostModel } from '../Models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Array<PostModel>;
  constructor(private restApiService: RestApiService, private route: Router) {
  }

  ngOnInit() {
    this.restApiService.getPosts().subscribe(
      (d) => {
        this.posts = d;
      }
    );
  }
  onOpen(id) {
    if (id) {
      this.route.navigate(['post/', id]);
    }
  }

}
