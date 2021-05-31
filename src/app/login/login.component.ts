import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your Perfect Banking Partner"
  account="Account Number Please"
  acno="";
  pswd="";
  account_details:any = {
    1000: { name: "ajay", accno: 1000, password: "testone", amount: 5000 },
    1001: { name: "vijay", accno: 1001, password: "testtwo", amount: 3000 },
    1002: { name: "ram", accno: 1002, password: "testthree", amount: 7000 },
    1003: { name: "ravi", accno: 1003, password: "testfour", amount: 10000 },

}
  constructor() { }

  ngOnInit(): void {
  }
  accChange(event:any){
    this.acno=event.target.value
    console.log(this.acno)
  }
  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(this.pswd)
  }
login(a:any,p:any){
    //alert("Login Clicked")
  console.log(a.value,p.value);
  var accno=a.value;
  var pswd=p.value;
  let dataset=this.account_details;
  if (accno in dataset){
    if (pswd==dataset[accno]["password"]){
      alert("Successfully Logged In")
    }
    else{
      alert("Incorrect Password")
    }
  }
  else{
    alert("Invalid Account Number")
  }
}
}
