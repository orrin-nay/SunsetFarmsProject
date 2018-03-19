import {Gender} from './enums/gender.enum';

export class User {
    name: string;
    email: string;
    password: string;
    phone: string;
    // date Of Birth
    dOB: string;
    gender: Gender;
    // head of house
    hOH: boolean;
    skills: String[] = new Array<string>();
    admin: boolean;
    id: string;
}
