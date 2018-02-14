import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-distribution',
  templateUrl: './input-distribution.component.html',
  styleUrls: ['./input-distribution.component.css']
})
export class InputDistributionComponent implements OnInit {
  @Input() obj;
  mean:number;
  sd:number;
  newVal:number;
  constructor() { }

  ngOnInit() {
    this.mean = 130;
    this.sd = 30;
    this.newVal = 100;
  }

}
