import { Component } from '@angular/core';
import { OutletPosition } from '@spartacus/storefront';
import { CustomsectionComponent } from '../../../../custom-pdp/customsection/customsection.component';

@Component({
  selector: 'app-customproductdetails',
  templateUrl: './customproductdetails.component.html',
  styleUrl: './customproductdetails.component.scss'
})
export class CustomproductdetailsComponent extends CustomsectionComponent{
  
    keyword: OutletPosition = OutletPosition.BEFORE;

}
