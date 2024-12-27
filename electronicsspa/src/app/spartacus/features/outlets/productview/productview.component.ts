import { Component, inject } from '@angular/core';
import { OutletPosition } from '@spartacus/storefront';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.scss'
})
export class ProductviewComponent {

  constructor() { }

  keyword: OutletPosition = OutletPosition.BEFORE;


}
