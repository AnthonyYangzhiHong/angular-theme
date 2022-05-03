import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { MyInputComponent } from './my-input/my-input.component';
@NgModule({
  declarations: [
    AppComponent,
    MyInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMenuModule 
  ],
  providers: [
    MatFormFieldModule,
    MatNativeDateModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
