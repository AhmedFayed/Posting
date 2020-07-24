import { ConfirmationDialogService } from './../../Shared/ConfirmationDialog/ConfirmationDialog.service';

import { PostModel } from './../../Models/post';
import { RestApiService } from './../../Services/post.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @ViewChild('form') form: Form;
  post = new PostModel();
  constructor(private restApiService: RestApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id) {
      const id = +this.activatedRoute.snapshot.params.id;
      this.restApiService.getPost(id).subscribe(
          (d) => {
            this.post = d;
          }
        );
    }
  }

onDelete() {
  this.confirmationDialogService.confirm('Please confirm..', 'Are You Sure?')
  .then((confirmed) => {
    if (confirmed) {
      this.restApiService.deletePost(this.post)
      .subscribe(
        (d) => {
          console.log(d);
          this.router.navigate(['../']);
        }
      );
      }
  })
  .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));



}

onBack() {
  this.router.navigate(['../']);
}

onSubmit() {
  this.restApiService.updatePost(this.post.id, this.post)
  .subscribe(
    (d) => {
      console.log(d);
      this.router.navigate(['../']);
    }
  );

}
}
