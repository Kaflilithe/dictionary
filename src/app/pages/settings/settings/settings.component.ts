import { Component, OnInit } from '@angular/core';
import { AuthService, UserDto } from '../../../core/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user?: UserDto;
  settings: UserDto['settings'] = {
    userId: 0,
    theme: '',
    wordsPerDay: 0,
    telegramName: ''
  }
  constructor(
    public authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      this.user = user;
      this.settings = user.settings
    });
  }

}
