import { Component, OnInit } from '@angular/core';
import { CommentServiceService } from 'src/app/service/comment-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
 comments: Comment[] = [];
 
 constructor(private commentService: CommentServiceService) {
  this.comments = this.commentService.getCommentsFromArray();
 }


 public ngOnInit(): void {
   this.comments = this.commentService.getCommentsFromArray();
 }
}
