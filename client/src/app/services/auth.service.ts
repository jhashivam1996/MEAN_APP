import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';

import{Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class AuthService{
       user1;
       user2;
       user3;
       loading1=false;
       loading2=false;
       loading3=false;
    constructor(private http:Http){}

patientlogin(email:string,password:string){
    this.loading1=true;
    return this.http.post('http://localhost:8000/patientlogin',{email:email,password:password})
    .map((response:Response)=>{
         this.user1=response.json();
      console.log(this.user1);
        if(this.user1){
             
            localStorage.setItem('patient',JSON.stringify(this.user1));
        }
        return this.user1;
       
    });  
}

doctorlogin(email:string,password:string){
    this.loading2=true;
    return this.http.post('http://localhost:8000/doctorlogin',{email:email,password:password})
    .map((response:Response)=>{
         this.user2=response.json();
      console.log(this.user2);
        if(this.user2){
             
            localStorage.setItem('doctor',JSON.stringify(this.user2));
        }
        return this.user2;
       
    });  
}

adminlogin(email:string,password:string){
    this.loading3=true;
    return this.http.post('http://localhost:8000/adminlogin',{email:email,password:password})
    .map((response:Response)=>{
         this.user3=response.json();
      console.log(this.user3);
        if(this.user3){
             
            localStorage.setItem('admin',JSON.stringify(this.user3));
        }
        return this.user3;
       
    });  

}



isLoggedIn(): boolean {
   if(this.loading1==true || this.loading2==true|| this.loading3==true)
    {return true;}
    else{ return false; }
    
  }
currentuser(){
    return JSON.parse(localStorage.getItem('patient'));
     
}
currentuser1(){
    return JSON.parse(localStorage.getItem('doctor'));
     
}
currentuser2(){
    return JSON.parse(localStorage.getItem('admin'));
     
}

patientlogout(){ 
    this.loading1=false;
    return  localStorage.removeItem('patient');
   
    
}
doctorlogout(){
     this.loading2=false;
     return localStorage.removeItem('doctor');
     
}
adminlogout(){
     this.loading3=false;
     return localStorage.removeItem('admin');
    
}

    }
