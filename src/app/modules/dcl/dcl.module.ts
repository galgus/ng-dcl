import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DclComponent } from './dcl.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DclComponent],
  exports: [DclComponent]
})
export class DclModule {}
