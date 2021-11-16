import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FloatDirective } from './model/float.directive';
import { RegisterComponent } from './register/register.component';
import { IconColorChangeDirective } from './model/icon-color-change.directive';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FloatDirective,
    IconColorChangeDirective
  ],
  exports: [
    FloatDirective,
    IconColorChangeDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
