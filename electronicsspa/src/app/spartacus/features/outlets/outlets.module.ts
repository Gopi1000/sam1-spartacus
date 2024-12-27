import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemooutletComponent } from './demooutlet/demooutlet.component';
import { OutletRefModule } from '@spartacus/storefront';
import { UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { ProductviewComponent } from './productview/productview.component';
import { CustomcarouselComponent } from './customcarousel/customcarousel.component';
import { CustomlinkComponent } from './customlink/customlink.component';
import { CustomtopheaderComponent } from './customtopheader/customtopheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import {
  StarRatingModule,
  IconModule
} from '@spartacus/storefront';
import { CustomproductdetailsComponent } from './customproductdetails/customproductdetails.component';
import { MediaModule } from '@spartacus/storefront';

@NgModule({
  declarations: [DemooutletComponent, ProductviewComponent, CustomcarouselComponent, CustomlinkComponent, CustomtopheaderComponent, CustomproductdetailsComponent],
  imports: [CommonModule, OutletRefModule, UrlModule, RouterModule, BrowserAnimationsModule, MatTabsModule, StarRatingModule, IconModule, MediaModule],
  exports: [DemooutletComponent, ProductviewComponent, CustomcarouselComponent, CustomlinkComponent, CustomtopheaderComponent, CustomproductdetailsComponent]
})
export class OutletsModule { }
