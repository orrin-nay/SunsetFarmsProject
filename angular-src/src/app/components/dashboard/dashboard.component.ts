import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  addUserName: String;
  addUserEmail: String;
  addUserPhone: string;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onAddUserSubmit(){

    const user = {
      name: this.addUserName,
      email: this.addUserEmail,
      phone: this.addUserPhone
    };

    // Required Fields
    if (!this.validateService.validateAddUser(user)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if (user.email) {
      // Validate Email
      if (!this.validateService.validateEmail(user.email)){
        this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
        return false;
      }
    }
    if (user.phone) {
      // Validate Email
      if (!this.validateService.validatePhone(user.phone)){
        this.flashMessage.show('Please use a valid phone number', {cssClass: 'alert-danger', timeout: 3000});
        return false;
      }
    }

    // Register user
    this.authService.addUser(user).subscribe(data => {
      if (data.data.addUser.success){
        this.flashMessage.show(data.data.addUser.success, {cssClass: 'alert-success', timeout: 12000});
        this.addUserEmail = '';
        this.addUserName = '';
      } else {
        this.flashMessage.show(data.data.addUser.error, {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

}
