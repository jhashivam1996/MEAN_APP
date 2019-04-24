import{Injectable} from'@angular/core';
import{HttpClient} from'./httpclient.service';
import{Http} from'@angular/http';


@Injectable()
export class PatientServices{
constructor(private http:HttpClient){
}
    
addDetails(newDetils)
{          
  return this.http.post('http://localhost:8000/api/patientreg', newDetils);
 
}   
}