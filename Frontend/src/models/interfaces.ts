export interface Posts {
  "user": string;
  "post-date": string;
  "description": string;
  "likes": number;
  "comments": {
      "user": string;
      "comment": string;
  }[],
  "url-imagem": string;
}

export interface Users {
  name: string;
  user: string;
  birthdate: string;
  email: string;
  password: string;
  profile_photo: string;
}

export interface UserPattern {
  name: string;
  user: string;
  birthdate: string;
  email: string;
  profile_photo: string;
}

export interface BodyRequest {
  username: string;
  password: string;
}

export interface PostResponse { 
  login: boolean, 
  userData: {
    name: string;
    user: string;
    email: string;
    birthdate: string;
    profile_photo: string;
  }
}