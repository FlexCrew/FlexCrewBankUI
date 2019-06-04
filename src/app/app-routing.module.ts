import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerFormComponentComponent } from './customer-form-component/customer-form-component.component';
import { CustomerListComponentComponent } from './customer-list-component/customer-list-component.component';
import { AccountFormComponentComponent } from './account-form-component/account-form-component.component';
import { AccountListComponentComponent } from './account-list-component/account-list-component.component';
import { DepositFormComponent } from './deposit-form/deposit-form.component';
import { WithDrawFormComponent } from './with-draw-form/with-draw-form.component';
import {BankStatementListComponent} from './bank-statement-list/bank-statement-list.component';
import { BillFormComponent } from './bill-form/bill-form.component';
import { BillListComponent } from './bill-list/bill-list.component';


const routes: Routes = [
  {path:'', redirectTo: '/customer', pathMatch:'full'},
  {path: 'addCustomer', component: CustomerFormComponentComponent },
  {path: 'customer', component: CustomerListComponentComponent},
  {path: 'addAccount', component: AccountFormComponentComponent},
  {path: 'listAccount', component: AccountListComponentComponent},
  {path: 'makeDeposit', component: DepositFormComponent},
  {path: 'makeWithdraw', component: WithDrawFormComponent},
  {path: 'listBankStatement', component: BankStatementListComponent},
  {path: 'addBill', component: BillFormComponent},
  {path: 'listBills', component: BillListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
