import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { CoordinateComponentComponent } from './coordinate-component/coordinate-component.component';
import { GraphicComponentComponent } from './graphic-component/graphic-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    CoordinateComponentComponent,
    GraphicComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
