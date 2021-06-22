import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your Perfect Banking Partner"
  //account="Account Number Please"
  acno = "Account Number Please";
  pswd = "";

  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    }) 
  constructor(private router: Router, private dataService: DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // accChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno)
  // }
  // pswdChange(event:any){
  //   this.pswd=event.target.value
  //   console.log(this.pswd)
  // }
  login() {
    //alert("Login Clicked")
    //console.log(a.value,p.value);
    var accno = this.loginForm.value.acno;//var accno = this.acno;
    var pswd = this.loginForm.value.pswd; // var pswd = this.pswd;
    // let dataset=this.dataService.account_details;
    // if (accno in dataset){
    //   if (pswd==dataset[accno]["password"]){
    //     alert("Successfully Logged In")
    //     this.router.navigateByUrl("dashboard")
    //   }
    //   else{
    //     alert("Incorrect Password")
    //   }
    // }
    // else{
    //   alert("Invalid Account Number")
    // }
    if(this.loginForm.valid){
    const result = this.dataService.login(accno, pswd)//
    if (result) {//
      alert("Successfully Logged In")//
      this.router.navigateByUrl("dashboard")//
    }//
  }//
  else{
    alert("Invalid Form")
  }
  }
  register() {
    this.router.navigateByUrl("register");
  }
}
