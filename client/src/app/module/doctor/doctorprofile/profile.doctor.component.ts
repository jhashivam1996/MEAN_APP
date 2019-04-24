import {Component,OnInit,AfterViewInit,Input} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{AuthService, DoctorServices} from '../../../services/_index';
import{doctorDetails} from '../../schema2'
import { NgModel } from '@angular/forms';

@Component({
    selector:'app-doctorprofile',
    templateUrl:'./profile.doctor.component.html',
    styleUrls: ['./profile.doctor.component.css'],

})

export class DoctorProfileComponent implements OnInit{
    details:doctorDetails;
    detail:doctorDetails;
   

    
firstname:string;
lastname: string;
mob_no: string;
password: string;
gender: string;
education:string;
experience:string;
work_for:string;
speciality:string;
city: string;
adhar_no: string;
email: string;
hospital: string;
reg_no: string;
certification:string;
    
constructor(private doctorservice:DoctorServices,private authservice:AuthService){
 
 
}
enableform(event){
this.sa=false;
}
enableedit(){
    this.sa=true;
}
sa=true; 
 updatedoctor(){
    const fd=new FormData();
      
     const newdetail={
          
         firstname: this.detail.firstname,
         lastname: this.detail.lastname,
         mob_no: this.detail.mob_no, 
         gender: this.detail.gender,
         experience: this.detail.experience,
         education: this.detail.education,
         work_for: this.detail.work_for,
         speciality: this.detail.speciality,
         city: this.detail.city, 
         adhar_no: this.detail.adhar_no,
         email: this.detail.email,
         certification: this.detail.certification,
         
     }
    this.doctorservice.updatedoctorbyid(this.detail._id,newdetail).subscribe(abc=>{
        this.details=abc;
         alert("updated successfully."); 
         
    });

   

 }


ngOnInit( ){  
     
    this.detail=this.authservice.currentuser1();
}
}