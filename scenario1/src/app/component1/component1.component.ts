import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styles: []
})
export class Component1Component implements OnInit {
  console: any;

  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    console.log("welcome to stackroute");
    
  }

}
