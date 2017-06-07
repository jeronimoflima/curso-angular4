import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertComponent } from './input-propert/input-propert.component';
import { OutputPropertComponent } from './output-propert/output-propert.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertComponent,
    OutputPropertComponent

  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
