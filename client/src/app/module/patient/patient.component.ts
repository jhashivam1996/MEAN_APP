import { Component,OnInit,AfterViewInit,Input} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{AuthService} from '../../services/_index';
import {Details} from '../schema';

@Component({
    selector:'app-patient',
    templateUrl:'./patient.component.html',
    styleUrls: ['./patient.component.css']

})
export class PatientComponent implements OnInit{
     
    detail: Details; 
             
constructor(private authservice:AuthService){
   
}

logout(){
    this.authservice.patientlogout();
}


   
 
ngOnInit(){  
      this.detail = this.authservice.currentuser();
   
}}