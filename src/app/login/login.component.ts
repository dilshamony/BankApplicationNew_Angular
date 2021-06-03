import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private dataService: DataService) { }

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
    var accno = this.acno;
    var pswd = this.pswd;
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
    const result = this.dataService.login(accno, pswd)
    if (result) {
      alert("Successfully Logged In")
      this.router.navigateByUrl("dashboard")
    }
  }
  register() {
    this.router.navigateByUrl("register");
  }
}
