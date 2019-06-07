import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styles: []
})
export class Component3Component implements OnInit {

public data;

  constructor(private service: DisplayService) {

   }

  ngOnInit() {
    this.service.sharedData.subscribe(data=>this.data=data)
    }
  }


