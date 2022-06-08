import { Component } from '@angular/core';
import { AuthService, LoginDto } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: LoginDto = {
    login: '',
    password: '',
  };

  constructor(
    public authService: AuthService
  ) {
  }

  onSubmit() {
    this.authService.registration(this.user).subscribe(data => {
      console.log(data);
    });
  }
}
