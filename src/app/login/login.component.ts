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
  loginForm=this.fb.group({
    usid:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  }) 
  constructor(private router:Router,private fb:FormBuilder,private dataService:DataService) { }

  ngOnInit(): void {
  }
register(){
  this.router.navigateByUrl('register')
}

 
login() {
  
   var uid = this.loginForm.value.usid;
   var pwd = this.loginForm.value.pswd;

   if(this.loginForm.valid){
   const result = this.dataService.login(uid,pwd)
   if (result) {
     alert("Successfully Logged In")
     this.router.navigateByUrl("dashboard")
   }
 }
 else{
   alert("Invalid Form")
 }
 }
}

// https://github.com/nelvinpoulose999/BankProject-Django/blob/master/mybank/views.py