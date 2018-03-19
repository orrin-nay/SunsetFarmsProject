import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../../types/User';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RegisterService } from './../../../services/register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register.info.component.ts',
  templateUrl: './register.info.component.html',
  styleUrls: ['./register.info.component.css']
})
export class RegisterInfoComponent implements OnInit {

  user: User;
  constructor(
    private registerService: RegisterService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.registerService.getUserInfo();
  }
  next(): void {
    const userInfoErr = this.registerService.setUserInfo(this.user);
    if (userInfoErr) {
      this.flashMessage.show(userInfoErr, {cssClass: 'alert-danger', timeout: 3000});
      return;
    }
    this.router.navigate(['/register/' + this.route.snapshot.params['token'] + '/skills']);
  }
}
