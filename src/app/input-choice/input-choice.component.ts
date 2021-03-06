import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-choice',
  templateUrl: './input-choice.component.html',
  styleUrls: ['./input-choice.component.css']
})
export class InputChoiceComponent implements OnInit {
  @Input() prop:string;
  @Input() choices:string[];
  @Input() obj;
  mutate:boolean = false;
  newVal;

  constructor() { }

  ngOnInit() {
    this.newVal = this.obj[this.prop] || '';
  }

  show(){
    this.mutate = true;
    this.newVal = this.obj.get(this.prop) || '';
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
    this.mutate = false;
  }
}