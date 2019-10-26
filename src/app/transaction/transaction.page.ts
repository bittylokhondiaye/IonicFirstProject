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
  echange:boolean=true;
  nonEchange:boolean=true;
  Type:String;
  constructor(private transService:TransactionService,private http:HttpClient) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.transactionForm =new FormGroup({
      Type : new FormControl(),
      CodeTransaction : new FormControl(),
      Montant : new FormControl(),
      NumeroExpediteur : new FormControl(),
      NumeroDestinataire : new FormControl(),
      CNIdestinataire : new FormControl(),
      NomCompletExpediteur : new FormControl(),
      NomCompletDestinataire : new FormControl()
    });
  }

    onSubmitForm (){
      const formValue = this.transactionForm.value;
    const newTransaction = new Transaction(  
      this.Type+'',
      formValue['CodeTransaction'],
      formValue['Montant'],
      formValue['NumeroExpediteur'],
      formValue['NumeroDestinataire'],
      formValue['CNIdestinataire'],
      formValue['NomCompletExpediteur'],
      formValue['NomCompletDestinataire'],
    ); 
    console.log(newTransaction);
    this.transService.postTransaction(newTransaction).subscribe(res => {
      console.log(res)
    },err=>{
      console.log(err);
  });
    }
  
    envoi(){
      this.echange=false;
      this.nonEchange=true;
      const formValue = this.transactionForm.value;
      formValue['Type']="envoi";
      this.Type="envoi";
    }
  
    retrait(){
      this.echange=true;
      this.nonEchange=false;
      const formValue = this.transactionForm.value;
      formValue['Type']="retrait";
      this.Type="retrait";
    }

}


