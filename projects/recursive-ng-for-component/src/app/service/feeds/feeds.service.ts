import { Injectable } from '@angular/core';
import { Comment, FeedPost } from '../../entities/feed-post';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {
  private readonly feeds: FeedPost[] = [
    {
      textContent: 'Start by doing comments, likes and replies.',
      username: 'Jitesh Yadav',
      location: 'Indore',
      profileImg: '/assets/me.jpg',
      likes: 7,
      images: [
        '/assets/me.jpg'
      ],
      comments: [
        {
          username: 'Jitesh Yadav',
          comment: 'Nice post',
          profileImg: '/assets/me.jpg',
          likes: 7,
          replies: [
            {
              username: 'Jitesh Yadav',
              comment: 'Nice post',
              profileImg: '/assets/me.jpg',
              likes: 2,
              replies: [
                {
                  username: 'Jitesh Yadav',
                  comment: 'Nice post',
                  profileImg: '/assets/me.jpg',
                  likes: 5,
                }
              ]
            },
            {
              username: 'Jitesh Yadav',
              comment: 'Nice post',
              profileImg: '/assets/me.jpg',
              likes: 3,
            }
          ]
        },
        {
          username: 'Jitesh Yadav',
          comment: 'Nice post',
          profileImg: '/assets/me.jpg',
          likes: 7,
        }
      ]
    }
  ];

  public getFeeds() {
    return this.feeds;
  }
}
