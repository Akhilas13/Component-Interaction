import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styles: []
})
export class Component2Component implements OnInit {


  constructor(private service: DisplayService) { }

  ngOnInit() {
   
  }
  myMethod(data){
    this.service.sharedData.next(data);
  }
}
