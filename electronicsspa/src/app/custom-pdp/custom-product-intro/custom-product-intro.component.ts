import { Component, OnInit } from '@angular/core';
import { Product, ProductReviewService } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { filter, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-custom-product-intro',
  templateUrl: './custom-product-intro.component.html',
  styleUrl: './custom-product-intro.component.scss'
})

export class CustomProductIntroComponent implements OnInit {

  product$: Observable<Product | null> = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) { }

  ngOnInit(): void {

  }
}
