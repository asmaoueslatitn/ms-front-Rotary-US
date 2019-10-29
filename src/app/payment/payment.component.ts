import { Component, OnInit ,Input, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  HttpHeaders } from '@angular/common/http';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from "@angular/router";

import { PaymentService } from './payment.service';
import { environment } from './../../environments/environment' ; 
declare var StripeCheckout:any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  handler: any;
  amount = 500;

  constructor(private router: Router,private paymentSvc: PaymentService ) { }
 
  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
    
      locale: 'auto',
      token: token => {
        this.paymentSvc.processPayment(token, this.amount)
      }
    });
  }

 public handlePayment() {
    this.handler.open({
      name: 'FireStarter',
      excerpt: 'Deposit Funds to Account',
      amount: this.amount
    });
  }

  @HostListener('window:popstate')
    onPopstate() {
      this.handler.close()
    }


}