import { Component } from '@angular/core';
import { OutletPosition } from '@spartacus/storefront';

@Component({
  selector: 'app-customcarousel',
  templateUrl: './customcarousel.component.html',
  styleUrl: './customcarousel.component.scss'
})
export class CustomcarouselComponent {

  before: OutletPosition = OutletPosition.REPLACE;
  

}
