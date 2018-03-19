/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dashboard.filtersComponent } from './dashboard.filters.component';

describe('Dashboard.filtersComponent', () => {
  let component: Dashboard.filtersComponent;
  let fixture: ComponentFixture<Dashboard.filtersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard.filtersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard.filtersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
