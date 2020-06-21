import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  submitAccountDetails(accNumber:string,submittedBy:string,actionTaken:string){  

//http://localhost:8000/addAccountRequest/8005/Sandip/Approve

    let _url:string='http://localhost:8000/addAccountRequest/'+accNumber+'/'+submittedBy+'/'+actionTaken+'';

    const postData:string =null;

    this.http
      .post(
        _url,
        JSON.parse(postData),
        {
          observe: 'response'
        }
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
      );

    
    
}

}
