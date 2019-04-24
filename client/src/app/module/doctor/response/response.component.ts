import { Component, OnInit } from '@angular/core';
import {DoctorServices} from '../../../services/doctor.service';
import {AuthService} from '../../../services/auth.service';
import {doctorDetails} from '../../schema2';
import{Details} from '../../schema';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  details:doctorDetails[]=[];
  detail:doctorDetails;
  user:Details;
  constructor(private doctorservice:DoctorServices,private authservice:AuthService) {

    this.user=this.authservice.currentuser1();
   }

   fetchOne(id){
    this.doctorservice.Getsingleprescriptionforme(id)
    .subscribe(abc=>
    this.details=abc);
  
  }


  ngOnInit() {
    this.doctorservice.GetAllprescriptionforme(this.user._id)
    .subscribe(abc=>
    this.details=abc);
   
  }

}
