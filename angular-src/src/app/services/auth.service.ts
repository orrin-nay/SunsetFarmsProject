import { User } from "./../types/User";
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { tokenNotExpired } from "angular2-jwt";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Gender } from "../types/enums/gender.enum";
import { variable } from "@angular/compiler/src/output/output_ast";
import { SkillsService } from "./skills.service";

@Injectable()
export class AuthService {
  authToken: string;
  user: User;

  constructor(
    private http: Http,
    private apollo: Apollo,
    private skillsService: SkillsService
  ) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.authToken = localStorage.getItem("id_token");
  }

  registerUser(user: User, token: String): any {
    const MutationRegister = gql`
      mutation MutationRegister(
        $token: String!
        $password: String!
        $phone: String!
        $dOB: String!
        $gender: String!
        $hOW: Boolean!
        $skills: [String]!
      ) {
        Register(
          token: $token
          password: $password
          phone: $phone
          dOB: $dOB
          gender: $gender
          hOH: $hOW
          skills: $skills
        ) {
          error
          success
        }
      }
    `;

    interface RegisterReturn {
      Register: any;
    }

    return this.apollo.mutate<RegisterReturn>({
      mutation: MutationRegister,
      variables: {
        token: token,
        password: user.password,
        phone: user.phone,
        dOB: user.dOB,
        gender: user.gender,
        hOW: user.hOH,
        skills: user.skills
      }
    });
  }

  authenticateUser(email: String, password: String) {
    interface LoginResponse {
      Login: any;
    }

    const QueryLogin = gql`
      query LoginQuery($email: String!, $password: String!) {
        Login(email: $email, password: $password) {
          authToken
          error
          user {
            id
            name
            email
            phone
            dOB
            gender
            hOH
            skills
            admin
          }
        }
      }
    `;
    return this.apollo.query<LoginResponse>({
      query: QueryLogin,
      variables: {
        email: email,
        password: password
      }
    });
  }

  getProfile(): User {
    return JSON.parse(localStorage.getItem("user"));
  }

  storeUserData(token, user): void {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  storeUserDataNoToken(user: User): void {
    localStorage.setItem("user", JSON.stringify(user));
    this.user = user;
  }

  loadToken(): void {
    const token = localStorage.getItem("id_token");
    this.authToken = token;
  }

  loggedIn(): boolean {
    return tokenNotExpired("id_token");
  }

  isAdmin(): boolean {
    if (!tokenNotExpired("id_token")) {
      return false;
    }
    try {
      return this.user.admin;
    } catch (e) {
      return false;
    }
  }

  logout(): void {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  addUser(user) {
    const MutationAddUser = gql`
      mutation MutationAddUser($email: String, $phone: String, $name: String!) {
        addUser(email: $email, name: $name, phone: $phone) {
          success
          error
        }
      }
    `;

    interface submitRepositoryReturn {
      addUser: any;
    }

    const variables: any = {
      name: user.name
    };
    if (user.phone) {
      variables.phone = user.phone;
    }
    if (user.email) {
      variables.email = user.phone;
    }
    return this.apollo.mutate<submitRepositoryReturn>({
      mutation: MutationAddUser,
      variables
    });
  }

  getUsers(): any {
    interface GetUsersResponse {
      GetUsers: any;
    }

    const QueryGetUsers = gql`
      query GetUsersQuery {
        GetUsers {
          name
        }
      }
    `;
    return this.apollo.query<GetUsersResponse>({
      query: QueryGetUsers
    });
  }

  // Prifile Functions
  changeEmail(email: string): any {
    interface ChangeEmailResponse {
      ChangeEmail: any;
    }

    const MutationChangeEmail = gql`
      mutation ChangeEmailMutation($email: String!) {
        ChangeEmail(email: $email) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<ChangeEmailResponse>({
      mutation: MutationChangeEmail,
      variables: {
        email: email
      }
    });
  }

  changePhone(phone: string): any {
    interface ChangePhoneResponse {
      ChangePhone: any;
    }

    const MutationChangePhone = gql`
      mutation ChangePhoneMutation($phone: String!) {
        ChangePhone(phone: $phone) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<ChangePhoneResponse>({
      mutation: MutationChangePhone,
      variables: {
        phone: phone
      }
    });
  }

  changeDOB(dOB: string): any {
    interface ChangeDOBResponse {
      ChangeDOB: any;
    }

    const MutationChangeDOB = gql`
      mutation ChangeDOBMutation($dOB: String!) {
        ChangeDOB(dOB: $dOB) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<ChangeDOBResponse>({
      mutation: MutationChangeDOB,
      variables: {
        dOB: dOB
      }
    });
  }

  changeGender(gender: Gender): any {
    interface ChangeGenderResponse {
      ChangeGender: any;
    }

    const MutationChangeGender = gql`
      mutation ChangeGenderMutation($gender: String!) {
        ChangeGender(gender: $gender) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<ChangeGenderResponse>({
      mutation: MutationChangeGender,
      variables: {
        gender: gender
      }
    });
  }

  changeHOH(hOH: boolean): any {
    interface ChangeHOHResponse {
      ChangeHOH: any;
    }

    const MutationChangeHOH = gql`
      mutation ChangeHOHMutation($hOH: Boolean!) {
        ChangeHOH(hOH: $hOH) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<ChangeHOHResponse>({
      mutation: MutationChangeHOH,
      variables: {
        hOH: hOH
      }
    });
  }

  changePassword(password: string): any {
    interface ChangeHOHResponse {
      ChangePassword: any;
    }

    const MutationChangePassword = gql`
      mutation ChangePasswordMutation($password: String!) {
        ChangePassword(password: $password) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<ChangeHOHResponse>({
      mutation: MutationChangePassword,
      variables: {
        password: password
      }
    });
  }

  removeSkill(skill: string): any {
    interface RemoveSkillResponse {
      RemoveSkill: any;
    }

    const MutationRemoveSkill = gql`
      mutation RemoveSkillMutation($skill: String!) {
        RemoveSkill(skill: $skill) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<RemoveSkillResponse>({
      mutation: MutationRemoveSkill,
      variables: {
        skill: skill
      }
    });
  }

  addSkill(skill: string): any {
    interface AddSkillResponse {
      AddSkill: any;
    }

    const MutationAddSkill = gql`
      mutation AddSkillMutation($skill: String!) {
        AddSkill(skill: $skill) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<AddSkillResponse>({
      mutation: MutationAddSkill,
      variables: {
        skill: skill
      }
    });
  }

  // user admin Functions
  changeEmailAdmin(email: string, userId: string): any {
    interface ChangeEmailResponse {
      ChangeEmail: any;
    }

    const MutationChangeEmailAdmin = gql`
      mutation ChangeEmailAdminMutation($email: String!, $userId: String!) {
        ChangeEmailAdmin(email: $email, userId: $userId) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<ChangeEmailResponse>({
      mutation: MutationChangeEmailAdmin,
      variables: {
        email: email,
        userId: userId
      }
    });
  }

  changePhoneAdmin(phone: string, userId: string): any {
    interface ChangePhoneResponse {
      ChangePhone: any;
    }

    const MutationChangePhoneAdmin = gql`
      mutation ChangePhoneAdminMutation($phone: String!, $userId: String!) {
        ChangePhoneAdmin(phone: $phone, userId: $userId) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<ChangePhoneResponse>({
      mutation: MutationChangePhoneAdmin,
      variables: {
        phone: phone,
        userId: userId
      }
    });
  }

  changeDOBAdmin(dOB: string, userId: string): any {
    interface ChangeDOBResponse {
      ChangeDOB: any;
    }

    const MutationChangeDOBAdmin = gql`
      mutation ChangeDOBAdminMutation($dOB: String!, $userId: String!) {
        ChangeDOBAdmin(dOB: $dOB, userId: $userId) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<ChangeDOBResponse>({
      mutation: MutationChangeDOBAdmin,
      variables: {
        dOB: dOB,
        userId: userId
      }
    });
  }

  changeGenderAdmin(gender: Gender, userId: string): any {
    interface ChangeGenderResponse {
      ChangeGender: any;
    }

    const MutationChangeGenderAdmin = gql`
      mutation ChangeGenderAdminMutation($gender: String!, $userId: String!) {
        ChangeGenderAdmin(gender: $gender, userId: $userId) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<ChangeGenderResponse>({
      mutation: MutationChangeGenderAdmin,
      variables: {
        gender: gender,
        userId: userId
      }
    });
  }

  changeHOHAdmin(hOH: string, userId: string): any {
    interface ChangeHOHResponse {
      ChangeHOH: any;
    }

    const MutationChangeHOHAdmin = gql`
      mutation ChangeHOHAdminMutation($hOH: Boolean!, $userId: String!) {
        ChangeHOHAdmin(hOH: $hOH, userId: $userId) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<ChangeHOHResponse>({
      mutation: MutationChangeHOHAdmin,
      variables: {
        hOH: hOH === "true",
        userId: userId
      }
    });
  }

  changeAdminPrivilege(admin: boolean, userId: string): any {
    interface changeAdminPrivilegeResponse {
      changeAdminPrivilege: any;
    }

    const MutationchangeAdminPrivilege = gql`
      mutation changeAdminPrivilegeMutation(
        $admin: Boolean!
        $userId: String!
      ) {
        ChangeAdminPrivilege(admin: $admin, userId: $userId) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<changeAdminPrivilegeResponse>({
      mutation: MutationchangeAdminPrivilege,
      variables: {
        admin: admin,
        userId: userId
      }
    });
  }

  removeSkillAdmin(skill: string, userId: string): any {
    interface RemoveSkillResponse {
      RemoveSkill: any;
    }

    const MutationRemoveSkillAdmin = gql`
      mutation RemoveSkillAdminMutation($skill: String!, $userId: String!) {
        RemoveSkillAdmin(skill: $skill, userId: $userId) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<RemoveSkillResponse>({
      mutation: MutationRemoveSkillAdmin,
      variables: {
        skill: skill,
        userId: userId
      }
    });
  }

  addSkillAdmin(skill: string, userId: string): any {
    interface AddSkillResponse {
      AddSkill: any;
    }

    const MutationAddSkillAdmin = gql`
      mutation AddSkillAdminMutation($skill: String!, $userId: String!) {
        AddSkillAdmin(skill: $skill, userId: $userId) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<AddSkillResponse>({
      mutation: MutationAddSkillAdmin,
      variables: {
        skill: skill,
        userId: userId
      }
    });
  }

  searchUsers(name: string): any {
    interface SearchUserResponse {
      SearchUser: any;
    }

    const QuerySearchUser = gql`
      query SearchUserQuery($name: String!) {
        SearchUser(name: $name) {
          error
          results
        }
      }
    `;
    return this.apollo.query<SearchUserResponse>({
      query: QuerySearchUser,
      variables: {
        name
      }
    });
  }

  async getFilterResultsNumber(filters: string[]): Promise<any> {
    interface FilterResultsNumberResponse {
      FilterResultsNumber: any;
    }

    const QueryFilterResultsNumber = gql`
      query FilterResultsNumberQuery(
        $gender: String
        $hOH: String
        $skills: [String]
        $dates: [String]
        $names: [String]
      ) {
        FilterResultsNumber(
          gender: $gender
          hOH: $hOH
          skills: $skills
          dates: $dates
          names: $names
        ) {
          error
          success
        }
      }
    `;
    return this.apollo.query<FilterResultsNumberResponse>({
      query: QueryFilterResultsNumber,
      variables: await this.prepareVariables(filters)
    });
  }

  async getFilterResults(filters: string[]): Promise<any> {
    interface FilterResultsResponse {
      FilterResults: any;
    }

    const QueryFilterResults = gql`
      query FilterResultsQuery(
        $gender: String
        $hOH: String
        $skills: [String]
        $dates: [String]
        $names: [String]
      ) {
        FilterResults(
          gender: $gender
          hOH: $hOH
          skills: $skills
          dates: $dates
          names: $names
        ) {
          error
          success {
            name
            email
            phone
            dOB
            hOH
            gender
            admin
            skills
            id
          }
        }
      }
    `;
    return this.apollo.query<FilterResultsResponse>({
      query: QueryFilterResults,
      variables: await this.prepareVariables([].concat(filters))
    });
  }

  async sendMessage(
    filters: string[],
    subject: string,
    message: string
  ): Promise<any> {
    interface SendMessageResponse {
      SendMessage: any;
    }

    const QuerySendMessage = gql`
      query SendMessageQuery(
        $gender: String
        $hOH: String
        $skills: [String]
        $dates: [String]
        $names: [String]
        $message: String!
        $subject: String!
      ) {
        SendMessage(
          gender: $gender
          hOH: $hOH
          skills: $skills
          dates: $dates
          names: $names
          message: $message
          subject: $subject
        ) {
          error
          success
        }
      }
    `;
    const variables = await this.prepareVariables(filters);
    variables.subject = subject;
    variables.message = message;
    return this.apollo.query<SendMessageResponse>({
      query: QuerySendMessage,
      variables: variables
    });
  }

  async getMessages(
    to: string,
    from: string,
    dateSentAfter: string
  ): Promise<any> {
    interface getMessagesResponse {
      SendMessage: any;
    }
    const QueryGetMessages = gql`
      query getMessagesQuery(
        $to: String
        $from: String
        $dateSentAfter: String
      ) {
        getMessages(to: $to, from: $from, dateSentAfter: $dateSentAfter) {
          error
          messages
        }
      }
    `;
    return this.apollo.query<getMessagesResponse>({
      query: QueryGetMessages,
      variables: {
        to: to,
        from: from,
        dateSentAfter: dateSentAfter
      }
    });
  }

  private async prepareVariables(filters: string[]): Promise<any> {
    let variables: any;
    variables = {};

    const maleIndex = filters.indexOf("Male");
    if (maleIndex !== -1) {
      variables.gender = "male";
      filters.splice(maleIndex, 1);
    }

    const femaleIndex = filters.indexOf("Female");
    if (femaleIndex !== -1) {
      variables.gender = "female";
      filters.splice(femaleIndex, 1);
    }

    const hOHIndex = filters.indexOf("Not Head Of Household");
    if (hOHIndex !== -1) {
      variables.hOH = "yes";
      filters.splice(hOHIndex, 1);
    }

    const nHOHIndex = filters.indexOf("Head Of Household");
    if (nHOHIndex !== -1) {
      variables.hOH = "no";
      filters.splice(nHOHIndex, 1);
    }

    const skills = await this.skillsService.getSkillsList();
    filters.forEach(filter => {
      if (skills.indexOf(filter) !== -1) {
        if (variables.skills === undefined) {
          variables.skills = [];
        }
        variables.skills.push(filter);
        return;
      }
      if (
        parseInt(filter, 0) <= new Date().getUTCFullYear() &&
        parseInt(filter, 0) > 1900
      ) {
        if (variables.dates === undefined) {
          variables.dates = [];
        }
        variables.dates.push(filter);
        return;
      }
      if (variables.names === undefined) {
        variables.names = [];
      }
      variables.names.push(filter);
    });
    return variables;
  }

  addAffiliationAdmin(affiliation: String): any {
    interface AddAffiliationResponse {
      AddAffiliation: any;
    }

    const MutationAddAffiliationAdmin = gql`
      mutation AddAffiliationAdminMutation($affiliation: String!) {
        AddAffiliationAdmin(affiliation: $affiliation) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<AddAffiliationResponse>({
      mutation: MutationAddAffiliationAdmin,
      variables: {
        affiliation
      }
    });
  }
  removeAffiliationAdmin(affiliation: String): any {
    interface RemoveAffiliationResponse {
      RemoveAffiliation: any;
    }

    const MutationRemoveAffiliationAdmin = gql`
      mutation RemoveAffiliationAdminMutation($affiliation: String!) {
        RemoveAffiliationAdmin(affiliation: $affiliation) {
          success
          error
        }
      }
    `;

    return this.apollo.mutate<RemoveAffiliationResponse>({
      mutation: MutationRemoveAffiliationAdmin,
      variables: {
        affiliation
      }
    });
  }
}
