import { PostModel } from './../Models/post';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch PostModels list
  getPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>(this.apiURL + '/posts')
    .pipe(
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch PostModel
  getPost(id): Observable<PostModel> {
    return this.http.get<PostModel>(this.apiURL + '/posts/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Create PostModel
  createPost(PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(this.apiURL + '/posts', JSON.stringify(PostModel), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API put() method => Update PostModel
  updatePost(id, PostModel): Observable<PostModel> {
    return this.http.put<PostModel>(this.apiURL + '/posts/' + id, JSON.stringify(PostModel), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete PostModel
  deletePost(id){
    return this.http.delete<PostModel>(this.apiURL + '/posts/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
