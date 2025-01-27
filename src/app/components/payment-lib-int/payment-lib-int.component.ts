import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-lib-int',
  templateUrl: './payment-lib-int.component.html',
  styleUrls: ['./payment-lib-int.component.css']
})
export class PaymentLibIntComponent implements OnInit {
  ccdCaseNumber: string;
  paymentMethod: string;
  apiRoot: string;
  view: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.ccdCaseNumber = params.ccdCaseNumber;
      this.view = this.activatedRoute.snapshot.queryParams['view'];
      this.apiRoot = 'http://localhost:9999';
    });
  }

}
