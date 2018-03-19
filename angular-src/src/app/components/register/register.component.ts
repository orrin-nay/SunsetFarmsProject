import { User } from './../../types/User';
import { RegisterService } from './../../services/register.service';
import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  password: string;
  repeatePassword: string;

  token: any;

  jwtHelper: JwtHelper;

  constructor(
    private registerService: RegisterService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.registerService.init(this.route.snapshot.params['token']);
    this.user = this.registerService.getUserInfo();
  }

  onRegisterSubmit(): void {
    const passwordError = this.registerService.setPassword(this.password, this.repeatePassword);
    if (passwordError) {
      this.flashMessage.show(passwordError, {cssClass: 'alert-danger', timeout: 3000});
      return;
    }
    this.router.navigate(['/register/' + this.route.snapshot.params['token'] + '/info']);
  }
}
