import { Component, OnInit } from '@angular/core';
import {DoctorServices} from '../../../services/doctor.service';
import {AuthService} from '../../../services/auth.service';

import {doctorDetails} from '../../schema2';
import{Details} from '../../schema'


@Component({
  selector: 'app-sharequery',
  templateUrl: './sharequery.component.html',
  styleUrls: ['./sharequery.component.css']
})
export class SharequeryComponent implements OnInit {
      details:doctorDetails[]=[];
      detail:doctorDetails;
      user:Details;
   from:string; 
    to:string; 
    queries:string; 
    
  constructor(private doctorservice:DoctorServices,private authservice:AuthService) {
    
   }




sendquery(){
  const newquery = {
    from:this.user.firstname+this.user.lastname,
    to:this.to,
  fromid:this.user._id,
  queries:this.queries
  }
  this.doctorservice.sendquery(newquery).subscribe(abc=>{
  this.details.push(abc);
  });

  alert("Data sent successfully.")

}





  ngOnInit() {
    this.doctorservice.GetAlldoctor()
    .subscribe(abc=>
    this.details=abc);

    this.user=this.authservice.currentuser1();
  }

}
