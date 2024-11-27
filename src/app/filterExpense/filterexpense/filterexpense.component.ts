import { Component,OnInit, inject } from '@angular/core';
import { Expense, SharedServiceService } from '../../Services/myservice/shared-service.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../../display_expense/display-expense/search.pipe';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { Router } from '@angular/router';


@Component({
  selector: 'app-filterexpense',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,FormsModule,SearchPipe, AgGridAngular],
  templateUrl: './filterexpense.component.html',
  styleUrl: './filterexpense.component.css'
})
export class FilterexpenseComponent implements OnInit {
  searchText = '';
  
  formdata: Expense[] = []; 
    
  columnDefs : ColDef[] = [
    {headerName: 'Id', field: 'id' },
    { headerName: 'Date', field: 'date'},
    { headerName: 'Category', field: 'category', filter: 'true' },
    { headerName: 'Amount', field: 'amount' },
    { headerName: 'Description', field: 'description' },
  ];
  
  defaultColDef = {
    flex : 1,
    minWidth : 100
  }
  
  constructor(private sharedService:  SharedServiceService ) {}

  private router = inject(Router)
  
  ngOnInit():void{
    this.getExpenses()


 
    
  }
  
  getExpenses(): void {
    this.formdata = this.sharedService.getExpenses();
  }








  deleteExpense(expense: any) {
    const isConfirmed = confirm('Are you sure you want to delete this expense?');
    if (!isConfirmed) {
      return;  
    } else {
      this.sharedService.deleteExpense(expense.id);
      this.formdata = this.sharedService.getExpenses(); 
    }
  }
  

  category : string = '';

  updateExpense(expense:any[]){
   
    this.formdata = expense
    console.log(this.formdata)  
    this.sharedService.changeMessage(this.formdata)
    this.router.navigateByUrl("/add_expense")

    
  }   
}