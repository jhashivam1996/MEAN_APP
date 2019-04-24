import {Component,OnInit,AfterViewInit,Input} from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';

import { DoctorServices } from '../../../services/_index';
import {Details} from '../../schema';

 
@Component({

  selector:'app-displaydoctor',
  templateUrl:'./display.doctor.component.html',
  styleUrls: ['./display.doctor.component.css'],
  providers: [DoctorServices],
})



export class DocterDisplayComponent implements OnInit{
            details: Details[]=[];
            detail: Details; 
             
                  
    constructor(private _router:Router,private _route:ActivatedRoute,private _service:DoctorServices){
   
            

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

    findOne(id:any ){
       this. _service.findOnepatient(id)
    .subscribe( contacts => 
    this.details = contacts); 
    var details = this.details;
   
    
    }

    findbynumber(number:any){
      
      if(number.value==""){
         
      }
       
      
      else{ this. _service.findOnepatientbymobilenumber(number.value)
        .subscribe( contacts =>  
        this.details = contacts); 
        var details = this.details;
     }
     
   }
    
  
 
ngOnInit(){
   this. _service.GetAllpatient()
    .subscribe( contacts => 
    this.details = contacts);
}

}