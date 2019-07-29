import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-emmiter',
  templateUrl: './event-emmiter.component.html',
  styleUrls: ['./event-emmiter.component.css']
})
export class EventEmmiterComponent implements OnInit {

  contador: number =  0;

  constructor() { }

  ngOnInit() {
  }

  incBy(value) {
    this.contador += value;
  }
}