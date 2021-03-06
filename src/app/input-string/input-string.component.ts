import { Directive, Component, OnInit, Input, Output, Renderer, ElementRef,ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-string',
  templateUrl: './input-string.component.html',
  styleUrls: ['./input-string.component.css']
})
export class InputStringComponent implements OnInit {
  @Input() prop:string
  @Input() obj;
  @ViewChild('theField', {read: ElementRef}) theField:ElementRef;
  mutate:boolean = false;
  newVal:string;

  constructor() { }

  ngOnInit() {
    this.newVal = this.obj[this.prop] || '';
  }

  save(){
    this.obj.set(this.prop, this.newVal);
    this.mutate = false;
  }

  cancel(){
    this.newVal = this.obj[this.prop] || '';
    this.mutate = false;
  }

  show(){
    this.mutate = true;
    // setTimeout(this.theField.nativeElement.focus(), 10);
    this.theField.nativeElement.focus();
    //console.log(this.theField.nativeElement.outerHTML);
  }
}
