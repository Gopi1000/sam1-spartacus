import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Product, ProductReviewService } from '@spartacus/core';
import {
  CurrentProductService,
  FocusConfig,
  ICON_TYPE,
  LaunchDialogService,
} from '@spartacus/storefront';
import { filter, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-review-model',
  templateUrl: './review-model.component.html',
  styleUrl: './review-model.component.scss',
})
export class ReviewModelComponent {

  
  product$: Observable<Product | null> =
    this.currentProductService.getProduct();
  iconType = ICON_TYPE;
  isVisible: boolean = false;

  review$ = this.product$.pipe(
    filter((product): product is Product => !!product?.code), // Ensure product is not null
    switchMap((product: Product) =>
      this.productReviewService.getByProductCode(product.code!)
    )
  );

  constructor(
    private productReviewService: ProductReviewService,
    private currentProductService: CurrentProductService,
    private launchDialogService: LaunchDialogService,
    private el: ElementRef
  ) {}

  // close(): void {
  //   this.launchDialogService.clear('customDialog');
  // }

  focusConfig: FocusConfig = {
    trap: true,
    block: true,
    autofocus: 'button',
    focusOnEscape: true,
  };

  dismissModal(reason?: any): void {
    this.launchDialogService.closeDialog(reason);
  }

  @HostListener('click', ['$event'])
  handleClick(event: UIEvent): void {
    if ((event.target as any).tagName === this.el.nativeElement.tagName) {
      this.dismissModal('Cross click');
    }
  }

  // Initially display 5 reviews
  displayedReviews = 5;
  reviewsIncrement = 100; // Number of reviews to load per click

  // Function to show more reviews
  showMoreReviews() {
    this.displayedReviews += this.reviewsIncrement;
  }

  closeDialog(): void {
    this.isVisible = false;
    console.log(this.launchDialogService.closeDialog('customDialog'));
    this.launchDialogService.closeDialog('customDialog');
  }
}
