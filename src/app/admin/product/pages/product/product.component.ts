import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../../../services/producto.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../components/card/card.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  objetivos: any[] = []; // Cambia 'any[]' por la interfaz de objetivos si tienes una
  constructor(private productoService: ProductoService) {}

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

}
