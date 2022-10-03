import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthServiceService, private router: Router) { }

  userId: string | null = '0'
  userInfo: any = []
  fullName:string=''
  imgSrc:string=''
  isAdmin:boolean=false
 
  
  ngOnInit(): void {
    
    this.userId = localStorage.getItem('id')
    this.authService.getUserData(this.userId).subscribe((data: any) => {
      
      this.fullName = `${data.name} ${data.surname}`
      this.imgSrc = data.img
      this.isAdmin=data.role
    })
  }

  logOut(){
    localStorage.clear()
    this.router.navigate([''])
  }

}
