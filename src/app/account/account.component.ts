import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[AccountService]
})
export class AccountComponent implements OnInit {

  public searchCriteria:string; 

  public selectAccountAction:string; 
  public accNumber:string; 
  public submittedBy:string; 
  public actionTaken:string; 
  public submitted:string;
  

  constructor(private accountService:AccountService,private _http:HttpClientModule) { }

  selectOption(){  
    
    if(this.searchCriteria==='singleAccount'){

      this.selectAccountAction='addSingleAccount';

    }

    if(this.searchCriteria==='approve'){

      this.selectAccountAction='approveAccount';
      

    }

    if(this.searchCriteria==='reject'){

      this.selectAccountAction='rejectAccount';
      

    }

    console.log("TESTING");
    console.log(this.submitted);

       
    
      
    
  }

  submitAccountDetails(){ 
    
      this.actionTaken='Approve';
      this.accountService.submitAccountDetails(this.accNumber,this.submittedBy,this.actionTaken);
      this.submitted='true'
      
    
  }


  submitSingleAccount(){ 
    
    this.actionTaken='Pending';
    this.accountService.submitAccountDetails(this.accNumber,this.submittedBy,this.actionTaken);
    this.submitted='true'
    
  
}


submitRejectAccount(){ 
    
  this.actionTaken='Reject';
  this.accountService.submitAccountDetails(this.accNumber,this.submittedBy,this.actionTaken);
  this.submitted='true'
  

}



  ngOnInit(): void {

    this.submitted='false'
  }

}
