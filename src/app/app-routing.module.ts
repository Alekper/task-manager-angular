import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home/home.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SignInComponent } from './Components/sign-in/sign-in/sign-in.component';
import { IsAuthGuard } from './Services/Guards/is-auth.guard';
import { Router } from '@angular/router';
import { UserInfoComponent } from './components/profile/user-info/user-info.component';
import { UserListComponent } from './components/profile/user-list/user-list.component';
import { SignUpComponent } from './Components/sign-up/sign-up/sign-up.component';
import { AuthServiceService } from './Services/auth-service.service';
import { UserCreateComponent } from './Components/profile/user-create/user-create.component';
// const isAuthorized = !!localStorage.getItem('username')
// console.log(isAuthorized);

let isAuthorized: boolean
const routes: Routes = [
  {
    component: SignInComponent,
    path: '',
    


  },
  {
    component: HomeComponent,
    path: 'home',
    canActivate: [IsAuthGuard],
    
  },
  {
    component: ProfileComponent,
    path: 'home/profile',
    canActivate: [IsAuthGuard],
    children: [
      { path: 'userinfo', component: UserInfoComponent },
      { path: 'userlist', component: UserListComponent },
      { path: 'newuser', component: UserCreateComponent }
    ]

  },
  {
    path: '**',
    redirectTo: '',
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 

}
