import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  errorMessage: any;
  transactionForm: FormGroup;
  router: any;
  formBuilder= new FormBuilder;
  private transaction=[];
  afficher: boolean=true;
  constructor(private transService:TransactionService,private http:HttpClient) { }

  ngOnInit() {
    }
  initForm() {
    this.transactionForm = this.formBuilder.group({
      Type:['',Validators] ,
      CodeTransaction:['',Validators],
      Montant:['',Validators.required],
      NumeroExpediteur:['',Validators],
      NumeroDestinataire:['',Validators],
      CNIdestinataire:['',Validators],
      NomCompletExpediteur:['',Validators],
      NomCompletDestinataire:['',Validators]
    });}

    onSubmitForm (){
    }
  


}
