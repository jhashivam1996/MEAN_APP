import {Component,OnInit,AfterViewInit,Input} from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';

import { DoctorServices, AuthService } from '../../../services/_index';
import {Details} from '../../schema';

 
@Component({

  selector:'app-deletepatient',
  templateUrl:'./deletepatient.component.html',
  styleUrls: ['./deletepatient.component.css'],
  providers: [AuthService],
})



export class DeletePatientComponent implements OnInit{
            details: Details[]=[];
            detail: Details; 
            
                  
    constructor(private _service:DoctorServices){
   
            

    }

    findOne(id:any ){
       
   
       this. _service.findOnepatient(id)
    .subscribe( contacts => 
    this.details = contacts); 
    var details = this.details;
   
    
    }
    
 deletedetails(id:any){
    var details = this.details;
    
    this._service.deletepatientbyID(id)
    .subscribe(data=>{
   
        if(data.n==1)
      { 
        for (var i = 0;i <details.length; i++)
        {
          if(details[i]._id ==id)
          {
             details.splice(i,1); 
          }
        }}
    });
    alert("Patient's data has been deleted from database successfully");
  


 }
 
ngOnInit(){
   this. _service.GetAllpatient()
    .subscribe( contacts => 
    this.details = contacts);
}

}