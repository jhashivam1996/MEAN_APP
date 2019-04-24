import {Component,OnInit,AfterViewInit,Input} from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { SweetAlertService } from 'angular-sweetalert-service';

import { DoctorServices, AuthService } from '../../../services/_index';
import {Details} from '../../schema';

 
@Component({

  selector:'app-deletedoctor',
  templateUrl:'./deletedoctor.component.html',
  styleUrls: ['./deletedoctor.component.css'],
  providers: [AuthService],
})



export class DeleteDoctorComponent implements OnInit{
            details: Details[]=[];
            detail: Details; 
            
                  
    constructor(private _service:DoctorServices,private SweetAlert :SweetAlertService){
   
            

    }

    findOne(id:any ){
       
   
       this. _service.findOnedoctor(id)
    .subscribe( contacts => 
    this.details = contacts); 
    var details = this.details;
   
    
    }

    options = {
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    };
   
    
 deletedetails(id:any){
    
    var details = this.details; 
    this._service.deletedoctorbyID(id)
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
   this. _service.GetAlldoctor()
    .subscribe( contacts => 
    this.details = contacts);
}

}