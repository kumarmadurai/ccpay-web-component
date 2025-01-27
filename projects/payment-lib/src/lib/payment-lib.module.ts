import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

import {PaymentListComponent} from './components/payment-list/payment-list.component';
import {PaymentViewComponent} from './components/payment-view/payment-view.component';
import {CardDetailsComponent} from './components/card-details/card-details.component';
import {PageNotFoundComponent} from './components/page-not-found.component';
import {PaymentLibComponent} from './payment-lib.component';
import { StatusHistoryComponent } from './components/status-history/status-history.component';
import { PbaDetailsComponent } from './components/pba-details/pba-details.component';
import { LoggerService } from './services/shared/logger/logger.service';
import { ConsoleLoggerService } from './services/shared/logger/console-logger.service';
import { CaseTransactionsComponent } from './components/case-transactions/case-transactions.component';
import { FeeSummaryComponent } from './components/fee-summary/fee-summary.component';
import { AddRemissionComponent } from './components/add-remission/add-remission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PaymentLibComponent,
    PaymentListComponent,
    PaymentViewComponent,
    CardDetailsComponent,
    PageNotFoundComponent,
    StatusHistoryComponent,
    PbaDetailsComponent,
    CaseTransactionsComponent,
    FeeSummaryComponent,
    AddRemissionComponent
  ],
  exports: [ PaymentLibComponent ],
  providers: [ { provide: LoggerService, useClass: ConsoleLoggerService }]
})

export class PaymentLibModule { }
