import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { NewUser } from 'src/app/Models/newUser';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
  }
  newUser = new NewUser()

  createUser(newUser: NewUser) {
    this.authService.signUp(newUser).subscribe(()=>{
      alert('User successfully created!')
    })
    setTimeout(()=>{
      window.location.reload()

    }, 1000)
  }
}
