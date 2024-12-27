import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from '@spartacus/core';
import { CurrentProductService, ICON_TYPE } from '@spartacus/storefront';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customsection',
  templateUrl: './customsection.component.html',
  styleUrl: './customsection.component.scss'
})
export class CustomsectionComponent implements OnInit {
  //baseUrl: string = 'https://localhost:9002';

  iconType = ICON_TYPE;

  products: any[] = [];
  product$: Observable<Product | null> = this.currentProductService.getProduct();
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor(private productService: ProductService, private router: Router, private currentProductService: CurrentProductService) { }

  ngOnInit(): void {
    const productCodes = ['300938', '358639', '816802', '1934793', '1382080', '1981415', '816780', '1934406', '1986316', '592506', '553637'];

    productCodes.forEach((code) => {
      this.productService.get(code).subscribe((product) => {
        this.products.push(product);
      });
    });
    this.product$.subscribe(product => console.log('Product:', product));
  }


  get uniqueManufacturers(): string[] {
    return [...new Set(this.products.map(product => product.manufacturer))];
  }
  getProductsByManufacturer(manufacturer: string) {
    return this.products.filter(product => product.manufacturer === manufacturer);
  }

  // perticular navigatefuction
  navigateToProductDetails(productCode: string): void {
    this.router.navigate(['/Open-Catalogue/Cameras/DigitalCameras/Digital-Compacts/NV10/p/', productCode]);
  }

  // addtocart navigatefuction
  // navigateTocart(){
  //   this.router.navigate(['/cart']);
  // }


}


