import { Injectable } from '@angular/core';
import {Gender} from '../types/enums/gender.enum';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateAddUser(user) {
    if (user.name === undefined || (user.email === undefined && user.phone === undefined)) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  validatePhone(phone: string): boolean {
    phone = this.cleanPhone(phone);
    if (phone.length !== 10) {
      return false;
    }
    return true;
  }
  cleanPhone(phone: string): string {
    return phone.replace(/\D/g, '');
  }
  private formatDate(date: string): string {
    date = date.replace(/\D/g, '');
    date = date.replace(/-/g, '');
    date = date.replace(/\//g, '');
    return date;
  }
  validateDate(date: string): boolean {
    date = this.formatDate(date);
    if (date.length !== 8) {
      return false;
    }
    return true;
  }
  validateNewPassowrd(password1: String, password2: String): string {
    if (password1 === undefined || password1 === '' ||
      password2 === undefined || password2 === '') {
      return 'Please enter password twice';
    }
    if (password1 !== password2) {
      return 'Password do not match';
    }
    if (password1.length < 7 || password1.search(/\d/) === -1 || password1.search(/[a-zA-Z]/) === -1 ||
      password1.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) !== -1) {
      return 'Password must be six characters long, contain a number, a letter, and a special character';
    }
  }
  titleCase(str: string): string {
    const splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
 }
 validateGender(gender: Gender): boolean {
  return (gender.toString() === 'male' || gender.toString() === 'female');
}
validateHOH(hOH: boolean): boolean {
  return false;
}
}
