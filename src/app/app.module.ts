import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { RegistrationformComponent } from './registrationform/registrationform.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormspringComponent } from './formspring/formspring.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationformComponent,
    FormspringComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
