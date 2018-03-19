import { ModalComponent } from './../helperComponents/modals/ModalComponent';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from './../../types/User';
import { ValidateService } from './../../services/validate.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Gender } from '../../types/enums/gender.enum';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User;
  newEmail: string;
  newPhone: string;
  newDOB: string;
  newGender: Gender;
  newHOH: boolean;
  newPassword1: string;
  newPassword2: string;
  newSkill: string;
  canSubmit: boolean;

  availableSkills: Array<string>;

  constructor(private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private skillsService: SkillsService,
    private router: Router) {
    this.user = authService.getProfile();

    this.newEmail = this.user.email;
    this.newPhone = this.getFormatedPhone();
    this.newDOB = this.user.dOB;
    this.newGender = this.user.gender;
    this.newHOH = this.user.hOH;

    this.skillsService.getSkills(this.user.skills).then(skills=>{
      this.availableSkills = skills
    })
    this.canSubmit = false;
  }
  skillSearchChange(): void {
    this.newSkill = this.validateService.titleCase(this.newSkill);
    if (this.availableSkills.indexOf(this.newSkill) !== -1) {
      this.canSubmit = true;
    }else {
      this.canSubmit = false;
    }
  }
  getList(): string {
    return this.user.skills.toString().replace(/,/g, ', ');
  }
  changeEmail(emailModal: ModalComponent): void {
    if (this.newEmail === undefined || this.newEmail === '') {
      emailModal.setErrorMessage('Please Enter An Email');
      return;
    }
    if (this.validateService.validateEmail(this.newEmail)) {
      this.authService.changeEmail(this.newEmail).subscribe(data => {
        if (data.data.ChangeEmail.success) {
          this.user.email = this.newEmail;
          this.authService.storeUserDataNoToken(this.user);
          this.flashMessage.show(data.data.ChangeEmail.success, { cssClass: 'alert-success', timeout: 12000 });
          emailModal.hide();
        } else {
          emailModal.setErrorMessage(data.data.ChangeEmail.error);
        }
      });
    } else {
      emailModal.setErrorMessage('Please Enter A Valid Email');
    }
  }
  changePhone(phoneModal: ModalComponent): void {
    if (this.newPhone === undefined || this.newPhone === '') {
      phoneModal.setErrorMessage('Please Enter An Phone');
      return;
    }
    if (this.validateService.validatePhone(this.newPhone)) {
      this.newPhone = this.validateService.cleanPhone(this.newPhone);
      this.authService.changePhone(this.newPhone).subscribe(data => {
        if (data.data.ChangePhone.success) {
          this.user.phone = this.newPhone;
          this.authService.storeUserDataNoToken(this.user);
          this.flashMessage.show(data.data.ChangePhone.success, { cssClass: 'alert-success', timeout: 12000 });
          phoneModal.hide();
        } else {
          phoneModal.setErrorMessage(data.data.ChangePhone.error);
        }
      });
    } else {
      phoneModal.setErrorMessage('Please Enter A Valid Phone');
    }
  }
  changeDOB(dOBModal: ModalComponent): void {
    if (this.newDOB === undefined || this.newDOB === '') {
      dOBModal.setErrorMessage('Please Enter A Date Of Birth');
      return;
    }
    if (this.validateService.validateDate(this.newDOB)) {
      this.authService.changeDOB(this.newDOB).subscribe(data => {
        if (data.data.ChangeDOB.success) {
          this.user.dOB = this.newDOB;
          this.authService.storeUserDataNoToken(this.user);
          this.flashMessage.show(data.data.ChangeDOB.success, { cssClass: 'alert-success', timeout: 12000 });
          dOBModal.hide();
        } else {
          dOBModal.setErrorMessage(data.data.ChangeDOB.error);
        }
      });
    } else {
      dOBModal.setErrorMessage('Please Enter A Valid Date Of Birth');
    }
  }
  changeGender(genderModal: ModalComponent): void {
    if (this.newGender === undefined) {
      genderModal.setErrorMessage('Please Enter A Gender');
      return;
    }
    if (this.validateService.validateGender(this.newGender)) {
      this.authService.changeGender(this.newGender).subscribe(data => {
        if (data.data.ChangeGender.success) {
          this.user.gender = this.newGender;
          this.authService.storeUserDataNoToken(this.user);
          this.flashMessage.show(data.data.ChangeGender.success, { cssClass: 'alert-success', timeout: 12000 });
          genderModal.hide();
        } else {
          genderModal.setErrorMessage(data.data.ChangeGender.error);
        }
      });
    } else {
      genderModal.setErrorMessage('Please Enter A Valid Gender');
    }
  }
  changeHOH(hOHModal: ModalComponent): void {
    if (this.newHOH === undefined) {
      hOHModal.setErrorMessage('Please Enter If You Are Head Of House Hold');
      return;
    }
    if (!this.validateService.validateHOH(this.newHOH)) {
      this.authService.changeHOH(this.newHOH).subscribe(data => {
        if (data.data.ChangeHOH.success) {
          this.user.hOH = this.newHOH;
          this.authService.storeUserDataNoToken(this.user);
          this.flashMessage.show(data.data.ChangeHOH.success, { cssClass: 'alert-success', timeout: 12000 });
          hOHModal.hide();
        } else {
          hOHModal.setErrorMessage(data.data.ChangeHOH.error);
        }
      });
    } else {
      hOHModal.setErrorMessage('Please Enter A Head Of House Hold');
    }
  }
  changePassword(passwordModal: ModalComponent): void {
    if (this.newPassword1 === undefined || this.newPassword2 === undefined) {
      passwordModal.setErrorMessage('Please Enter Password Twice');
      return;
    }
    const pasowrdErr = this.validateService.validateNewPassowrd(this.newPassword1, this.newPassword2);
    if (!pasowrdErr) {
      this.authService.changePassword(this.newPassword1).subscribe(data => {
        if (data.data.ChangePassword.success) {
          this.flashMessage.show(data.data.ChangePassword.success, { cssClass: 'alert-success', timeout: 12000 });
          passwordModal.hide();
        } else {
          passwordModal.setErrorMessage(data.data.ChangePassword.error);
        }
      });
    } else {
      passwordModal.setErrorMessage(pasowrdErr);
    }
  }
  removeSkill(skill: string): void {
    const index = this.user.skills.indexOf(skill);
    if (index !== -1) {
      this.authService.removeSkill(skill).subscribe(async (data) => {
        console.log(data);
        if (data.data.RemoveSkill.success) {
          this.user.skills.splice(index, 1);
          this.authService.storeUserDataNoToken(this.user);
          this.availableSkills = await this.skillsService.getSkills(this.user.skills);
        } else {
        }
      });
    }
  }
  addSkill(skillsModal: ModalComponent): void {
    if (this.availableSkills.indexOf(this.newSkill) !== -1) {
      this.authService.addSkill(this.newSkill).subscribe(async (data) => {
        console.log(data);

        if (data.data.AddSkill.success) {
          try {
            if (this.user.skills.indexOf(this.newSkill) === -1) {
              this.user.skills.push(this.newSkill);
            }
          } catch (err) {
            this.user.skills = new Array<String>();
            this.user.skills.push(this.newSkill);
          }
          this.authService.storeUserDataNoToken(this.user);
          this.availableSkills = await this.skillsService.getSkills(this.user.skills);
          this.newSkill = '';
          this.skillSearchChange();
        } else {
          skillsModal.setErrorMessage(data.data.AddSkill.error);
        }
      });
    }else {
      skillsModal.setErrorMessage('Invalid Skill');
    }
  }
  getFormatedDOB(): string {
    let date = this.user.dOB.slice(5, 7);
    date += '/';
    date += this.user.dOB.slice(8, 10);
    date += '/';
    date += this.user.dOB.slice(0, 4);
    return date;
  }
  getFormatedPhone(): string {
    let phone = '(';
    phone += this.user.phone.slice(0, 3);
    phone += ') ';
    phone += this.user.phone.slice(3, 6);
    phone += '-';
    phone += this.user.phone.slice(6, 11);
    return phone;
  }
  getFormatedHOH(): string {
    if (this.user.hOH.toString() === 'true') {
      return 'yes';
    }
    return 'no';
  }
}
