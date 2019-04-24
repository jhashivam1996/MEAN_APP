import { Component,OnInit,AfterViewInit,Input} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{AuthService} from '../../services/_index';
import{Http} from '@angular/http';
import { NgModel } from '@angular/forms';
import { error } from 'protractor';
 
 
@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls: ['./login.component.css']
})
export class   LoginComponent {
  loading=false;
  returnUrl:string;
  
   
constructor(private authservice:AuthService, private route:ActivatedRoute,private _router:Router ){

}

  

login(result){
this.loading=true; 

if(result.value.key=="patient")
   { this.authservice.patientlogin(result.value.email,result.value.password).subscribe(data=>
        {
     var result=JSON.stringify(data.status);
      
        if (result=="false"){
           alert("Sorry!! Wrong Email or Password."); 
           this.loading=false;   
        }
        else
       {
       
       this._router.navigateByUrl('/patient')
     }
    },
    
      error=>{
          this.loading=false;
      });
   }


   else if(result.value.key=="doctor")
   {
       
       this.authservice.doctorlogin(result.value.email,result.value.password).subscribe(data=>
        {
     var result=JSON.stringify(data.status);
      
        if (result=="false"){
           alert("Sorry!! Wrong Email or Password."); 
           this.loading=false;   
        }
        else
       {
       
       this._router.navigateByUrl('/doctor')
     }
    },
    
      error=>{
          this.loading=false;
      });
   }

 else if(result.value.key=="admin"){
    
    this.authservice.adminlogin(result.value.email,result.value.password).subscribe(data=>
        {
     var result=JSON.stringify(data.status);
      
        if (result=="false"){
           alert("Sorry!! Wrong Email or Password."); 
           this.loading=false;   
        }
        else
       {
       
       this._router.navigateByUrl('/admin')
     }
    },
    
      error=>{
          this.loading=false;
      });
 }
else{
    alert('nope........ select from selectbox first.');
    this.loading=false;
}
 
}}