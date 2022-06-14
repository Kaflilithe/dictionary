import { Component, OnInit } from '@angular/core';
import { AppService, Theme } from '../../../../core/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  theme = {
    light: Theme.LIGHT,
    dark: Theme.DARK
  }
  constructor(
    public app: AppService
  ) {

  }

  ngOnInit(): void {
  }

}
