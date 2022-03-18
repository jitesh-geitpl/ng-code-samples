import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedRoutingModule } from './feed-routing.module';
import { CommentModule } from '../comment/comment.module';



@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    CommentModule,
  ],
  exports: [FeedComponent]
})
export class FeedModule { }
