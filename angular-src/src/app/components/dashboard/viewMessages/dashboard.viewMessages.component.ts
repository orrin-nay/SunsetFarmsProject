import {element} from 'protractor';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";


@Component({
    selector: 'app-dashboard-viewMessages',
    templateUrl: './dashboard.viewMessages.component.html',
    styleUrls: ['./dashboard.viewMessages.component.css']
})
export class ViewMessagesComponent implements OnInit {
    constructor(private flashMessage: FlashMessagesService,
                private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
        let messages = this.authService.getMessages('', '14354146499', '');
        console.log(messages, 'messages from client');
    }
}
