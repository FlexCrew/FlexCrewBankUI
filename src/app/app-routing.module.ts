import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerFormComponentComponent } from './customer-form-component/customer-form-component.component';
import { CustomerListComponentComponent } from './customer-list-component/customer-list-component.component';
import { AccountFormComponentComponent } from './account-form-component/account-form-component.component';
import { AccountListComponentComponent } from './account-list-component/account-list-component.component';

const routes: Routes = [
  {path:'', redirectTo: '/customer', pathMatch:'full'},
  {path: 'addCustomer', component: CustomerFormComponentComponent },
  {path: 'customer', component: CustomerListComponentComponent},
  {path: 'addAccount', component: AccountFormComponentComponent},
  {path: 'listAccount', component: AccountListComponentComponent},
  {path: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
