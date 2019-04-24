import { Component, OnInit } from '@angular/core';
import {DoctorServices} from '../../../services/doctor.service';
import {AuthService} from '../../../services/auth.service';
import {doctorDetails} from '../../schema2';
import{Details} from '../../schema';

@Component({
  selector: 'app-recievedquery',
  templateUrl: './recievedquery.component.html',
  styleUrls: ['./recievedquery.component.css']
})

export class RecievedqueryComponent implements OnInit {
    details:doctorDetails[]=[];
    detail:doctorDetails;
    user:Details;
    prescription:string;
    to:string;
    
  constructor(private doctorservice:DoctorServices,private authservice:AuthService) { 
    this.user=this.authservice.currentuser1();
  }

fetchOne(id){
  this.doctorservice.Getsinglequeryforme(id)
  .subscribe(abc=>
  this.details=abc);

}

sendprescription(to,queries){
  const newprecription = {
    from:this.user.firstname+this.user.lastname,
    to:to,
    queries:queries,
  fromid:this.user._id,
    prescription:this.prescription
  }
this.doctorservice.sendprescription(newprecription).subscribe(abcd=>{
  this.details.push(abcd);
});
alert("Prescription sent successfully.")
}
  


  ngOnInit() {

    this.doctorservice.GetAllqueriesforme(this.user._id)
    .subscribe(abc=>
    this.details=abc);
   

    
  }

}
