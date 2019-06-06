import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Withdraw } from '../withdraw';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {

   private withdrawUrl: string;
   private accountId: string;
   private withdrawId: string;

  constructor(private http: HttpClient) {
    this.withdrawUrl ='http://localhost:8080';
   }
  public findAll():Observable<Withdraw[]>{
     return this.http.get<Withdraw[]>(this.withdrawUrl + "/accounts" + this.accountId + "/withdrawals");
   }
   public save(withdraw: Withdraw) {
     return this.http.post<Withdraw>(this.withdrawUrl + "/accounts" + this.accountId + "/withdrawals", withdraw);
   }
   public getOne(id: number){
     return this.http.get(this.withdrawUrl +"/withdrawals"+ id);
   }
   public update(id: number, withdraw: Withdraw){
     return this.http.put(this.withdrawUrl+ "/withdrawals"+ id, withdraw)
   }
   public delete(id:number){
     return this.http.delete(this.withdrawUrl+ "/withdrawals"+ id);
   }
}
