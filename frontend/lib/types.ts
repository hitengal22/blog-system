export interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    author: string;
    slug: string;
}

export interface PostsResponse {
    status: string;
    data: {
        posts: Post[];
        totalPages: number;
        page: number;
    };
}

export interface PostResponse {
    status: string;
    data: Post;
}

export interface Comment {
    id: number;
    name: string;
    comment: string;
    created_at: string
}

export interface CommentResponse {
    status: string;
    data: Comment[];
}

export interface CommentAddResponse { 
    status: string;
    data: number;
    error?: string;
}

export interface ContactResponse {
    status: string;
    data: string;
    error?: string;
}