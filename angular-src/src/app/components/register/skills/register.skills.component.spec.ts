/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Register.skillComponent } from './register.skill.component';

describe('Register.skillComponent', () => {
  let component: Register.skillComponent;
  let fixture: ComponentFixture<Register.skillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register.skillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Register.skillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
