import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Expense, SharedServiceService } from '../../Services/myservice/shared-service.service';
import { Router } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';


@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CommonModule, FormsModule, AutoCompleteModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {
  expenseForm: FormGroup = new FormGroup({
    id: new FormControl(null), 
    date: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.min(0)]),
    description: new FormControl('', Validators.required)
  });

  formdata: any[] = []; 

  sharedService = inject(SharedServiceService);
  constructor(private router: Router) {}



  ngOnInit(): void {
      this.sharedService.currentMessage.subscribe((message) => {
        this.formdata = message
        this.expenseForm.patchValue(this.formdata);
      })
   }


    
  onSubmit() {
    const expenseData = { ...this.expenseForm.value };
    if (expenseData.id) {
      console.log('Updating expense with ID:', expenseData.id);
      this.sharedService.updateExpense(expenseData);  
      alert('Expense Updated Successfully');
    } else {
      this.sharedService.addExpense(expenseData);  
      alert('Expense Added Successfully');
    }
    this.expenseForm.reset();
    this.router.navigateByUrl('/');
  }
}
