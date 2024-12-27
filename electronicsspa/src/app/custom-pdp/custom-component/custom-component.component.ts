import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrl: './custom-component.component.scss'
})
export class CustomComponentComponent implements OnInit {

  product$: Observable<Product | null> =
    this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) { }

  ngOnInit(): void {

  }

}
