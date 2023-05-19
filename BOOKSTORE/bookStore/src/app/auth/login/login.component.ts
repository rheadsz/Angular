import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/type/Auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form: LoginForm = {
    email: '',
    password: '',
  };

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
 constructor(private authService: AuthService){

 }

 submit() {
  this.authService.login(this.form);
}

isLoading() {
  return this.authService.isLoading;
}
}
