import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-string',
  templateUrl: './input-string.component.html',
  styleUrls: ['./input-string.component.css']
})
export class InputStringComponent implements OnInit {
  @Input() prop:string
  @Input() obj;
  mutate:boolean = false;
  newVal:string;

  constructor() { }

  ngOnInit() {
  }

  save(){
    this.obj.set(this.prop, this.newVal);
    this.mutate = false;
  }

  cancel(){
    this.newVal = this.obj[this.prop] || '';
    this.mutate = false;
  }
}
