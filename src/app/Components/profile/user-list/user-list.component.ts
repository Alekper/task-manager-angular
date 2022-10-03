import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/userInterface';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }
  searchResult: string = ''
  userArr: IUser[] = []
  ngOnInit(): void {
    this.authService.signIn().subscribe((data: IUser[]) => {
      console.log(data);
      this.userArr = data

    })
  }


}
