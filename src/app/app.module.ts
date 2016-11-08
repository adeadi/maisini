import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListCategoryModal } from '../pages/list-category-modal/list-category-modal';
import { ProductList } from '../pages/product-list/product-list';
import { CreateProduct } from '../pages/create-product/create-product';
import { ProductDetails } from '../pages/product-details/product-details';
import { RangeLocationModal } from '../pages/range-location-modal/range-location-modal';
import { ProductLocation } from '../pages/product-location/product-location';
import { ApiService } from '../providers/api-service';
import { GoogleMaps } from '../providers/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListCategoryModal,
    ProductList,
    CreateProduct,
    ProductDetails,
    RangeLocationModal,
    ProductLocation
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListCategoryModal,
    ProductList,
    CreateProduct,
    ProductDetails,
    RangeLocationModal,
    ProductLocation
  ],
  providers: [GoogleMaps]
})
export class AppModule {}
