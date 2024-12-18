import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { RouterModule } from '@angular/router'; // Importar RouterModule
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-home-page',
  standalone: true, // Componente standalone
  imports: [CommonModule, RouterModule], // Importa CommonModule y RouterModule
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        console.log('Productos recibidos:', data);
        this.products = data;
      },
      error: (err) => {
        console.error('Error al obtener productos:', err);
      }
    });
  }
}
