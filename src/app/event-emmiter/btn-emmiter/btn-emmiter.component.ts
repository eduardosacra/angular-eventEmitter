import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-emmiter',
  templateUrl: './btn-emmiter.component.html',
  styleUrls: ['./btn-emmiter.component.css']
})
export class BtnEmmiterComponent implements OnInit {

  @Input() incremento: number;

  @Output() enventoIncrementar = new EventEmitter<number>();

  incrementar(value){
    this.enventoIncrementar.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}