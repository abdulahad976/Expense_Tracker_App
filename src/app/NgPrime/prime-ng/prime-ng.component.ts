import { Component } from '@angular/core';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';




@Component({
  selector: 'app-prime-ng',
  standalone: true,
  imports: [CardModule, ButtonModule, PasswordModule, FloatLabelModule, FormsModule, InputTextModule, CommonModule],
  templateUrl: './prime-ng.component.html',
  styleUrl: './prime-ng.component.css'
})
export class PrimeNgComponent {

  value : string = '';
  email: string = '';
  password: string = '';
}
