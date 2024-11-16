import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../../../services/producto.service';
import { CommonModule } from '@angular/common';
import { AddObjetiveButtomComponent } from '../../../../components/add-objetive-buttom/add-objetive-buttom.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ObjetiveFormComponent } from '../../../../components/objetive-form/objetive-form.component';
import { ObjetiveCardComponent } from '../../../../components/objetive-card/objetive-card.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,ObjetiveCardComponent,AddObjetiveButtomComponent,MatDialogModule,ObjetiveFormComponent ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  objetivos: any[] = []; // Cambia 'any[]' por la interfaz de objetivos si tienes una
  constructor(
    private productoService: ProductoService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productoService.getObjetivos().subscribe({
      next: (data) => {
        this.objetivos = data;
        console.log("Objetivos recibidos:", data);
      },
      error: (error) => {
        console.error('Error al obtener objetivos:', error);
      },
      complete: () => {
        // Este callback es opcional
        console.log('La suscripción se ha completado');
      }
    });
  }
  openObjectiveForm() {
    const dialogRef = this.dialog.open(ObjetiveFormComponent, {
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productoService.addObjetivo(result).subscribe({
          next: (response) => {
            console.log('Objetivo añadido:', response);
            this.objetivos = [...this.objetivos, response.data];
            this.showSuccess('Objetivo creado exitosamente');
          },
          error: (error) => {
            console.error('Error al añadir objetivo:', error);
            this.showError('Error al crear el objetivo');
          }
        });
      }
    });
  }


  private showSuccess(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  private showError(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 5000,
      panelClass: ['error-snackbar']
    });
  }
}
