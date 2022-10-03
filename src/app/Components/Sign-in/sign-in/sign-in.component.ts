import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  
  layerPosition: boolean = false
  layerContent: { in: string, up: string, successColor: string, errorColor: string } = {
    in: 'Welcome!',
    up: 'Welcome, new user!',
    successColor: '#23d5a0',
    errorColor: 'red'
  }
  routePath: string = ''
 

  // Authentication

  user = new User()
  
  constructor(private authService: AuthServiceService, private router: Router) { }
  

  // signIn(user: User) {
  //   this.authService.signIn(user).subscribe((token: string) => {
    //     localStorage.setItem('token', token)
  //   })
  //   this.authService.loginCheck()
  //   console.log(this.authService.isLoggedIn);
  
  // }

  // getData() {
    //   this.authService.getData().subscribe((name: string) => {
  //     console.log(name);
  
  //   })
  // }
  userArr:any=[]
  layerColor:boolean=true

  signIn(user: User) {
    
    for (let i = 0; i < this.userArr.length; i++) {
      if (user.username == this.userArr[i].username && user.password == this.userArr[i].password) {


        localStorage.setItem('username', user.username)
        localStorage.setItem('password', user.password)
        localStorage.setItem('fullName', this.userArr[i].name+' '+this.userArr[i].surname)
        localStorage.setItem('id', this.userArr[i].id)
        this.router.navigate(['home'])
      }
      else{
        this.layerContent.in = 'Incorrect username or password'
        this.layerColor=false

      } 
    }

  }

  ngOnInit(): void {
      this.authService.signIn().subscribe((data: string) => {
      this.userArr=data
      console.log(!!(localStorage.getItem('username') && localStorage.getItem('password')));
      
  
    })
  }
}
