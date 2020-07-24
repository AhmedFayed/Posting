import { ConfirmationDialogService } from './Shared/ConfirmationDialog/ConfirmationDialog.service';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post-list/post/post.component';
import { RestApiService } from './Services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { ConfirmationDialogComponent } from './Shared/ConfirmationDialog/ConfirmationDialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [

  {
    path: '',
    component: PostListComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  }
  ];


@NgModule({
   declarations: [
      AppComponent,
      PostListComponent,
      PostComponent,
      ConfirmationDialogComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      FormsModule,
      HttpClientModule,
      NgbModule
   ],
   providers: [RestApiService, ConfirmationDialogService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
