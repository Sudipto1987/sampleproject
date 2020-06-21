import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[AccountService]
})
export class UserComponent implements OnInit {


  public searchCriteria:string; 

  public selectAccountAction:string; 
  public accNumber:string; 
  public submittedBy:string; 
  public actionTaken:string; 

 constructor(private accountService:AccountService,private _http:HttpClientModule) { }
 

  

  

  ngOnInit(): void {
  }

}
