import { Component,OnInit,AfterViewInit,Input} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{DoctorServices} from '../../../services/doctor.service';
import{AuthService} from '../../../services/auth.service'


@Component({
    selector:'app-updatedoctor',
    templateUrl:'./update.doctor.component.html',
    styleUrls:['./update.doctor.component.css']

})
export class DoctorUpdateComponent implements OnInit{
loading=false;

oldpass:string;
newpass:string;
detail:any;
fetcheddetail:any;
constructor(private  authservice:AuthService,private  doctorservice:DoctorServices,private _route:ActivatedRoute){
this.detail=this.authservice.currentuser1();
}

change(result){
 if(result.value.newpass==null||result.value.oldpass==null||result.value.cnfnewpass==null){
   alert("You have not entered anything yet.Please try again!!")
 }
else if(result.value.newpass==result.value.cnfnewpass){
  const changedpassword={
oldpass:this.oldpass,      
newpass:this.newpass  
  }
this.doctorservice.changedoctorpassword(this.detail._id,changedpassword).subscribe(abc=>{
    this.fetcheddetail=abc;
 result=JSON.stringify(abc.status);
if(result=="true"){
this.loading=true;
}

alert(JSON.stringify(abc));
});

}
else{
    alert("Confirm password field not matched");
}
}

ngOnInit(){

    
}

}