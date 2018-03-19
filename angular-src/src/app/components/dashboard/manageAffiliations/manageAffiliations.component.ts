import { Component, OnInit } from "@angular/core";
import { SkillsService } from "../../../services/skills.service";
import { AuthService } from "../../../services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { ModalComponent } from "../../helperComponents/modals/ModalComponent";

@Component({
  selector: "app-manageAffiliations",
  templateUrl: "./manageAffiliations.component.html",
  styleUrls: ["./manageAffiliations.component.css"]
})
export class ManageAffiliationsComponent implements OnInit {
  skills: String[];
  canSubmit: boolean;
  affiliationField: String;
  affiliationToBeRemoved: String;
  constructor(
    private skillsService: SkillsService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService
  ) {}

  async ngOnInit(): Promise<any> {
    await this.getSkills();
    this.addAffiliationChange();
  }
  addAffiliationChange() {
    this.canSubmit = true;

    if (!this.affiliationField) {
      this.canSubmit = false;
      return;
    }

    this.affiliationField = this.affiliationField
      .toLowerCase()
      .split(" ")
      .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    if (this.affiliationField.length === 0) {
      this.canSubmit = false;
      return;
    }
    const upperCaseSkills = this.skills.map(value => {
      return value.toUpperCase();
    });

    if (upperCaseSkills.indexOf(this.affiliationField.toUpperCase()) !== -1) {
      this.canSubmit = false;
      return;
    }
  }
  addAffiliation() {
    this.authService
      .addAffiliationAdmin(this.affiliationField)
      .subscribe(data => {
        if (data.data.AddAffiliationAdmin.success) {
          this.flashMessage.show("Added Affiliation " + this.affiliationField, {
            cssClass: "alert-success",
            timeout: 3000
          });
          this.skills.push(this.affiliationField);
          this.affiliationField = "";
        } else if (data.data.AddAffiliationAdmin.error) {
          this.flashMessage.show(data.data.AddAffiliationAdmin.error, {
            cssClass: "alert-danger",
            timeout: 3000
          });
        }
      });
  }
  removeAffiliation(AreYouSureModal: ModalComponent) {
    AreYouSureModal.hide();
    this.authService
      .removeAffiliationAdmin(this.affiliationToBeRemoved)
      .subscribe(data => {
        if (data.data.RemoveAffiliationAdmin.success) {
          this.flashMessage.show(
            "Removed Affiliation " + this.affiliationToBeRemoved,
            {
              cssClass: "alert-success",
              timeout: 3000
            }
          );
          this.skills.splice(
            this.skills.indexOf(this.affiliationToBeRemoved),
            1
          );
          this.affiliationToBeRemoved = "";
        } else if (data.data.RemoveAffiliationAdmin.error) {
          this.flashMessage.show(data.data.RemoveAffiliationAdmin.error, {
            cssClass: "alert-danger",
            timeout: 3000
          });
        }
      });
  }
  async getSkills() {
    this.skills = [];
    (await this.skillsService.getSkillsList()).forEach(skill => {
      this.skills.push(skill);
    });
  }
  currentAffiliation(affiliation: string) {
    this.affiliationToBeRemoved = affiliation;
  }
}
