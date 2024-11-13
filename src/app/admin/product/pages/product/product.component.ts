import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../../../services/producto.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

    public httpProduct = inject(ProductoService)

    ngOnInit(): void {
      this.httpProduct.getProducto().subscribe(res=>{
        console.log(res);
      })
    }

}
