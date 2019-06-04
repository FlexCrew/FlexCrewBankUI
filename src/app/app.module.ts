import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponentComponent } from './account-list-component/account-list-component.component';
import { CustomerFormComponentComponent } from './customer-form-component/customer-form-component.component';
import { AccountFormComponentComponent } from './account-form-component/account-form-component.component';
import { CustomerListComponentComponent } from './customer-list-component/customer-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponentComponent,
    CustomerFormComponentComponent,
    AccountFormComponentComponent,
    CustomerListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
