import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { CoordinateComponentComponent } from './coordinate-component/coordinate-component.component';
import { GraphicComponentComponent } from './graphic-component/graphic-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    CoordinateComponentComponent,
    GraphicComponentComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
