import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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


  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
  //alert("Register Clicked")
  var acno=this.acno;
  var uname=this.uname;
  var pswd=this.pswd;
  const result=this.dataService.register(uname,acno,pswd)
  if(result){
    alert("Registered Successfully");
    this.router.navigateByUrl("");
  }
  else{
    alert("Account Already Exists, Please Log In!!!")
  }
}
}
