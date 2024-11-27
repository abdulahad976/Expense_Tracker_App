import { Injectable } from '@angular/core';
import {ngxCsv} from 'ngx-csv/ngx-csv'
import { BehaviorSubject } from 'rxjs';

export interface Expense {
  id : number,
  date: Date;
  category: string;
  amount: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  

  formdata: Expense[] = []; 

  constructor() {
    this.loadExpenses()
   }

  addExpense(expense: Expense) {
    expense.id = this.formdata.length > 0 ? Math.max(...this.formdata.map(exp => exp.id)) + 1 : 1;
    this.formdata.unshift(expense);
    this.saveExpenses(); 
  }

  getExpenses(): Expense[] { 
    return this.formdata;
  }

  deleteExpense(id:number){
    this.formdata = this.formdata.filter(item => item.id !== id);
    this.saveExpenses(); 
  }


  message$ = new BehaviorSubject<any[]>([]);

  currentMessage = this.message$.asObservable();


updateExpense(updatedExpense: Expense) {
  const index = this.formdata.findIndex(exp => exp.id === updatedExpense.id);
  if (index !== -1) {
    console.log(index)
    this.formdata[index] = updatedExpense;
    this.message$.next(this.formdata);  
  }
}



changeMessage(message: any[]) {
  this.message$.next(message);
}


  private saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(this.formdata));
  }

  private loadExpenses() {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      this.formdata = JSON.parse(storedExpenses);
    }
  }

  exportCsv(){
    if (this.formdata.length === 0) {
      alert('Data is empty. Please add expenses before exporting.');
      return; 
    }
    var options = {
      title : 'Expense_Data',
      fieldSeparator: ',',
      headers : ['Id','Date','Category','Amount','Description']
    }
    new ngxCsv(this.formdata,'ExpenseData',options)
  }
}



