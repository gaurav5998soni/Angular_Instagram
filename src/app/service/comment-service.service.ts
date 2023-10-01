import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService implements OnInit{

  serviceURL:string;
  comments: Comment[] = [];
  
  

  constructor(private http: HttpClient) { 
    this.serviceURL = 'http://localhost:8080/comments/'
    this.getCommentsById(1).subscribe({
      next: result=> this.comments = result,
      error: err=> alert(err)
    });
  }

  public ngOnInit(): void {
    
  }

  public getCommentsById(id: number): Observable<Comment[]> {

    return this.http.get<Comment[]>(this.serviceURL+id);
  }

  public getCommentsFromArray(): Comment[] {
    return this.comments;
  }

}
