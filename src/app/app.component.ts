import { Component, OnInit } from '@angular/core';
import { AppService, Theme } from './core/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  theme = {
    light: Theme.LIGHT,
    dark: Theme.DARK
  }

  constructor(
    public app: AppService
  ) {
    const theme = localStorage.getItem('theme') as Theme
    this.app.toggleTheme(theme)
  }

  ngOnInit(): void {
  }
}
