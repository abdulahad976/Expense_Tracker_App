import { Component } from '@angular/core';
import { SharedServiceService } from '../../Services/myservice/shared-service.service';

@Component({
  selector: 'app-export-data',
  standalone: true,
  imports: [],
  templateUrl: './export-data.component.html',
  styleUrl: './export-data.component.css'
})
export class ExportDataComponent {


  constructor(private sharedService:  SharedServiceService ) {}



  downloadData(){
    this.sharedService.exportCsv()
  }
  
}


