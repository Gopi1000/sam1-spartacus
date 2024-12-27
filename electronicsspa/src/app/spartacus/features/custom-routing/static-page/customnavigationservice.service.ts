import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomnavigationserviceService {


  private apiUrl = 'https://localhost:9002/occ/v2/electronics-spa/cms/components?fields=DEFAULT&currentPage=0&pageSize=26&componentIds=AllBrandsCategoryLink%2CCanonBrandCategoryLink%2CSonyBrandCategoryLink%2CKodakBrandCategoryLink%2CSamsungBrandCategoryLink%2CToshibaBrandCategoryLink%2CFujifilmBrandCategoryLink%2CKingstonBrandCategoryLink%2CIciduBrandCategoryLink%2CTDKBrandCategoryLink%2CSweexBrandCategoryLink%2CDigitalCamerasCategoryLink%2CDigitalCompactsCategoryLink%2CDigitalSLRCategoryLink%2CFilmCamerasCategoryLink%2CHandheldCamcordersCategoryLink%2CWebcamsCategoryLink%2CCameraAccessoriesCategoryLink%2CCamerasFlashesCategoryLink%2CTripodsCategoryLink%2CCameraLensesCategoryLink%2CFlashMemoryCategoryLink%2CPowerSuppliesCategoryLink%2CColourFilmsCategoryLink%2CBlackAndWhiteFilmsCategoryLink%2CBlankVideotapesCategoryLink&lang=en&curr=USD';

  constructor(private http: HttpClient) { }

  getComponents(): Observable<any> {
    const params = new HttpParams()
      .set('fields', 'DEFAULT')
      .set('currentPage', '0')
      .set('pageSize', '26')
      .set('component', 'AllBrandsCategoryLink,CanonBrandCategoryLink,SonyBrandCategoryLink,KodakBrandCategoryLink,SamsungBrandCategoryLink,ToshibaBrandCategoryLink,FujifilmBrandCategoryLink,KingstonBrandCategoryLink,IciduBrandCategoryLink,TDKBrandCategoryLink,SweexBrandCategoryLink,DigitalCamerasCategoryLink,DigitalCompactsCategoryLink,DigitalSLRCategoryLink,FilmCamerasCategoryLink,HandheldCamcordersCategoryLink,WebcamsCategoryLink,CameraAccessoriesCategoryLink,CamerasFlashesCategoryLink,TripodsCategoryLink,CameraLensesCategoryLink,FlashMemoryCategoryLink,PowerSuppliesCategoryLink,ColourFilmsCategoryLink,BlackAndWhiteFilmsCategoryLink,BlankVideotapesCategoryLink')
      .set('lang', 'en')
      .set('curr', 'USD');

    return this.http.get(this.apiUrl, { params });
  }

}
