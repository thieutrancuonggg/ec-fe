export interface AuthUser {
  id: number;
  email: string;
  name: string;
  role: "ADMIN" | "USER";
  createdAt: string;
  updatedAt: string;
}

export interface AuthPayload {
  accessToken: string;
  refreshToken: string;
  user: AuthUser;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  email: string;
  password: string;
  name: string;
}
