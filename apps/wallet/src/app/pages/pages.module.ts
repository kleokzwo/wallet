import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WalletComponent } from './wallet/wallet.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { BalanceComponent } from '../components/balance/balance.component';
import { FormComponent } from '../components/forms/form.component';
import { TransactionCompoinent } from './transaction/transaction.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    WalletComponent,
    SidebarComponent,
    FooterComponent,
    BalanceComponent,
    FormComponent,
    TransactionCompoinent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgApexchartsModule,
    RouterModule
  ],
  bootstrap: [PagesComponent],
})
export class PagesModule { }
