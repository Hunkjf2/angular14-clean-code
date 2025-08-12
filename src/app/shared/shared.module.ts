import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Angular Material imports
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { CpfFormatPipe } from './pipes/cpf-format.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';

const PIPES = [
  CpfFormatPipe,
  PhoneFormatPipe
] as const;

const MATERIAL_MODULES = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
] as const;

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  ...MATERIAL_MODULES
] as const;

@NgModule({
  declarations: [
    ...PIPES
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...PIPES
  ],
  providers: []
})
export class SharedModule { 
  
  // Método estático para importação com configurações personalizadas
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        // Aqui você pode adicionar providers globais personalizados
      ]
    };
  }
}