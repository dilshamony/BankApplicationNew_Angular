import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno = "";
  pswd = "";
  amount = "";

  wacno = "";
  wpswd = "";
  wamount = "";
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  deposit() {
    var acno = this.acno;
    var pswd = this.pswd;
    var amount = this.amount;
    const result = this.dataService.deposit(acno, pswd, amount)
    if (result) {
      alert("Amount" + amount + "Credited Successfully and New Balace is :" + result);
    }
    // alert("Amount Credited Successfully");
  }
  withdraw() {
    var acno = this.wacno;
    var pswd = this.wpswd;
    var amount = this.wamount;
    const result = this.dataService.withdraw(acno, pswd, amount)
    if (result) {
      alert("Amount" + amount + "Debited Successfully and New Balace is :" + result);
    }
    //alert("Amount Debited Successfully");
  }
}
