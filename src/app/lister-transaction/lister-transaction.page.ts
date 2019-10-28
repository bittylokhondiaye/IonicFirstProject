import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lister-transaction',
  templateUrl: './lister-transaction.page.html',
  styleUrls: ['./lister-transaction.page.scss'],
})
export class ListerTransactionPage implements OnInit {

  public transaction= [];

  constructor(private http:HttpClient,private transService:TransactionService,private router:Router) { }

  ngOnInit() {
    this.transService.listerTransaction()
    .subscribe( data =>{
     this.transaction = data
     console.log(data);
    });
  }

  transactionDetail(){}

  transactionDate(dates){
    this.transService.transactionDate(dates)
    .subscribe( data =>{
      this.transaction = data
      console.log(data);
     });
  }

}
