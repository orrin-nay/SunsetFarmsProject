/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dashboard.composeComponent } from './dashboard.compose.component';

describe('Dashboard.composeComponent', () => {
  let component: Dashboard.composeComponent;
  let fixture: ComponentFixture<Dashboard.composeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard.composeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard.composeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
