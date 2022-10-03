import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/userInterface';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { faBuilding, faLocationDot, faPhone, faAt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  userId: string | null = '0'
  userInfo = {} as IUser
  fonts={
    org: faBuilding,
    address: faLocationDot,
    phone: faPhone, 
    username: faAt,
    mail: faEnvelope
  }
  
  ngOnInit(): void {
    this.userId = localStorage.getItem('id')
    this.authService.getUserData(this.userId).subscribe((data: any) => {
      this.userInfo=data
      
    })
  }

}
