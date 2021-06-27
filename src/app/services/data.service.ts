import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
userdetails:any={
    1000: { name: "DILSHA", uid: 1000, password: "testone", edetails: [] },
    1001: { name: "LATHA", uid: 1001, password: "testtwo", edetails: [] },
    1002: { name: "DHILNA", uid: 1002, password: "testthree", edetails: [] },
    1003: { name: "MONY", uid: 1003, password: "testfour", edetails: [] }
}
currentuser:any;
currentuserid:any;

  constructor() {
    this.getDetails()
   }
  saveDetails(){
    localStorage.setItem("userdetails",JSON.stringify(this.userdetails))
    if(this.currentuser){
      localStorage.setItem("currentuser",JSON.stringify(this.currentuser))
    }
    if(this.currentuserid){
      localStorage.setItem("currentuserid",JSON.stringify(this.currentuserid))
  }
  }
  getDetails(){
    if(localStorage.getItem("userdetails")){
      this.userdetails=JSON.parse(localStorage.getItem("userdetails") || '')
    }
    if(localStorage.getItem("currentuser")){
      this.currentuser=JSON.parse(localStorage.getItem("currentuser") || '')
    }
    if(localStorage.getItem("currentuserid")){
      this.currentuserid=JSON.parse(localStorage.getItem("currentuserid") || '')
    }
  }
  deleteDetails(usid:any){
    if(this.currentuserid=usid){
      localStorage.removeItem("currentuserid")
      this.saveDetails();
      return true;
    }
    else{
      return false;
    }
  }
  login(usid:any,pswd:any){
    let dataset=this.userdetails
    if(usid in dataset){
      if(pswd== dataset[usid]['password']){
        this.currentuser=dataset[usid]["name"]
        this.currentuserid=usid
        this.saveDetails();
        return true;
      }
      else{
        alert("Incorrect Password")
        return false;
      }
    }
    else{
      alert("Invalid Account")
      return false;
    }
  }
  register(name:any,uid:any,password:any){
    let user=this.userdetails;
    if(uid in user){
      return false;
    }
    else{
      user[uid]={
        name,
        uid,
        password,
        edetails:[]
        
      }
      this.saveDetails();
      return true;
    }
  }
displayEvents(){
  return this.userdetails[this.currentuserid].edetails;
}

  eventDetails(uid:any,edate:any,event:any){
    let datas=this.userdetails;
    if(uid in datas){
      datas[uid].edetails.push({
        eventdate:edate,
        eventname:event
      })
      this.saveDetails();
      console.log(this.userdetails);
      return true;
    }
    else{
      return false;
    }
  }
}
