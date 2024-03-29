import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Excluir Produto',
      icon: 'delete_forever',
      routeUrl: '/delete'
    }
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!
    if (id) {
      this.productService.readById(id).subscribe(product => {
        this.product = product
      })
    }
  }

  deleteProduct(): void {
    if (this.product.id) {
      this.productService.delete(this.product.id).subscribe(() => {
        this.productService.showMessage("Produto excluído com sucesso!")
        this.router.navigate(["/products"])
      })
    }

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
