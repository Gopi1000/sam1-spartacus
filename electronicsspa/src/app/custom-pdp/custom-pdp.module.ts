import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigModule, CmsConfig, provideConfig } from '@spartacus/core';
import {
  StarRatingModule,
  IconModule,
  LaunchDialogService,
  DIALOG_TYPE,
  LayoutConfig,
} from '@spartacus/storefront';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { CustomProductIntroComponent } from './custom-product-intro/custom-product-intro.component';
import { CustomProductSummaryComponent } from './custom-product-summary/custom-product-summary.component';
import { ReviewModelComponent } from './review-model/review-model.component';
import { FormErrorsModule } from '@spartacus/storefront';
import { CustomregisterComponent } from '../customregister/customregister.component';
import { FormsModule } from '@angular/forms';
import { CustomsectionComponent } from './customsection/customsection.component';
import { StaticPageComponent } from '../spartacus/features/custom-routing/static-page/static-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MediaModule } from '@spartacus/storefront';

@NgModule({
  declarations: [
    CustomProductIntroComponent,
    CustomProductSummaryComponent,
    CustomComponentComponent,
    ReviewModelComponent,
    CustomsectionComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    FormErrorsModule,
    CommonModule,
    StarRatingModule,
    IconModule,
    MatTabsModule,
    MediaModule,
    NgbModule,
    ConfigModule.withConfig({
      cmsComponents: {
        PageTitleComponent: {
          component: CustomComponentComponent,
        },
        ProductIntroComponent: {
          component: CustomProductIntroComponent,
        },
        ProductSummaryComponent: {
          component: CustomProductSummaryComponent,
        },
        ProductCarouselComponent: {
          component: CustomsectionComponent,
        },
        RegisterCustomerComponent: {
          component: CustomregisterComponent,
        },
        FooterNavigationComponent: {
          component: StaticPageComponent,
        },
        // ExportOrderEntriesComponent: {
        //   component: CustomsectionComponent,
        // },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      layoutSlots: {
        LandingPage2Template: {
          slots: ['Section1', 'Section2A', 'Section2B', 'Section2c', 'Section3', 'Section4', 'Section5'],
        },
      },
    } as LayoutConfig),

    ConfigModule.withConfig({
      layoutSlots: {
        CartPageTemplate: {
          slots: ['EmptyCartMiddleContent', 'BottomContentSlot', 'TopContent', 'CenterRightContentSlot', 'CenterLeftContentSlot', 'HeaderLinks'],
        },
      },

    } as LayoutConfig),

    ConfigModule.withConfig({
      layoutSlots: {
        ProductDetailsPageTemplate: {
          slots: ['Summary','Tabs'],
        },
      },

    } as LayoutConfig),
  
    // ConfigModule.withConfig({
    //   layoutSlots: {
    //     ProductListPageTemplate: {
    //       slots: ['ProductLeftRefinements','ProductListSlot'],
    //     },
    //   },

    // } as LayoutConfig),
  
  ],

  providers: [
    LaunchDialogService,
    provideConfig({
      launch: {
        // Define configuration for the 'customDialog' key
        customDialog: {
          inline: true,
          component: ReviewModelComponent, // Component to launch
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
})
export class CustomPdpModule { }
