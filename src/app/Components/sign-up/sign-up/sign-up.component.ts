import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NewUser } from 'src/app/Models/newUser';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  ngOnInit(): void {
  }
  adminVal: boolean = false
  // Authentication

  newUser = new NewUser()
  constructor(private authService: AuthServiceService, private router: Router) { }

  signUp(newUser: NewUser) {
    this.authService.signUp(newUser).subscribe(data => {
      localStorage.setItem('fullName', data.name + ' ' + data.surname)
      localStorage.setItem('username', data.username)
      localStorage.setItem('password', data.password)
      this.authService.signIn().subscribe(data => {
        localStorage.setItem('id', data.length)

      })
      return this.router.navigate(['home'])

    })
  }


}
