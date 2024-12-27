import { Component, OnInit } from '@angular/core';
import { Product, ProductReviewService, ProductService, ProductScope, CmsService } from '@spartacus/core';
import { CurrentProductService, ICON_TYPE, OutletPosition } from '@spartacus/storefront';
import { filter, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-customlink',
  templateUrl: './customlink.component.html',
  styleUrl: './customlink.component.scss'
})
export class CustomlinkComponent implements OnInit{
  
  
    product$: Observable<Product | null> = this.currentProductService.getProduct([
      ProductScope.ATTRIBUTES,
      ProductScope.DETAILS
    ]);
    
  after: OutletPosition = OutletPosition.AFTER;

  constructor(private productReviewService: ProductReviewService, private productService: ProductService,
    private currentProductService: CurrentProductService,private cmsService: CmsService) { }
  iconType = ICON_TYPE;
  isVisible: boolean = false;

  review$ = this.product$.pipe(
    filter((product): product is Product => !!product?.code), // Ensure product is not null
    switchMap((product: Product) =>
      this.productReviewService.getByProductCode(product.code!)
    )
  );

  // Initially display 5 reviews
  displayedReviews = 5;
  reviewsIncrement = 100;

  // Function to show more reviews
  showMoreReviews() {
    this.displayedReviews += this.reviewsIncrement;
  }

  content$!: Observable<any>;


  ngOnInit(): void {
    // Replace 'CMSParagraphComponent' with the correct component type/code
    this.content$ = this.cmsService.getComponentData('deliveryTab');
  }
  
  
}
