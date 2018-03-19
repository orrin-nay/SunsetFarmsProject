import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      email: this.email,
      password: this.password
    };

    this.authService.authenticateUser(this.email, this.password).subscribe(data => {
      if (data.data.Login.authToken){
        this.authService.storeUserData(data.data.Login.authToken, data.data.Login.user);
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 5000});
        this.router.navigate(['profile']);
      } else {
        this.flashMessage.show(data.data.Login.error, {
          cssClass: 'alert-danger',
          timeout: 5000});
        this.router.navigate(['login']);
      }
    });
  }

}
