import { element } from 'protractor';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-viewMessages',
  templateUrl: './dashboard.viewMessages.component.html',
  styleUrls: ['./dashboard.viewMessages.component.css']
})
export class ViewMessagesComponent implements OnInit {
  subject: string;
  message: string;
  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router) {
      this.subject = localStorage.getItem('subject');
      this.message = localStorage.getItem('message');
     }

  ngOnInit() {
  }
  submit(): void {
    if ((this.subject === undefined || this.subject === '') ||
      (this.message === undefined || this.message === '')) {
        this.flashMessage.show('Please Fill Out All Fields', {cssClass: 'alert-danger', timeout: 3000});
      }else {
        this.router.navigate(['dashboard/filters']);
      }
  }
  saveMessage(): void {
    localStorage.setItem('subject', this.subject);
    localStorage.setItem('message', this.message);
  }
}
