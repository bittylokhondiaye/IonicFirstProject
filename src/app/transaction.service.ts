import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListeTransation } from './listeTransaction';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactionurl:string = "http://localhost:8000/api/makeTransaction";
  private listeurl:string= "http://localhost:8000/api/listerTransaction/";
  private transactionDateurl:string = "http://localhost:8000/api/listeTransactionParDate";
  constructor(private http:HttpClient ) { }

  postTransaction(donnees) {
    let  headers = new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem('token'));
    return this.http.post(this.transactionurl,donnees,{headers});
  }
  listerTransaction() :Observable<ListeTransation[]> {
    let  headers = new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem('token'));
   return  this.http.get<ListeTransation[]>(this.listeurl,{headers},);
  }

  transactionDate(dates) :Observable<ListeTransation[]> {
    let  headers = new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem('token'));
   return  this.http.post<ListeTransation[]>(this.transactionDateurl,dates,{headers});
  }

}
