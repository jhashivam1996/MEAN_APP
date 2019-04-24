import { Component,OnInit,AfterViewInit,Input} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{AuthService} from '../../services/_index';
import{doctorDetails} from '../schema2';
import{DoctorServices} from '../../services/doctor.service';


@Component({
    selector:'app-doctor',
    templateUrl:'./doctor.component.html',
    styleUrls: ['./doctor.component.css']

})
export class DoctorComponent implements OnInit{
  detail:doctorDetails;

constructor(private authservice:AuthService, private _service: DoctorServices){
this.detail=this.authservice.currentuser1();
}

logout(){
    this.authservice.doctorlogout();
} 
ngOnInit(){

}

}