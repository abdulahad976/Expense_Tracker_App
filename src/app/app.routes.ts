import { Routes } from '@angular/router';
import { AddExpenseComponent } from './AddExpense/add-expense/add-expense.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { DisplayExpenseComponent } from './display_expense/display-expense/display-expense.component';
import { ExportDataComponent } from './exportData/export-data/export-data.component';
import { FilterexpenseComponent } from './filterExpense/filterexpense/filterexpense.component';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeNgComponent } from './NgPrime/prime-ng/prime-ng.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'add_expense',
        component: AddExpenseComponent
    },
    {
        path: 'display_expense',
        component:DisplayExpenseComponent
    },
    {
        path: 'export_Data',
        component: ExportDataComponent
    },
    {
        path: 'filter_expense',
        component: FilterexpenseComponent
    },
    {
        path: 'ng-prime',
        component: PrimeNgComponent
    }
];
