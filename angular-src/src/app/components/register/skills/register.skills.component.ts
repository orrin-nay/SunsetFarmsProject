import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RegisterService } from './../../../services/register.service';
import { User } from './../../../types/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register.skills',
  templateUrl: './register.skills.component.html',
  styleUrls: ['./register.skills.component.css']
})
export class RegisterSkillsComponent implements OnInit {
  user: User;
  skillSuggestions: Array<string>;
  canSubmit: boolean;
  skillField: string;
  constructor(
    private registerService: RegisterService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.user = this.registerService.getUserInfo();
    this.skillSuggestions = await this.registerService.getSkills();
    this.canSubmit = false;
    this.registerService.setToken(this.route.snapshot.params['token']);
  }
  skillSearchChange(): void {
    this.skillField = this.registerService.titleCase(this.skillField);
    if (this.skillSuggestions.indexOf(this.skillField) !== -1) {
      this.canSubmit = true;
    }else {
      this.canSubmit = false;
    }
  }
  async addSkill(): Promise<void> {
    this.registerService.addSkill(this.skillField);
    this.user = this.registerService.getUserInfo();
    this.skillSuggestions = await this.registerService.getSkills();
    this.skillField = '';
    this.skillSearchChange();
  }
  async removeItem(skill: string): Promise<void> {
   this.registerService.removeSkill(skill);
   this.user = this.registerService.getUserInfo();
   this.skillSuggestions = await this.registerService.getSkills();
 }
 register(): any {
  this.registerService.register().subscribe(data => {
    console.log(data);

    if (data.data.Register.success) {
      this.flashMessage.show(data.data.Register.success, {
        cssClass: 'alert-success',
        timeout: 5000});
      this.router.navigate(['login']);
    } else {
      this.flashMessage.show(data.data.Register.error, {
        cssClass: 'alert-danger',
        timeout: 5000});
    }
  });
}
}
