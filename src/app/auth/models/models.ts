export interface LoginResponse200 {
  token: string;
  id: number;
  role: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface VerifyResponse {
  id: number;
  role: string;
}
