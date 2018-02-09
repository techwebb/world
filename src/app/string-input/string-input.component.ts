import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-string-input',
  templateUrl: './string-input.component.html',
  styleUrls: ['./string-input.component.css']
})
export class StringInputComponent implements OnInit {
  @Input() prop:string
  @Input() obj;
  mutate:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
