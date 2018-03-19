// tslint:disable:quotemark
import { FlashMessagesService } from "angular2-flash-messages";
import { Component, Input, OnChanges } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { User } from "../../types/User";
import { Gender } from "../../types/enums/gender.enum";
import { ValidateService } from "../../services/validate.service";
import { ModalComponent } from "../helperComponents/modals/ModalComponent";
import { SkillsService } from "../../services/skills.service";
import { async } from "@angular/core/testing";

@Component({
  selector: "app-user-table",
  templateUrl: "./UserTable.component.html",
  styleUrls: ["./UserTable.component.css"]
})
export class UserTableComponent {
  @Input() users: User[];
  user: User;
  newEmail: string;
  newPhone: string;
  newDOB: string;
  newGender: Gender;
  newHOH: string;
  newPassword1: string;
  newPassword2: string;
  newSkill: string;
  newAdmin: string;
  availableSkills: Array<string>;
  canSubmit: boolean;
  currentUserIndex: number;
  constructor(
    private authService: AuthService,
    private skillsService: SkillsService,
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService
  ) {
    this.user = new User();
  }
  async currentUser(currentUserIndex): Promise<void> {
    this.currentUserIndex = currentUserIndex;
    this.user = this.users[currentUserIndex];
    this.newEmail = this.user.email;
    this.newPhone = this.getFormatedPhone(this.user);
    this.newDOB = this.user.dOB;
    this.newGender = this.user.gender;
    this.newHOH = this.user.hOH.toString();
    this.newAdmin = this.user.admin.toString();
    this.availableSkills = await this.skillsService.getSkills(this.user.skills);
    this.canSubmit = false;
  }
  skillSearchChange(): void {
    this.newSkill = this.validateService.titleCase(this.newSkill);
    if (this.availableSkills.indexOf(this.newSkill) !== -1) {
      this.canSubmit = true;
    } else {
      this.canSubmit = false;
    }
  }
  changeEmail(emailModal: ModalComponent): void {
    if (this.newEmail === undefined || this.newEmail === "") {
      emailModal.setErrorMessage("Please Enter An Email");
      return;
    }
    if (this.validateService.validateEmail(this.newEmail)) {
      this.authService
        .changeEmailAdmin(this.newEmail, this.user.id)
        .subscribe(data => {
          if (data.data.ChangeEmailAdmin.success) {
            this.user.email = this.newEmail;

            this.flashMessage.show(data.data.ChangeEmailAdmin.success, {
              cssClass: "alert-success",
              timeout: 12000
            });
            emailModal.hide();
          } else {
            emailModal.setErrorMessage(data.data.ChangeEmailAdmin.error);
          }
        });
    } else {
      emailModal.setErrorMessage("Please Enter A Valid Email");
    }
  }
  changePhone(phoneModal: ModalComponent): void {
    if (this.newPhone === undefined || this.newPhone === "") {
      phoneModal.setErrorMessage("Please Enter An Phone");
      return;
    }
    if (this.validateService.validatePhone(this.newPhone)) {
      this.newPhone = this.validateService.cleanPhone(this.newPhone);
      this.authService
        .changePhoneAdmin(this.newPhone, this.user.id)
        .subscribe(data => {
          if (data.data.ChangePhoneAdmin.success) {
            this.user.phone = this.newPhone;

            this.flashMessage.show(data.data.ChangePhoneAdmin.success, {
              cssClass: "alert-success",
              timeout: 12000
            });
            phoneModal.hide();
          } else {
            phoneModal.setErrorMessage(data.data.ChangePhoneAdmin.error);
          }
        });
    } else {
      phoneModal.setErrorMessage("Please Enter A Valid Phone");
    }
  }
  changeDOB(dOBModal: ModalComponent): void {
    if (this.newDOB === undefined || this.newDOB === "") {
      dOBModal.setErrorMessage("Please Enter A Date Of Birth");
      return;
    }
    if (this.validateService.validateDate(this.newDOB)) {
      this.authService
        .changeDOBAdmin(this.newDOB, this.user.id)
        .subscribe(data => {
          if (data.data.ChangeDOBAdmin.success) {
            this.user.dOB = this.newDOB;

            this.flashMessage.show(data.data.ChangeDOBAdmin.success, {
              cssClass: "alert-success",
              timeout: 12000
            });
            dOBModal.hide();
          } else {
            dOBModal.setErrorMessage(data.data.ChangeDOBAdmin.error);
          }
        });
    } else {
      dOBModal.setErrorMessage("Please Enter A Valid Date Of Birth");
    }
  }
  changeGender(genderModal: ModalComponent): void {
    if (this.newGender === undefined) {
      genderModal.setErrorMessage("Please Enter A Gender");
      return;
    }
    if (this.validateService.validateGender(this.newGender)) {
      this.authService
        .changeGenderAdmin(this.newGender, this.user.id)
        .subscribe(data => {
          if (data.data.ChangeGenderAdmin.success) {
            this.user.gender = this.newGender;

            this.flashMessage.show(data.data.ChangeGenderAdmin.success, {
              cssClass: "alert-success",
              timeout: 12000
            });
            genderModal.hide();
          } else {
            genderModal.setErrorMessage(data.data.ChangeGenderAdmin.error);
          }
        });
    } else {
      genderModal.setErrorMessage("Please Enter A Valid Gender");
    }
  }
  changeHOH(hOHModal: ModalComponent): void {
    if (this.newHOH === undefined) {
      hOHModal.setErrorMessage("Please Enter If You Are Head Of House Hold");
      return;
    }

    if (!this.validateService.validateHOH(this.newHOH === "true")) {
      this.authService
        .changeHOHAdmin(this.newHOH, this.user.id)
        .subscribe(data => {
          if (data.data.ChangeHOHAdmin.success) {
            this.user.hOH = this.newHOH === "true";

            this.flashMessage.show(data.data.ChangeHOHAdmin.success, {
              cssClass: "alert-success",
              timeout: 12000
            });
            hOHModal.hide();
          } else {
            hOHModal.setErrorMessage(data.data.ChangeHOHAdmin.error);
          }
        });
    } else {
      hOHModal.setErrorMessage("Please Enter A Head Of House Hold");
    }
  }
  changeAdminPrivilege(AdminModal: ModalComponent): void {
    if (this.newHOH === undefined) {
      AdminModal.setErrorMessage("Please Enter Admin Privlage");
      return;
    }
    this.authService
      .changeAdminPrivilege(false, this.user.id)
      .subscribe(data => {
        if (data.data.ChangeAdminPrivilege.success) {
          this.user.admin = this.newAdmin === "true";

          this.flashMessage.show(data.data.ChangeAdminPrivilege.success, {
            cssClass: "alert-success",
            timeout: 12000
          });
          AdminModal.hide();
        } else {
          AdminModal.setErrorMessage(data.data.ChangeAdminPrivilege.error);
        }
      });
  }
  async removeSkill(skill: string): Promise<void> {
    const newSkills = this.user.skills.slice();
    const index = newSkills.indexOf(skill);
    if (index !== -1) {
      this.authService
        .removeSkillAdmin(skill, this.user.id)
        .subscribe(async data => {
          console.log(data);
          if (data.data.RemoveSkillAdmin.success) {
            newSkills.splice(index, 1);

            this.user.skills = newSkills;

            this.availableSkills = await this.skillsService.getSkills(
              this.user.skills
            );
          } else {
          }
        });
    }
  }
  addSkill(skillsModal: ModalComponent): void {
    if (this.availableSkills.indexOf(this.newSkill) !== -1) {
      this.authService
        .addSkillAdmin(this.newSkill, this.user.id)
        .subscribe(async data => {
          if (data.data.AddSkillAdmin.success) {
            try {
              if (this.user.skills.indexOf(this.newSkill) === -1) {
                this.user.skills.push(this.newSkill);
              }
            } catch (err) {
              this.user.skills = new Array<String>();
              this.user.skills.push(this.newSkill);
            }

            this.availableSkills = await this.skillsService.getSkills(
              this.user.skills
            );
            this.newSkill = "";
            this.skillSearchChange();
          } else {
            skillsModal.setErrorMessage(data.data.AddSkillAdmin.error);
          }
        });
    } else {
      skillsModal.setErrorMessage("Invalid Skill");
    }
  }
  getFormatedDOB(user: User): string {
    let date = user.dOB.slice(5, 7);
    date += "/";
    date += user.dOB.slice(8, 10);
    date += "/";
    date += user.dOB.slice(0, 4);
    return date;
  }
  getFormatedPhone(user: User): string {
    let phone = "(";
    phone += user.phone.slice(0, 3);
    phone += ") ";
    phone += user.phone.slice(3, 6);
    phone += "-";
    phone += user.phone.slice(6, 11);
    return phone;
  }
  getFormatedHOH(user: User): string {
    if (user.hOH.toString() === "true") {
      return "yes";
    }
    return "no";
  }
}
