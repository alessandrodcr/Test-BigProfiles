import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coordinate-component',
  templateUrl: './coordinate-component.component.html',
  styleUrls: ['./coordinate-component.component.css']
})
export class CoordinateComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  options:JSON;

  receiveOptions($event) {
    this.options= $event;
    console.log(this.options);
  }

}
