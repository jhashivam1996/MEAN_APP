import{Injectable} from'@angular/core';
import{HttpClient} from'./httpclient.service';



@Injectable()
export class DoctorServices{
constructor(private http:HttpClient){
}  

addDetails(newDetils)
{          
  return this.http.post('http://localhost:8000/api/doctorreg', newDetils);
 
}   
  
sendquery(newDetils)
{          
  return this.http.post('http://localhost:8000/api/sendquery', newDetils);
 
}   
sendprescription(newDetils)
{          
  return this.http.post('http://localhost:8000/api/sendprescription', newDetils);
  
 
}   
GetAllpatient(){
        return this.http.get("http://localhost:8000/api/fetchallpatient");
    }

    GetAllqueriesforme(id){
        return this.http.get('http://localhost:8000/api/fetchallqueries/'+id);
    }
    GetAllprescriptionforme(id){
        return this.http.get('http://localhost:8000/api/fetchallprescription/'+id);
    }
    Getsinglequeryforme(id){
        return this.http.get('http://localhost:8000/api/fetchsinglequery/'+id);
    }
    Getsingleprescriptionforme(id){
        return this.http.get('http://localhost:8000/api/fetchsingleprescription/'+id);
    }

    GetAlldoctor(){
        return this.http.get("http://localhost:8000/api/fetchalldoctor");
    }
    findOnepatient(id){
        return this.http.get('http://localhost:8000/api/getpatientbyid/'+id);
    }
    findOnepatientbymobilenumber(no){
        return this.http.get('http://localhost:8000/api/getpatientbymobilenumber/'+no);
    }
    findOnedoctor(id){
        return this.http.get('http://localhost:8000/api/getdoctorbyid/'+id);
    }
    updatedoctorbyid(id,newdata){
        return this.http.put('http://localhost:8000/api/updatedoctorbyid/'+id,newdata);
    }
    changedoctorpassword(id,newdata){
        return this.http.put('http://localhost:8000/api/changedoctorpassword/'+id,newdata);
    }

    deletepatientbyID(id){
        return this.http.delete('http://localhost:8000/api/deletepatientbyid/'+id);
    }   
    deletedoctorbyID(id){
        return this.http.delete('http://localhost:8000/api/deletedoctorbyid/'+id);
    }   
}
