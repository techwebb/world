import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-distribution',
  templateUrl: './input-distribution.component.html',
  styleUrls: ['./input-distribution.component.css']
})
export class InputDistributionComponent implements OnInit {
  @Input() obj;
  @Input() prop;
  @Input() mean:number;
  @Input() sd:number;
  mutate:boolean = false;
  newVal;

  constructor() { }

  ngOnInit() {
    this.newVal = this.obj[this.prop] || this.mean;
  }

  show(){
    this.mutate = true;
    this.newVal = this.obj[this.prop] || this.mean;
  }

  save(){
    this.obj.set(this.prop, this.newVal);
    this.mutate = false;
  }

  cancel(){
    this.newVal = this.obj[this.prop] || '';
    this.mutate = false;
  }
  
  random(){
    this.obj.setRandom(this.prop);
    this.newVal = this.obj[this.prop];
    this.mutate = false;
  }

}
