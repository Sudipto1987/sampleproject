import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AccountComponent } from './account/account.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[

  {
    path:'login',
    //canActivate:[AuthguardGuardService],
    component:LoginComponent

  },
  {
    path:'account',
    //canActivate:[AuthguardGuardService],
    component:AccountComponent

  },
  {
    path:'user',
    //canActivate:[AuthguardGuardService],
    component:UserComponent

  }]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AccountComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
