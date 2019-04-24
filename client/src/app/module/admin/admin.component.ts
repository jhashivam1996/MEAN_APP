import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../services/auth.service';
import{Details} from '../schema';
import{Router} from '@angular/router'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   admin:Details;
  constructor(private authservice:AuthService,private _router:Router) { }

logout()
{
  this.authservice.adminlogout();
}
  ngOnInit() { 
 this.admin=this.authservice.currentuser2();
  }

}
