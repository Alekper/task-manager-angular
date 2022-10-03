import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { CardComponent } from './cards/card/card.component';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  container !: ViewContainerRef;
  ref!: ComponentRef<CardComponent>



  components: any = []
  taskCount: number = 0
  fullName: string | null = ''
  cardArr: any = []
  imgPath: string = ""
  userId: string|null = ''
  addTask() {
    const component = this.container.createComponent(CardComponent)
    this.components.push(component)
    this.taskCount = this.components.length

  }

  constructor(private authService: AuthServiceService) { }
  // getData() {
  //   console.log(this.authService.getData().subscribe(item=>{
  //     console.log(item);

  //   }));

  ngOnInit(): void {
    this.userId = localStorage.getItem('id')
    this.fullName = localStorage.getItem('fullName')
    this.authService.getUserData(this.userId).subscribe((data: any) => {
      this.imgPath = data.img
    })
  }
}


