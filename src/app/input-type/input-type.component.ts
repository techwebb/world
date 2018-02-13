import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-input-type',
  template: `<div><div #container></div></div>`,
  styleUrls: ['./input-type.component.css']
})
export class InputTypeComponent implements OnInit, OnDestroy {
  @Input() prop:string;
  @Input() type:string;
  @Input() obj;

  @ViewChild('container', { read: ViewContainerRef })
  container:ViewContainerRef;

  private componentRef: ComponentRef<{}>;

  private mappings = {
    'string': DynamicStringComponent,
    'choice': DynamicChoiceComponent
  }

  constructor(private componentFactoryResolver:ComponentFactoryResolver){
  }

  ngOnInit() {
    if(this.type){
      let componentType = this.getComponentType(this.type);
      let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);
      
      let instance = <DynamicComponent> this.componentRef.instance;
      instance.obj = this.obj;
      instance.prop = this.prop;
    }
  }

  getComponentType(typeName:string){
    return this.mappings[typeName];
  }

  ngOnDestroy() {
    if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
    }
  }
}

abstract class DynamicComponent{
  prop: string;
  obj: any;
}

@Component({
  selector: 'dynamic-string',
  template: `<app-input-string prop="prop" [(obj)]="obj" style="color:blue;"></app-input-string>`
})
export class DynamicStringComponent extends DynamicComponent{}

@Component({
  selector: 'dynamic-choice',
  template: `<div>hii</div>`
})
export class DynamicChoiceComponent extends DynamicComponent{}