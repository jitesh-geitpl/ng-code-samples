import { Component, OnInit } from '@angular/core';
import { FeedPost } from '../../entities/feed-post';
import { FeedsService } from '../../service/feeds/feeds.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  public feeds: FeedPost[] = [];

  constructor(private feedsService: FeedsService) {}

  ngOnInit(): void {
    this.feeds = this.feedsService.getFeeds();
  }
}
