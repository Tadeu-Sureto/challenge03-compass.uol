export interface Posts {
  "_id"?: string;
  "user": string;
  "post_date"?: Date;
  "description": string;
  "likes": number;
  "comments": {
      "user": string;
      "comment": string;
  }[],
  "url_imagem": string;
}

export interface Users {
  _id?: string;
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

export interface IUsersRegister {
  name: string;
  user: string;
  birth: string;
  email: string;
  password: string;
}