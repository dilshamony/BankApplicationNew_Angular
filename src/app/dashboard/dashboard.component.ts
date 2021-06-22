import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accno="";//for parent child data transfer, can give acno also . no problem
  lDate : Date = new Date();


  acno = "";
  pswd = "";
  amount = "";

 depositForm=this.fb.group({
    acno:['Account Number Please',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    })

  wacno = "";
  wpswd = "";
  wamount = "";

  withdrawForm=this.fb.group({
    wacno:['Account Number Please',[Validators.required,Validators.pattern('[0-9]*')]],
    wpswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    wamount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    })

    user=this.dataService.currentUser
  constructor(private dataService: DataService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
  deposit() {
    var acno = this.depositForm.value.acno;
    var pswd = this.depositForm.value.pswd;
    var amount = this.depositForm.value.amount;
    if(this.depositForm.valid){
    const result = this.dataService.deposit(acno, pswd, amount)
    if (result) {
      alert("Amount" + amount + "Credited Successfully and New Balace is :" + result);
    }
    // alert("Amount Credited Successfully");
  }
  else{
    alert("Invalid Form")
  }
}
  withdraw() {
    var acno = this.withdrawForm.value.wacno;
    var pswd = this.withdrawForm.value.wpswd;
    var amount = this.withdrawForm.value.wamount;
    if(this.withdrawForm.valid){
    const result = this.dataService.withdraw(acno, pswd, amount)
    if (result) {
      alert("Amount" + amount + "Debited Successfully and New Balace is :" + result);
    }
    //alert("Amount Debited Successfully");
  }
  else{
    alert("Invalid Form")

  }
}
deleteAcc(){
  //alert("Deleting!!!")
  this.accno=this.dataService.currentAcc
}
onDelete(event:any){
  //alert("from parent" + event)
  const result=this.dataService.deleteAccDetails(event)
  if(result){
    alert("Account Deleted Successfully")
    this.router.navigateByUrl("");
  }
  else{
    alert("Operation Denied")
  }
}
onCancel(){
  this.accno="";
}
}