import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DclModule } from './modules/dcl/dcl.module';

import { AppComponent } from './app.component';
import { DCLSectionComponent } from './dcl-section/dcl-section.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [AppComponent, DCLSectionComponent, DemoComponent],
  imports: [BrowserModule, DclModule],
  entryComponents: [DemoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
