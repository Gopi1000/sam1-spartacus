import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPageComponent } from './static-page/static-page.component';
import { ConfigModule, OccConfig, PRODUCT_NORMALIZER, RoutingConfig, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { staticRoutes } from './static-page/static-route';
import { ProductPrettyNameNormalizer } from './custom-routes/product-name.normalizer';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    StaticPageComponent
  ],
  imports: [
    MatTabsModule,
    CommonModule,
    UrlModule,
    RouterModule.forChild(staticRoutes),
    // configure product routes
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paths: [
              'product/:manufacturer/:productCode/:prettyName',
              'product/:productCode/:name',
            ],
          },
        },
      },
    } as RoutingConfig),
    // configure OCC product endpoint to get the manufacturer fields in the response
    ConfigModule.withConfig({
      backend: {
        occ: {
          endpoints: {
            productSearch:
              'products/search?fields=products(code,manufacturer,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch&query=${query}',
          },
        },
      },
    } as OccConfig),

  ],

  providers: [
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: ProductPrettyNameNormalizer,
      multi: true,
    }
  ],
  exports: [RouterModule],
})
export class CustomRoutingModule { }
