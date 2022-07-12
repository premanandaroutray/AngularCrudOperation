import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{ 

  constructor(private service:SharedService,private router:Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      return new Observable<boolean>(observer => {
      if(!this.service.isLoggeIn)
      {
        this.router.navigate(['/login']);
      //  this.loginService.deleteToken();
      observer.next(false)
       // return  false;
      }
      else{       
      observer.next(true)
        //return true;}
      }
  });
}
}
