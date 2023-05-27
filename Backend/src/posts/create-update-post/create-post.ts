import { Comment } from "src/comments/comment";

export class CreatePost {
    user: string;
    post_date: string;
    description: string;
    likes?: number;
    url_imagem?: string;
    comments?: Comment[];
  }