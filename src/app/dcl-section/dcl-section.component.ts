import { Component, ComponentRef } from '@angular/core';

import { DemoComponent } from './../demo/demo.component';
import { InitFunc } from '../modules/dcl/dcl.component';

@Component({
  selector: 'app-dcl-section',
  template: `
    <br />
    <section>
      <hr />
      <div>
        <h3>Static Component</h3>
        <app-dcl [data]="staticData"></app-dcl>
      </div>
      <div>
        <h3>Dynamic Component with output</h3>
        <app-dcl
          [type]="component"
          [init]="initFunction"
          [data]="initialData"
        ></app-dcl>
        <p>Initial data output: {{ newData }}</p>
      </div>
      <br />
    </section>
  `
})
export class DclSectionComponent {
  public component: any = DemoComponent;

  public initFunction: InitFunc;
  public initialData = 1;
  public newData = 1;

  public staticData = 0;

  constructor() {
    this.initFunction = this.init.bind(this);
  }

  private init(component: ComponentRef<DemoComponent>): void {
    console.log('Init DemoComponent with data', this.initialData);

    component.instance.field = this.initialData;
    component.instance.output.subscribe((val: number) => {
      console.log('Output from DemoComponent: %d', val);
      this.newData = val;
    });
  }
}
