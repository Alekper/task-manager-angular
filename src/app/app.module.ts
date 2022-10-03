import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './Components/sign-in/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home/home.component';
import { CardComponent } from './Components/home/home/cards/card/card.component';
import { ProfileComponent } from './Components/profile/profile.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptor } from './Services/auth.interceptor';
import { UserInfoComponent } from './components/profile/user-info/user-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserListComponent } from './components/profile/user-list/user-list.component';
import { SearchPipe } from './components/profile/user-list/search.pipe';
import { UserCreateComponent } from './Components/profile/user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    CardComponent,
    ProfileComponent,
    UserInfoComponent,
    UserListComponent,
    SearchPipe,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  // providers: [{
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AuthInterceptor,
  //   multi: true
  // }],
  bootstrap: [AppComponent]
})
export class AppModule { }
