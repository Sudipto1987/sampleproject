import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:string; 
  public password:string; 
  public invalidLogin:boolean; 

  constructor(private router:Router) { }  

  loginUser(){  
    

    if(this.username=='admin' && this.password =='admin'){

      console.log("Inside login");
     // this.user.setUserLoggedIn();
     //this.invalidLogin = false ;
      this.router.navigate(['account']);

//      this.router.navigate(['dashboard']);
      
    }
  }

  ngOnInit(): void {
  }

}
