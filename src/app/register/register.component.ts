import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
uname="";
acno="";
pswd="";

registerForm=this.fb.group({
uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})
  constructor(private dataService:DataService,private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  //Template driven forms
  //=======================================
  // register(){
  //   //alert("Register Clicked")
  //  var acno=this.acno;
  //   var uname=this.uname;
  //   var pswd=this.pswd;
  //   const result=this.dataService.register(uname,acno,pswd)
  //   if(result){
  //     alert("Registered Successfully");
  //     this.router.navigateByUrl("");
  //   }
  //   else{
  //     alert("Account Already Exists, Please Log In!!!")
  //   }
  // else{
  //   alert("Invalid Form")
  // }
  // }
register(){
  // if (this.registerForm.get('uname')?.errors){
  //   alert("Invalid User Name")
  // }
      //alert("Register Clicked")
  var acno=this.registerForm.value.acno;      //var acno=this.acno;===>template driven 
  var uname=this.registerForm.value.uname;   // var uname=this.uname;
  var pswd=this.registerForm.value.pswd;    // var pswd=this.pswd;
  if(this.registerForm.valid){
  const result=this.dataService.register(uname,acno,pswd)
  if(result){
    alert("Registered Successfully");
    this.router.navigateByUrl("");
  }
  else{
    alert("Account Already Exists, Please Log In!!!")
  }
}
else{
  alert("Invalid Form")
}
}
}