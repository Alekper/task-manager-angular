import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {

constructor(private authService: AuthServiceService, private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.isLoggedIn()){
          this.router.navigate(['']);

        return false
      } 

        return true
      
      
}
  
}

