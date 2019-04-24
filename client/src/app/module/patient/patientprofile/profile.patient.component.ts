import {Component,OnInit,AfterViewInit,Input} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{AuthService} from '../../../services/_index';
import{Details} from '../../schema'

@Component({
    selector:'app-doctorprofile',
    templateUrl:'./profile.patient.component.html',
    styleUrls: ['./profile.patient.component.css'],

})

export class PatientProfileComponent implements OnInit{
     detail:Details;
constructor(private _router:Router,private _route:ActivatedRoute,private authservice:AuthService){

}
 
ngOnInit( ){  
   this.detail=this.authservice.currentuser();
}}