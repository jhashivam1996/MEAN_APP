import { Component,OnInit,AfterViewInit,Input} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import {PatientServices} from '../../../services/_index';
import {Details} from '../../schema';
import {IMyDpOptions,IMyDateModel} from 'mydatepicker';
 

@Component({
    selector:'app-registration',
    templateUrl:'./registration.component.html',
    styleUrls: ['./registration.component.css'],
    providers: [PatientServices],
})


export class  RegistrationComponent implements OnInit {
 
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
   
};
minDate = {year: 2017, month: 1, day: 1};
 
public model: any = { year:1990, month: 10, day: 1};
date1=JSON.stringify(this.model);
onDateChanged(event: IMyDateModel) {
}

   
details:  Details[]=[];
detail: Details;  

firstname:string;
lastname: string;
mob_no: string;
password: string;
gender: string;
city: string;
adhar_no: string;
email: string;
hospital: string;
reg_no: string;
description:string; 
 
selectedfile=null;
   
 constructor(public Service: PatientServices,private router:Router) { 
 
 }


 isselected(event){
  console.log(event);
  this.selectedfile = event.target.files[0];
}

 onupload(){
  const fd=new FormData();
  fd.append('patientimage',this.selectedfile);
  fd.append('firstname',this.firstname);
  fd.append ('lastname',this.lastname);
  fd.append( 'mob_no',this.mob_no);
  fd.append('password',this.password);
  fd.append('gender',this.gender);
  fd.append('city',this.city);
  fd.append('adhar_no',this.adhar_no);
  fd.append('email',this.email);
  fd.append('hospital',this.hospital);
  fd.append('description',this.description);
  fd.append('DOB',this.date1);
  this.Service.addDetails(fd).subscribe(detail=>{
      this.details.push(detail);
      console.log(detail);
      alert("Registered successfully.");
  });
}
 
ngOnInit(){

}


}