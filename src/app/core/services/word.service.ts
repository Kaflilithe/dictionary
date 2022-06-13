import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface WordDto {
  associate: string;
  createdAt: string;
  done: boolean;
  id: number;
  name: string;
  translate: string;
  updatedAt: string;
  userId: number;
}

export type WordCreateDto = Partial<WordDto>;

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private url = '/api/v1/word';

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<WordDto[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get(`${this.url}/all`, {headers}).pipe(
      map(data => (data as any).items)
    );
  }

  updateWord(word: WordDto) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.put(`${this.url}/${word.id}`, word, {headers});
  }

  addWord(word: WordCreateDto) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.post<WordDto>(`${this.url}`, word, {headers});
  }

  delete(id: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.delete<WordDto>(`${this.url}/${id}`, {headers});
  }
}
