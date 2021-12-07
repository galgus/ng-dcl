import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DclModule } from './modules/dcl/dcl.module';

import { AppComponent } from './app.component';
import { DclSectionComponent } from './dcl-section/dcl-section.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [AppComponent, DclSectionComponent, DemoComponent],
  imports: [BrowserModule, DclModule],
  entryComponents: [DemoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
