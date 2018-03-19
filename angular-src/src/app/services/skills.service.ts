import { Injectable } from "@angular/core";
import { User } from "../types/User";
import { Apollo } from "apollo-angular";
import { FlashMessagesService } from "angular2-flash-messages";
import gql from "graphql-tag";

@Injectable()
export class SkillsService {
  constructor(
    private apollo: Apollo,
    private flashMessage: FlashMessagesService
  ) {}
  getSkillsList(): Promise<Array<string>> {
    interface SkillsResponse {
      GetSkills: any;
    }
    const QuerySkills = gql`
      query SkillsQuery {
        GetSkills {
          error
          skills
        }
      }
    `;
    return new Promise(resolve => {
      const skills = this.apollo
        .query<SkillsResponse>({
          query: QuerySkills
        })
        .subscribe(data => {
          if (data.data.GetSkills.skills) {
            resolve(data.data.GetSkills.skills);
          } else {
            this.flashMessage.show(data.data.GetSkills.error, {
              cssClass: "alert-danger",
              timeout: 12000
            });
          }
        });
    });
  }
  async getSkills(userSkills: Array<String>): Promise<Array<string>> {
    const skillsUnclean = await this.getSkillsList();
    const skills = [];
    skillsUnclean.forEach(skill => {
      skills.push(skill);
    });
    userSkills.forEach((skill: string) => {
      const index = skills.indexOf(skill); // <-- Not supported in <IE9
      if (index !== -1) {
        skills.splice(index, 1);
      }
    });
    return skills;
  }
  async addSkill(skill: string, user: User): Promise<User> {
    const filteredSkills = await this.getSkills(user.skills);
    if (filteredSkills.indexOf(skill) !== -1) {
      try {
        if (user.skills.indexOf(skill) === -1) {
          user.skills.push(skill);
        }
      } catch (err) {
        user.skills = new Array<String>();
        user.skills.push(skill);
      }
    }
    return user;
  }
  async removeSkill(skill: string, user: User): Promise<User> {
    const index = user.skills.indexOf(skill);
    if (index !== -1) {
      user.skills.splice(index, 1);
    }
    return user;
  }
}
