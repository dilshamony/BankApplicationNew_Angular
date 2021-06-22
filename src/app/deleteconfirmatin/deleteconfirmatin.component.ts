import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deleteconfirmatin',
  templateUrl: './deleteconfirmatin.component.html',
  styleUrls: ['./deleteconfirmatin.component.css']
})
export class DeleteconfirmatinComponent implements OnInit {
@Input() item : string | null | undefined

@Output() onDelete=new EventEmitter;

@Output() onCancel = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
delete(){
  this.onDelete.emit(this.item)
}
cancel(){
  this.onCancel.emit()
}
}
