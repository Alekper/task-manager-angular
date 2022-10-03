import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smart-solutions';
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
       
        if (event instanceof NavigationEnd) {
            // Hide progress spinner or progress bar
            // this.currentRoute = event.url;          
            if(event.url==='/'){
              localStorage.clear()
            }
        }

        
    });

}}
