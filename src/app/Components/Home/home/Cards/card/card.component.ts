import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { IUser } from 'src/app/Models/userInterface';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})



export class CardComponent implements OnInit {



  constructor(private authService: AuthServiceService) { }
  userList: IUser[] = []
  ngOnInit(): void {
    this.authService.signIn().subscribe((data: IUser[]) => {
      this.userList = data


    })
  }
  dataStatus: boolean = false
  cardInfo: { title: string, date: string, status: boolean, description: string } = {
    title: '',
    date: '',
    status: false,
    description: ''
  }

  cardData(info: { title: string, date: string, status: boolean, description: string }) {
    this.dataStatus = !this.dataStatus
    this.cardInfo = info

  }

  

}
