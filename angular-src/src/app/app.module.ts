import { ManageUsersComponent } from './components/dashboard/manageUsers/manageUsers.component';
import { UserTableComponent } from './components/UserTable/UserTable.component';
import { DashboardFiltersComponent } from './components/dashboard/filters/dashboard.filters.component';
import { DashboardComposeComponent } from './components/dashboard/compose/dashboard.compose.component';
import { ViewMessagesComponent } from './components/dashboard/viewMessages/dashboard.viewMessages.component';
import { ModalComponent } from './components/helperComponents/modals/ModalComponent';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

import { RegisterComponent } from './components/register/register.component';
import { RegisterInfoComponent } from './components/register/info/register.info.component';
import { RegisterSkillsComponent } from './components/register/skills/register.skills.component';


import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// services
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import { RegisterService } from './services/register.service';

import {FlashMessagesModule} from 'angular2-flash-messages';

import {AuthGuard} from './guards/auth.guard';
import {AdminGuard} from './guards/admin.guard';
import {RegisterGuard} from './guards/register.guard';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { ServerAdress } from '../../../constance.js';
import { ManageAffiliationsComponent } from './components/dashboard/manageAffiliations/manageAffiliations.component';
import { SkillsService } from './services/skills.service';


const networkInterface = createNetworkInterface({uri: ServerAdress + '/graphql'});

networkInterface.use([{
  applyMiddleware(req, next): void {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    req.options.headers.authorization = localStorage.getItem('id_token') || null;
    next();
  }
}]);

const graphQl = new ApolloClient({
  networkInterface,
});
export function provideClient(): ApolloClient {
  return graphQl;
}

const appRoutes: Routes =  [
  {path: '', component: HomeComponent},
  {path: 'register/:token', component: RegisterComponent},
  {path: 'register/:token/info', component: RegisterInfoComponent},
  {path: 'register/:token/skills', component: RegisterSkillsComponent},
  {path: 'register', component: RegisterComponent, canActivate: [RegisterGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard]},
  {path: 'dashboard/compose', component: DashboardComposeComponent, canActivate: [AdminGuard]},
  {path: 'dashboard/filters', component: DashboardFiltersComponent, canActivate: [AdminGuard]},
  {path: 'dashboard/viewMessages', component: ViewMessagesComponent, canActivate: [AdminGuard]},
  {path: 'dashboard/manageUsers', component: ManageUsersComponent, canActivate: [AdminGuard]},
  {path: 'dashboard/manageAffiliations', component: ManageAffiliationsComponent, canActivate: [AdminGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    RegisterInfoComponent,
    RegisterSkillsComponent,
    HomeComponent,
    DashboardComponent,
    DashboardComposeComponent,
    ProfileComponent,
    ModalComponent,
    DashboardFiltersComponent,
    UserTableComponent,
    ViewMessagesComponent,
    ManageUsersComponent,
    ManageAffiliationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    ApolloModule.forRoot(provideClient)
  ],
  providers: [ValidateService, AuthService, SkillsService, RegisterService, AuthGuard, AdminGuard, RegisterGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
