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
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    uid:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    })
  

  constructor(private router:Router,private fb:FormBuilder,private dataService:DataService ) { }

  ngOnInit(): void {
  }
  register(){
    var usname=this.registerForm.value.uname
    var usid=this.registerForm.value.uid
    var pwd=this.registerForm.value.pswd
    if(this.registerForm.valid){
      const result=this.dataService.register(usname,usid,pwd)
      if(result){
        alert("Successfully Registered");
        this.router.navigateByUrl('');
      }
      else{
        alert("Account Already Exist Please Login");
      }
    }
    else{
      alert("Invalid Form")
    }
  }
  login(){
    this.router.navigateByUrl('')
  }
}
