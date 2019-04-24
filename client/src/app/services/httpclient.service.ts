import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class HttpClient {
   // config: any;
    
    constructor(private http: Http) {

      //  this.BaseURL = this.config.apiurl;
    }



    get(url) {
        let headers = new Headers();
        //this.createAuthorizationHeader(headers);
       
        return this.http.get(url, {
            headers: headers
        }).map(this.handlerData)

            ;

    }
    delete(url) {


        return this.http.delete(url, {

        }).map(this.handlerData)
            ;
    }
    post(url, data) {

        let headers = new Headers();
       
        return this.http.post(url, data, {
            headers: headers
        }).map(this.handlerData)
            ;
    }
    put(url, data) {

        let headers = new Headers();
     
        return this.http.put(url, data, {
            headers: headers
        }).map(this.handlerData)
            ;
    }
    private handleError(error: Response) {

        return Observable.throw({ requestStatus: 0, msg: "Server error", arr: [] });
    }

    private handlerData(error: Response) {


        return error.json();
    }
}