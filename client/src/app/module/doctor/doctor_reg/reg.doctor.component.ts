import { Component,OnInit,AfterViewInit,Input} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{doctorDetails} from '../../schema2';
import{DoctorServices} from '../../../services/doctor.service';
import {IMyDpOptions,IMyDateModel} from 'mydatepicker';
@Component({
    selector:'app-regdoctor',
    templateUrl:'./reg.doctor.component.html',
    styleUrls: ['./reg.doctor.component.css'],

})
export class DoctorRegComponent implements OnInit{

    details:  doctorDetails[]=[];
detail: doctorDetails;  

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
 
 selectedfile=null;


 public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
   
};
minDate = {year: 2017, month: 1, day: 1};
 
public model: any = { year:1990, month: 10, day: 1};
date1=JSON.stringify(this.model);
onDateChanged(event: IMyDateModel) {
}

constructor(private _router:Router, private docterservice:DoctorServices){

}

isselected(event){
    console.log(event);
    this.selectedfile = event.target.files[0];
}

 

onupload(){
    const fd=new FormData();
    fd.append('doctorimage',this.selectedfile);
    fd.append('firstname',this.firstname);
    fd.append ('lastname',this.lastname);
    fd.append( 'mob_no',this.mob_no);
    fd.append('password',this.password);
    fd.append('gender',this.gender);
    fd.append('education',this.education);
    fd.append('experience',this.experience);
    fd.append('work_for',this.work_for);
    fd.append('speciality',this.speciality);
    fd.append('city',this.city);
    fd.append('adhar_no',this.adhar_no);
    fd.append('email',this.email);
    fd.append('hospital',this.hospital);
    fd.append('certification',this.certification);
    fd.append('DOB',this.date1);
    this.docterservice.addDetails(fd).subscribe(detail=>{
        this.details.push(detail);
        console.log(detail);
        alert("Registered successfully.");
    });
}

 


ngOnInit(){

    
}

}