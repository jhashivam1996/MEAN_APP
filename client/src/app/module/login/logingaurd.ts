import{Injectable} from '@angular/core';
import {CanActivate} from "@angular/router";
import {AuthService} from '../../services/auth.service';
@Injectable()
 export class OnlyLoggedInUsersGuard implements CanActivate { 
  constructor(private authService:AuthService) {}; 

  canActivate() {
    if (this.authService.loading1==true) { 
      return true;
    }
    if (this.authService.loading2==true) { 
      return true;
    }
   
   else  if (this.authService.loading3==true) { 
      return true;
    }
    else {
         
      alert("You don't have permission to view this page"); 
      return false;
    }
  }
check():boolean{
  if (this.authService.loading2==true) { 
      return true;
    }
}

}