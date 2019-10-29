import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentComponent } from '../payment/payment.component';
import { environment } from './../../environments/environment' ; 
import { PaymentService } from '../payment/payment.service';
declare var StripeCheckout:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  handler: any;
  amount = 10;
  constructor ( private router : Router,private paymentSvc: PaymentService ) { }

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
    
      locale: 'auto',
      token: token => {
        this.paymentSvc.processPayment(token, this.amount)
      }
    });
  }
  in()
  {
    this.router.navigate(['/login'])
  }
  
   handlePayment() {
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
