import { Component, OnInit } from '@angular/core';
import { WordCreateDto, WordDto, WordService } from '../../core/services/word.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  name = '';
  words: WordDto[] = [];

  addWordControl = new FormControl('', [Validators.required]);

  get isError() {
    return this.addWordControl.touched && this.addWordControl.hasError('required')
  }

  constructor(
    public wordService: WordService
  ) {
  }

  ngOnInit(): void {
    this.wordService.getAll().subscribe(data => {
      this.words = data;
    });
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

  update(word: WordDto) {
    this.wordService.updateWord(word).subscribe();
  }
}
