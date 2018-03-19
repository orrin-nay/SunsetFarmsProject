import { User } from './../types/User';
import { JwtHelper } from 'angular2-jwt';
import { ValidateService } from './validate.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Gender } from '../types/enums/gender.enum';
import { SkillsService } from './skills.service';

@Injectable()
export class RegisterService {
    private token: string;
    private jwtHelper: JwtHelper;
    private authService: AuthService;
    private validateService: ValidateService;


    private user: User;

    constructor(authService: AuthService,
         validateService: ValidateService,
         private skillsService: SkillsService) {
        this.authService = authService;
        this.validateService = validateService;
        this.user = this.authService.getProfile();
    }

    init(token: string): void {
        this.user = new User();
        this.jwtHelper = new JwtHelper();

        this.token = token;

        const jwtInfo = this.jwtHelper.decodeToken(token);

        this.user.name = jwtInfo.user.name;
        this.user.email = jwtInfo.user.email;
        this.authService.logout();
    }
    setToken(token: string): void {
        this.token = token;
    }
    setPassword(password1: string, password2: string): string {
        const err = this.validateService.validateNewPassowrd(password1, password2);
        if (err) {
            return err;
        }
        this.user.password = password1;
        this.authService.storeUserDataNoToken(this.user);
    }
    getUserInfo(): User {
        return this.user;
    }
    setUserInfo(user: User): string {
        if (user.name === undefined || user.name === ''
            || user.email === undefined || user.email === ''
            || user.password === undefined || user.password === ''
            || user.phone === undefined || user.phone === ''
            || user.dOB === undefined || user.dOB === ''
            || user.gender === undefined
            || user.hOH === undefined) {
            return 'Please fill out all fields';
        }
        const phoneErr = this.validateService.validatePhone(user.phone);
        if (!phoneErr) {
            return 'Invalid phone';
        }
        const dateErr = this.validateService.validateDate(user.dOB);

        if (!dateErr) {
            return 'Invalid date of birth must be in format MM/DD/YYYY';
        }
        user.phone = user.phone.replace(/\D/g, '');
        this.user = user;
        this.authService.storeUserDataNoToken(user);
    }
    async getSkills(): Promise<Array<string>> {
        return await this.skillsService.getSkills(this.user.skills);
    }
    async addSkill(skill: string): Promise<void> {
        const user = await this.skillsService.addSkill(skill, this.user);
        this.user = user;
        this.authService.storeUserDataNoToken(user);
    }
    async removeSkill(skill: string): Promise<void> {
        const user = await this.skillsService.removeSkill(skill, this.user);
        this.user = user;
        this.authService.storeUserDataNoToken(user);
    }
    register(): any {
        return this.authService.registerUser(this.user, this.token);
    }
    titleCase(str: string): string {
        return this.validateService.titleCase(str);
    }
}
