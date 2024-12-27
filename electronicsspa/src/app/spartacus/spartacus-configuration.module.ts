import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";


export const translationOverwrites = {
  en: {
    common: {
      searchBox: {
        placeholder: "Search",
      }
    },
    userAccount: {
      miniLogin: {
        signInRegister: "Sign In / Register",
      }
    }
  },

  de: {
    common: {
      searchBox: {
        placeholder: "Hier können Sie suchen...",
      }
    },

    userAccount: {
      miniLogin: {
        signInRegister: "Anmelden / Registrieren",
      }
    }
  },
};

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://localhost:9002',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {},
  }),

  provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }),

  provideConfig(<I18nConfig>{
    i18n: {
      resources: translationOverwrites,
    },
  }),


  provideConfig(<FeaturesConfig>{
    features: {
      level: '2211.20'
    }
  })]
})
export class SpartacusConfigurationModule { }

export interface TranslationResources {
  [lang: string]: {
    [chunkName: string]: {
      [key: string]: any;
    };
  };
}





