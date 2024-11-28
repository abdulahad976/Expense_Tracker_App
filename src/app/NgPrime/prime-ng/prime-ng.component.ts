import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { ModalComponent } from '../../Modal/modal/modal.component';
import { Expense, SharedServiceService } from '../../Services/myservice/shared-service.service';
import { GridOptions } from 'ag-grid-community'; // or the specific grid library you're using

@Component({
  selector: 'app-prime-ng',
  standalone: true,
  imports: [AgGridAngular, ModalComponent],
  templateUrl: './prime-ng.component.html',
  styleUrl: './prime-ng.component.css'
})
export class PrimeNgComponent implements OnInit {
  rowSelection: any = 'multiple'; 
  public paginationPageSizeSelector: number[] | boolean = [10, 25, 50];
  public defaultColDef: ColDef = {
    flex: 3,
    maxWidth: 450,
  };

  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Nice", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 40000, electric: true },
    { make: "Xyz", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 32000, electric: true },
    { make: "Condition", model: "Corolla", price: 29600, electric: false },
    { make: "Ind", model: "Corolla", price: 33333, electric: true },
    { make: "Abc", model: "Corolla", price: 45000, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: true },
    { make: "Good", model: "Corolla", price: 34000, electric: false },
    { make: "New", model: "Corolla", price: 29600, electric: true },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mepco", model: "Corolla", price: 90000, electric: true },
    { make: "Pak", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 71777, electric: true },
    { make: "Toyota", model: "Corolla", price: 29600, electric: true },
    { make: "Condition", model: "Corolla", price: 29600, electric: false },
    { make: "Ind", model: "Corolla", price: 78999, electric: true },
    { make: "Abc", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: true },
    { make: "Good", model: "Corolla", price: 32344, electric: false },
    { make: "New", model: "Corolla", price: 29600, electric: true },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mepco", model: "Corolla", price: 54222, electric: true },
    { make: "Pak", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 55555, electric: true },

  ];

  @ViewChild('modal') modal!: ModalComponent

  // gridOptions = {
  //   getRowStyle: (params: any) => {
  //     console.log(params.data);  // Check the row data here
  //     if (params.data.make === 'Toyota') {
  //       return { backgroundColor: 'goldenrod' };  // Style for rows where make is Toyota
  //     }
  //     return null;
  //   }
  // };
 
  
  colDefs: ColDef[] = [
    { field: "make", filter: true, headerName: "Name" },
    { field: "model", editable: true },
    { field: "price", filter: true , aggFunc: 'sum', cellStyle: (params)=>{
      if (params.value > 30000) {
        return { color: 'green' };
      }
      return { color: 'blue' };
    }},
    { field: "electric", editable: true },
    { 
      field: "actions", 
      headerName: "Actions",
      cellRenderer: (params: any) => {
        const div = document.createElement('div');
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'btn btn-primary me-2';
        editButton.addEventListener('click', () => this.modal.open(params.data))
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn btn-danger';
        deleteButton.addEventListener('click', () => this.modal.open(params.data));
        
        div.appendChild(editButton);
        div.appendChild(deleteButton);
        
        return div;
      },
      cellStyle: { display: 'flex', gap: '10px', alignItems: 'center' }
    }
];


 







  // ngAfterViewInit() {
  //   console.log('Modal reference:', this.modal.open('Hello'));
  // }

 





      newColumnDefs: ColDef[] = [
        { field: "id", filter: true, headerName: "ID" },
        { field: "date", editable: true, headerName: "Date" },
        { field: "category", headerName: "Category" },
        { field: "amount", filter: true , headerName: "Amount" },
        { field: "description", editable: true, headerName: "Description" },
        { 
          field: "actions", 
          headerName: "Actions",
          cellRenderer: (params: any) => {
            const div = document.createElement('div');
            
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.className = 'btn btn-primary me-2';
            editButton.addEventListener('click', () => this.modal.open(params.data))
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'btn btn-danger';
            deleteButton.addEventListener('click', () => this.modal.open(params.data));
            
            div.appendChild(editButton);
            div.appendChild(deleteButton);
            
            return div;
          },
          cellStyle: { display: 'flex', gap: '10px', alignItems: 'center' }
        }
      ];



      formdata: Expense[] = []; 

      constructor(private sharedService:  SharedServiceService ) {}

      ngOnInit():void{
        this.getExpenses()
      }

      getExpenses(): void {
        this.formdata = this.sharedService.getExpenses();
      }

}