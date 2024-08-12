export interface User {
  name: string;
  email: string;
  image: string;
  access_token: string;
}

export interface AuthSession {
  user: User;
}
