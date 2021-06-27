import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  

allevents:any;
  constructor(private dataService:DataService,private router:Router) {
    this.allevents=dataService.displayEvents();
    console.log(this.allevents)
   }

  ngOnInit(): void {
  }
back(){
  this.router.navigateByUrl("dashboard");

}
 
}
