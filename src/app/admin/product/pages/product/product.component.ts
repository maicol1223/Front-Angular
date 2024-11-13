import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../../../services/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  objetivos: any[] = []; // Cambia 'any[]' por la interfaz de objetivos si tienes una
  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getObjetivos().subscribe(
      (data) => {
        this.objetivos = data;
        console.log("Objetivos recibidos:", data); // Inspecciona el formato en la consola
      },
      (error) => {
        console.error('Error al obtener objetivos:', error);
      }
    );
  }


}
