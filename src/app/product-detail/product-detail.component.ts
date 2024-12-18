import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { RouterModule, ActivatedRoute } from '@angular/router'; // Importar RouterModule y ActivatedRoute
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true, // Componente standalone
  imports: [CommonModule, RouterModule], // Importa CommonModule y RouterModule
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(Number(id)).subscribe({
      next: (data) => {
        console.log('Producto recibido:', data);
        this.product = data;
      },
      error: (err) => {
        console.error('Error al obtener el producto:', err);
      }
    });
  }
}
