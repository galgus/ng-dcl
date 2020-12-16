import { Component, ComponentRef } from '@angular/core';

import { DemoComponent } from './../demo/demo.component';
import { InitFunc } from '../modules/dcl/dcl.component';

@Component({
  selector: 'app-dcl-section',
  template: `
    <br />
    <section>
      <hr />
      <button (click)="pruebaClick()">Prueba</button>
      <div>
        {{ dataOut }}
        <app-dcl [type]="component" [init]="func" [data]="data"></app-dcl>
        <app-dcl [data]="data2"></app-dcl>
      </div>
      <br />
    </section>
  `
})
export class DCLSectionComponent {
  public component: any = DemoComponent;

  public func: InitFunc;
  public data = 1;

  public data2 = 0;
  public dataOut = 1;

  private _value = 0;

  constructor() {
    this.func = this.pruebaInit.bind(this);
  }

  public pruebaClick() {
    this.func = this.pruebaInit2.bind(this);
  }

  private pruebaInit(component: ComponentRef<any>, data: any): void {
    console.log(
      'Private variable value: %d and data: %d',
      this._value,
      this.data
    );
    component.instance._campo = this.data;
    console.log(component.instance.cOutput);
    component.instance.cOutput.subscribe((val: number) => {
      console.log('emitted: %d', val);
      this.dataOut = val;
    });
  }

  private pruebaInit2(component: ComponentRef<any>, data: any): void {
    console.log(
      'Private variable value: %d and data: %d',
      this._value,
      this.data
    );
    component.instance._campo = this.data;
    console.log(component.instance.cOutput);
    component.instance.cOutput.subscribe((val: number) => {
      console.log('emitted: %d', val);
      this.data = val;
    });
  }
}
