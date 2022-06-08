import { Component, OnInit } from '@angular/core';
import { AuthService, LoginDto } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user: LoginDto = {
    login: '',
    password: '',
  };

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.user).subscribe(data => {
      localStorage.setItem('token', data.token);
      this.router.navigate([''])
    });
  }

}
