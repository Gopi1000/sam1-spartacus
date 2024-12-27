import { Component, ElementRef, Input, ViewContainerRef } from '@angular/core';
import { Product } from '@spartacus/core';
import {
  CurrentProductService,
  ICON_TYPE,
  LaunchDialogService,
} from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { ReviewModelComponent } from '../review-model/review-model.component';

@Component({
  selector: 'app-custom-product-summary',
  templateUrl: './custom-product-summary.component.html',
  styleUrl: './custom-product-summary.component.scss',
})
export class CustomProductSummaryComponent {
  iconTypes = ICON_TYPE;

  product$: Observable<Product | null> =
    this.currentProductService.getProduct();

  constructor(
    private currentProductService: CurrentProductService,
    private launchDialogService: LaunchDialogService,
    private elementRef: ElementRef,
    private vcr: ViewContainerRef
  ) { }

  // @Input() max: number = 10;
  // quantity: number = 1;

  // increment() {
  //   if (this.quantity < this.max) {
  //     this.quantity += 1;
  //   }
  // }

  // decrement() {
  //   if (this.quantity > 1) {
  //     this.quantity -= 1;
  //   }
  // }

  // displayStyle = "none";
  // openPopup() {
  //   console.log("hiii")
  //   this.displayStyle = "block";
  // }
  // closePopup() {
  //   this.displayStyle = "none";
  // }

  openDialog(): void {
    const dialog = this.launchDialogService.openDialog(
      'customDialog', // The identifier for the dialog
      this.elementRef.nativeElement, // Element reference for dialog positioning
      this.vcr // ViewContainerRef where the dialog will be injected
    );

    // Optional: Handle dialog result (if any)
    dialog?.subscribe((result) => {
      console.log('Dialog closed', result);
    });
  }
}
