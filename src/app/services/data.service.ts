import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser="";
  currentAcc="";//for parent child data transfer

  account_details: any = {
    1000: { name: "DILSHA", accno: 1000, password: "testone", amount: 5000 },
    1001: { name: "DHILNA", accno: 1001, password: "testtwo", amount: 3000 },
    1002: { name: "MONY", accno: 1002, password: "testthree", amount: 7000 },
    1003: { name: "LATHA", accno: 1003, password: "testfour", amount: 10000 },

  }
  constructor(private http:HttpClient) { 
    this.getDetails()  //for local storage
  }
  
  saveDetails(){//for local storage
    localStorage.setItem("account_details",JSON.stringify(this.account_details))
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
    if(this.currentAcc){//for parent child data transfer
      localStorage.setItem("currentAcc",JSON.stringify(this.currentAcc))
    }
  }
  getDetails(){//for local storage
    if(localStorage.getItem("account_details")){
      this.account_details=JSON.parse(localStorage.getItem("account_details") || '')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser") || '')
    }
    if(localStorage.getItem("currentAcc")){//for parent child data transfer
      this.currentAcc=JSON.parse(localStorage.getItem("currentAcc") || '')
    }
  }

  deleteAccDetails(acno:any){   //Deleting
    if(this.currentAcc == acno){
      localStorage.removeItem("currentAcc")
      this.saveDetails();
      return true;
    }
    else{
      return false;
    }
  }

  register(name: any, accno: any, password: any) {
    let dataset = this.account_details;
    if (accno in dataset) {
      return false;
    }
    else {
      this.account_details[accno] = {
        name,
        accno,
        password,
        amount: 0
      }
      this.saveDetails();//for local storage
      return true;
    }
  }
  //                    Format For Creating API
  //===================================================================
  // register(uname:any,acno:any,pswd:any){
  //   const data={
  //     uname,
  //     acno,
  //     pswd
  //   }
  //   return this.http.post("http://localhost:3000/register",data)
  // }
  login(accno: any, pswd: any) {
    let dataset = this.account_details;
    if (accno in dataset) {
      if (pswd == dataset[accno]["password"]) {
        // alert("Successfully Logged In")
        // this.router.navigateByUrl("dashboard")
        this.currentUser=dataset[accno]["name"]//for geting name in dashboard
        this.currentAcc=accno//for parent child data transfer
        this.saveDetails();//for local storage
        return true;
      }
      else {
        alert("Incorrect Password");
        return false;
      }
    }
    else {
      alert("Invalid Account Number");
      return false;
    }
  }
  deposit(accno: any, pswd: any, amt: any) {
    var amount = parseInt(amt)
    let dataset = this.account_details;
    if (accno in dataset) {
      if (pswd == dataset[accno]["password"]) {
        dataset[accno]["amount"] += amount;
        this.saveDetails();//for local storage
        return dataset[accno]["amount"];
      }
      else {
        alert("Incorrect Password");
        return false;
      }
    }
    else {
      alert("Invalid Account Number");
      return false;
    }
  }
  withdraw(accno: any, pswd: any, amt: any) {
    var amount = parseInt(amt)
    let dataset = this.account_details;
    if (accno in dataset) {
      if (pswd == dataset[accno]["password"]) {
        if (amount < dataset[accno]["amount"]) {
          dataset[accno]["amount"] -= amount;
          this.saveDetails();//for local storage
          return dataset[accno]["amount"];
        }
        else {
          alert("Insufficient Balance");
          return false;
        }
      }
      else {
        alert("Incorrect Password");
        return false;
      }
    }
    else {
      alert("Invalid Account Number");
      return false;
    }
  }
}
