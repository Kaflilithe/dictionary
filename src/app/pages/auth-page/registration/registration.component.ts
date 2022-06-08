import { Component, OnInit } from '@angular/core';
import { AuthService, LoginDto } from '../../../core/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: LoginDto = {
    login: '',
    password: '',
  };

  constructor(
    public authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.registration(this.user).subscribe(data => {
      console.log(data);
    });
  }
}
