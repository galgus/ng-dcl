import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  template: `<button (click)="click()">Child {{ field }}</button>`
})
export class DemoComponent {
  @Output() public output: EventEmitter<any> = new EventEmitter();

  private _field = 0;

  get field(): number {
    return this._field;
  }

  set field(field: number) {
    this._field = field;
    this.output.emit(this._field);
  }

  click() {
    this.field++;
  }
}
