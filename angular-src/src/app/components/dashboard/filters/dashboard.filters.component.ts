import { ModalComponent } from "./../../helperComponents/modals/ModalComponent";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { AuthService } from "./../../../services/auth.service";
import { ValidateService } from "./../../../services/validate.service";
import { element } from "protractor";
import { Component, OnInit } from "@angular/core";
import { User } from "../../../types/User";
import { SkillsService } from "../../../services/skills.service";

@Component({
  selector: "app-dashboard.filters",
  templateUrl: "./dashboard.filters.component.html",
  styleUrls: ["./dashboard.filters.component.css"]
})
export class DashboardFiltersComponent implements OnInit {
  posibleFilterSuggestions: string[];
  filterSuggestions: string[];
  canSubmit: boolean;
  filterField: string;
  filters: string[];
  users: User[];
  numberOfRecipients: number;
  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private skillsService: SkillsService,
    private router: Router
  ) {
    this.skillsService.getSkillsList().then(skills => {
      this.posibleFilterSuggestions = skills.concat([
        "Male",
        "Female",
        "Head Of Household",
        "Not Head Of Household"
      ]);
    });
    try {
      this.filters = JSON.parse(localStorage.getItem("filters"));
    } catch (error) {}
    if (!this.filters) {
      this.filters = [];
    }

    this.updateFilterSujestions();
    this.canSubmit = false;
    this.getFilterResults();
  }

  ngOnInit() {}
  filterSearchChange(): void {
    this.filterField = this.validateService.titleCase(this.filterField);

    if (this.filters.indexOf(this.filterField) !== -1) {
      this.canSubmit = false;
      return;
    }
    if (this.filterSuggestions.indexOf(this.filterField) !== -1) {
      this.canSubmit = true;
    } else if (
      parseInt(this.filterField, 0) <= new Date().getUTCFullYear() &&
      parseInt(this.filterField, 0) > 1900 &&
      this.filters.indexOf(this.filterField) === -1
    ) {
      this.canSubmit = true;
    } else {
      this.canSubmit = false;
    }
    this.updateFilterSujestions();
  }
  addFillter(): void {
    if (this.filterSuggestions.indexOf(this.filterField) !== -1) {
      this.addToFiltersArray();
    } else if (
      parseInt(this.filterField, 0) <= new Date().getUTCFullYear() &&
      parseInt(this.filterField, 0) > 1900
    ) {
      this.addToFiltersArray();
    }
    this.getFilterResults();
  }
  private addToFiltersArray(): void {
    this.filters.push(this.filterField);
    this.filterField = "";
    this.canSubmit = false;
    localStorage.setItem("filters", JSON.stringify(this.filters));
    this.updateFilterSujestions();
  }
  removeFilter(filter: string): void {
    const index = this.filters.indexOf(filter);
    if (index !== -1) {
      this.filters.splice(index, 1);
    }
    localStorage.setItem("filters", JSON.stringify(this.filters));
    this.updateFilterSujestions();
    this.getFilterResults();
  }
  updateFilterSujestions(): void {
    this.filterSuggestions = [];
    this.filterSuggestions = this.filterSuggestions.concat(
      this.posibleFilterSuggestions
    );
    this.filters.forEach(filter => {
      const index = this.filterSuggestions.indexOf(filter);
      if (index !== -1) {
        this.filterSuggestions.splice(index, 1);
      }
    });
    if (this.filters.indexOf("Male") !== -1) {
      this.filterSuggestions.splice(
        this.filterSuggestions.indexOf("Female"),
        1
      );
    }
    if (this.filters.indexOf("Female") !== -1) {
      this.filterSuggestions.splice(this.filterSuggestions.indexOf("Male"), 1);
    }
    if (this.filters.indexOf("Head Of Household") !== -1) {
      this.filterSuggestions.splice(
        this.filterSuggestions.indexOf("Not Head Of Household"),
        1
      );
    }
    if (this.filters.indexOf("Not Head Of Household") !== -1) {
      this.filterSuggestions.splice(
        this.filterSuggestions.indexOf("Head Of Household"),
        1
      );
    }
    if (this.filterField !== "" && this.filterField !== undefined) {
      this.authService.searchUsers(this.filterField).subscribe(data => {
        if (data.data.SearchUser.error) {
          this.flashMessage.show(data.data.SearchUser.error, {
            cssClass: "alert-danger",
            timeout: 3000
          });
        } else if (data.data.SearchUser.results) {
          this.filterSuggestions = this.filterSuggestions.concat(
            data.data.SearchUser.results
          );
        }
      });
    }
  }
  getFilterResults(): void {
    this.authService
      .getFilterResultsNumber([].concat(this.filters))
      .then(value => {
        value.subscribe(data => {
          if (data.data.FilterResultsNumber.success) {
            this.numberOfRecipients = data.data.FilterResultsNumber.success;
          } else if (data.data.FilterResultsNumber.error) {
            this.flashMessage.show(data.data.ErrorSuccess.error, {
              cssClass: "alert-danger",
              timeout: 3000
            });
          }
        });
      });

    this.authService.getFilterResults([].concat(this.filters)).then(value => {
      value.subscribe(data => {
        if (data.data.FilterResults.success) {
          this.users = [];
          data.data.FilterResults.success.forEach(user => {
            const newUser = new User();
            newUser.name = user.name;
            newUser.email = user.email;
            newUser.password = user.password;
            newUser.phone = user.phone;
            // date Of Birth
            newUser.dOB = user.dOB;
            newUser.gender = user.gender;
            // head of house
            newUser.hOH = user.hOH;
            newUser.skills = user.skills;
            newUser.admin = user.admin;
            newUser.id = user.id;
            this.users.push(newUser);
          });
        } else if (data.data.FilterResults.error) {
          this.flashMessage.show(data.data.ErrorSuccess.error, {
            cssClass: "alert-danger",
            timeout: 3000
          });
        }
      });
    });
  }
  sendMessage(areYouSureModal: ModalComponent): void {
    areYouSureModal.hide();
    this.authService
      .sendMessage(
        [].concat(this.filters),
        localStorage.getItem("subject"),
        localStorage.getItem("message")
      )
      .then(value => {
        value.subscribe(data => {
          console.log(data);

          if (data.data.SendMessage.success) {
            this.flashMessage.show(data.data.SendMessage.success, {
              cssClass: "alert-success",
              timeout: 3000
            });
            localStorage.setItem("subject", "");
            localStorage.setItem("message", "");
            localStorage.setItem("filters", "");
            this.router.navigate(["dashboard/"]);
          } else if (data.data.SendMessage.error) {
            this.flashMessage.show(data.data.SendMessage.error, {
              cssClass: "alert-danger",
              timeout: 3000
            });
          }
        });
      });
  }
}
