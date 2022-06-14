import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get(`${this.url}/all`).pipe(
      map(data => (data as any).items)
    );
  }

  updateWord(word: WordDto) {
    return this.http.put(`${this.url}/${word.id}`, word);
  }

  addWord(word: WordCreateDto) {
    return this.http.post<WordDto>(`${this.url}`, word);
  }

  delete(id: number) {
    return this.http.delete<WordDto>(`${this.url}/${id}`);
  }
}
