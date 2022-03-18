import { Component, Input } from '@angular/core';
import { Comment } from '../../entities/feed-post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: Comment | null = null;
}
