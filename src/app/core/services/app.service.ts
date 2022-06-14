import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export enum Theme {
  LIGHT = 'fantasy',
  DARK = 'business'
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    @Inject(DOCUMENT) private doc: Document,
  ) {
  }

  toggleTheme(theme: Theme) {
    const html = this.doc.documentElement;
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}
