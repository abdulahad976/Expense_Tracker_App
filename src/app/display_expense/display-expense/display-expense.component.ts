import { CommonModule  } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Expense, SharedServiceService } from '../../Services/myservice/shared-service.service';
import { FormsModule, NgControl } from '@angular/forms';
import { SearchPipe } from './search.pipe';

@Component({
  selector: 'app-display-expense',
  standalone: true,
  imports: [CommonModule,FormsModule,SearchPipe],
  templateUrl: './display-expense.component.html',
  styleUrl: './display-expense.component.css'
})
export class DisplayExpenseComponent implements OnInit {
// searchText = '';

formdata: Expense[] = []; 

constructor(private sharedService:  SharedServiceService ) {}

ngOnInit():void{
  this.getExpenses()
}

getExpenses(): void {
  this.formdata = this.sharedService.getExpenses();
}


getTotalAmount(): number {
  return this.formdata.reduce((sum, item) => sum + item.amount, 0);
}


}