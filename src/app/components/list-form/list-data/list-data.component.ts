import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { todo } from '../list-form.component';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {
  @Input() dataList!: todo[];
  @Output() itemDelete = new EventEmitter<any>();
  @Output() completeEvent = new EventEmitter<any[]>();
  @Output() clearAllEvent = new EventEmitter<any>();
  disabledBtn: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  onDelete(id: any) {
    this.itemDelete.emit(id);
  }

  onComplete(id: any) {
    let status = this.dataList[id].completeStatus;
    this.dataList[id].completeStatus = !status;
    this.completeEvent.emit(this.dataList);
  }

  deleteAll() {
    // this.dataList.length = 0;
    if(this.dataList.length > 0) this.clearAllEvent.emit(this.dataList)
    else return;
  }
}
