import { Component, OnInit } from '@angular/core';

export interface todo {
  id?: number;
  text: string;
  completeStatus?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-book';
  list: any;
  listData: todo[] = [];
  counter: number = 0;
  todoLine!: todo;
  showTodos: boolean = false;
  completeStatus: boolean = false;

  ngOnInit() {

  }

  onClick() {
    if(this.list === '') {
      return;
    } else {
      this.showTodos = true;
      this.counter++;
      this.todoLine = { 
        id: this.counter, 
        text: this.list, 
        completeStatus: this.completeStatus 
      };
      this.listData.push(this.todoLine);
      this.list = '';
    }
  }

  delItem(e: number) {
    this.listData.splice(e, 1);
  }

  completed(e: todo[]) {
    this.listData = [...e];
    // console.log("parent ", e);
  }

  delAll(e: any[]) {
    this.listData = [...e];
    this.listData = this.listData.filter(item => !item.completeStatus);
    // console.log('p delA ', this.listData)
  }

}
