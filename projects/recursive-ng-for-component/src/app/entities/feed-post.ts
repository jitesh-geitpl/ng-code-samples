export interface FeedPost {
    username: string | null | undefined;
    profileImg?: string | null | undefined;
    location?: string | null | undefined;
    images?: string[] | null | undefined;
    textContent: string | null | undefined;
    likes?: number | null | undefined;
    comments?: Comment[] | null | undefined;
}

export interface Comment {
    comment: string | null | undefined;
    username: string | null | undefined;
    profileImg?: string | null | undefined;
    likes?: number | null | undefined;
    replies?: Comment[] | null | undefined;
}
