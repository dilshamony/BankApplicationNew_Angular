import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userid="";
eventForm=this.fb.group({
  uid:[''],
  edate:[''],
  events:['']
})
user=this.dataService.currentuser
  constructor(private dataService:DataService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
eventAdder(){
  var uid=this.eventForm.value.uid
  var evdate=this.eventForm.value.edate
  var event=this.eventForm.value.events
  const result=this.dataService.eventDetails(uid,evdate,event)
  if(result){
    alert("Event Added Successfully")
  }
}
view(){
  this.router.navigateByUrl("viewdetails");
}
deleteAcc(){
  // alert("Deleted")
  this.userid=this.dataService.currentuserid
}
onDelete(event:any){
  //alert("From parent" + event)
  const result=this.dataService.deleteDetails(event)
  if(result){
    alert("Account Deleted Successfully");
    this.router.navigateByUrl("");
  }
  else{
    alert("Operation Denied")
  }
}
onCancel(){
  this.userid="";
}
logout(){
  alert("Logged Out Successfully");
  this.router.navigateByUrl("");
}

}
