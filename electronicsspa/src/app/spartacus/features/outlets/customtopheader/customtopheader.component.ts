import { Component } from '@angular/core';
import { OutletPosition } from '@spartacus/storefront';

@Component({
  selector: 'app-customtopheader',
  templateUrl: './customtopheader.component.html',
  styleUrl: './customtopheader.component.scss'
})
export class CustomtopheaderComponent {

  replace: OutletPosition = OutletPosition.REPLACE;

}
