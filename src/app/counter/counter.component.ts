import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apply-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: number = 0;

  Clickme(){
    this.counter++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
