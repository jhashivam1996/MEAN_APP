import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import{AuthService} from './services/auth.service'
 import{Details} from './module/schema'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 user:Details;
constructor( ){

}

ngOnInit(){
   
  
}

}
