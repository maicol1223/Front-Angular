import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
@Component({
  selector: 'app-objetive-form',
  standalone: true,
  imports: [ CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule],
  templateUrl: './objetive-form.component.html',
  styleUrl: './objetive-form.component.scss'
})
export class ObjetiveFormComponent {
  objectiveForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ObjetiveFormComponent>
  ) {
    this.objectiveForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaFinalizacion: ['', Validators.required],
      prioridad: ['', Validators.required],
      categoria: ['', Validators.required],
      rememberDays: [[]],
      subObjetivos: this.fb.array([])
    });
  }

  get subObjetivos() {
    return this.objectiveForm.get('subObjetivos') as FormArray;
  }

  addSubObjetivo() {
    const subObjetivo = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
    this.subObjetivos.push(subObjetivo);
  }

  removeSubObjetivo(index: number) {
    this.subObjetivos.removeAt(index);
  }

  onSubmit() {
    if (this.objectiveForm.valid) {
      this.dialogRef.close(this.objectiveForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
