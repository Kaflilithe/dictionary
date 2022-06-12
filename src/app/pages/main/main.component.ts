import { Component, OnInit } from '@angular/core';
import { WordCreateDto, WordDto, WordService } from '../../core/services/word.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  name = '';
  words: WordDto[] = [];

  constructor(
    public wordService: WordService
  ) {
  }

  ngOnInit(): void {
    this.wordService.getAll().subscribe(data => {
      this.words = data;
    });
  }

  updateWord(word: WordDto) {
    this.wordService.updateWord(word).subscribe();
  }

  addWord(name: string) {
    const dto: WordCreateDto = {
      name: name
    };
    this.wordService.addWord(dto).subscribe((word) => {
      this.words.unshift(word);
      this.name = '';
    });
  }

  deleteWord(id: number) {
    this.wordService.delete(id).subscribe((word) => {
      this.words = this.words.filter(dto => dto.id !== word.id);
    });
  }
}
