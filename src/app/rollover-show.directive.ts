import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appRolloverShow]'
})
export class RolloverShowDirective {
  @Input('appRolloverShow') flag:boolean;
  @Output('appRolloverShowChange') flagChange = new EventEmitter<boolean>();

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.flag = true;
    this.flagChange.emit(true);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.flag = false;
    this.flagChange.emit(false);
  }

}
