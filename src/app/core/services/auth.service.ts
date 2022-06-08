import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface UserDto {
  firstname: string;
  lastname: string;
  settings: {
    userId: number;
    theme: string;
    wordsPerDay: number;
    telegramName: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface LoginDto {
  login: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = '/api/v1/auth';

  constructor(
    private http: HttpClient
  ) {
  }

  login(dto: LoginDto) {
    return this.http.post<LoginResponse>(`${this.url}/login`, dto);
  }

  registration(dto: LoginDto) {
    return this.http.post<UserDto>(`${this.url}/registration`, dto);
  }

}
