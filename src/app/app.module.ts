import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './toolbar/header/header.component';
import { FootherComponent } from './toolbar/foother/foother.component';
import { TagsComponent } from './toolbar/tags/tags.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeService } from 'src/services/home.services';
import { TodayBirthdaysComponent } from './home/today-birthdays/today-birthdays.component';
import { MostPopularComponent } from './home/most-popular/most-popular.component';
import { TomorrowBirthdaysComponent } from './home/tomorrow-birthdays/tomorrow-birthdays.component';
import { PopularByAgeComponent } from './home/popular-by-age/popular-by-age.component';
import { FirstImagesPipe } from 'src/pipe/firstImagesPipe.pipe';
import { ImagePreloadDirective } from 'src/directive/imagePreloadDirective.directive';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleListComponent } from './shared/people-list/people-list.component';
import { SearchComponent } from './toolbar/search/search.component';
import { CategoryComponent } from './category/category.component';
import { ProfessionComponent } from './category/profession/profession.component';
import { CategoryService } from 'src/services/category.services';
import { PopularComponent } from './category/popular/popular.component';
import { PopularDetailComponent } from './category/popular/popular-detail/popular-detail.component';
import { AgeComponent } from './category/age/age.component';
import { BirthPlaceComponent } from './category/birth-place/birth-place.component';
import { SunSignComponent } from './category/sun-sign/sun-sign.component';
import { ToDaysBirthDaysComponent } from './category/to-days-birth-days/to-days-birth-days.component';
import { HomeMostPopularComponent } from './category/home-most-popular/home-most-popular.component';
import { HomeTomorrowBirthdaysComponent } from './category/home-tomorrow-birthdays/home-tomorrow-birthdays.component';
import { HomeAgeTopLastComponent } from './category/age-top-last/home-age-top-last.component';
import { PeopleListBigComponent } from './shared/people-list-big/people-list-big.component';
import { TrendingComponent } from './category/trending/trending.component';
import { BaseComponent } from './base.component';
import { AppInjector } from 'src/services/app-injector.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { LoaderService } from 'src/services/loader-service.service';
import { LoaderInterceptor } from 'src/interceptor/loader.interceptors';
import { LoadingComponent } from './shared/loader/loading.component';
import { ThousandSuffixesPipe } from 'src/pipe/thousandSuffixesPipe.pipe';
import { OrderByPipe } from 'src/pipe/orderByPipe.pipe';
import { HttpErrorInterceptor } from 'src/interceptor/http-error-interceptor.interceptors';
import { MobileHeaderComponent } from './toolbar/header/mobile/mobile-header.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { HomeTrendingComponent } from './home/home-trending/home-trending.component';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FootherComponent,
    SearchComponent,
    TagsComponent,
    TodayBirthdaysComponent,
    MostPopularComponent,
    TomorrowBirthdaysComponent,
    PopularByAgeComponent,
    PeopleDetailComponent,
    FirstImagesPipe,
    ImagePreloadDirective,
    PeopleListComponent,
    CategoryComponent,
    PopularComponent,
    ProfessionComponent,
    PopularDetailComponent,
    AgeComponent,
    BirthPlaceComponent,
    SunSignComponent,
    ToDaysBirthDaysComponent,
    HomeMostPopularComponent,
    HomeTomorrowBirthdaysComponent,
    HomeAgeTopLastComponent,
    PeopleListBigComponent,
    TrendingComponent,
    BaseComponent,
    CarouselComponent,
    HomeTrendingComponent,
    LoadingComponent,
    ThousandSuffixesPipe,
    OrderByPipe,
    MobileHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    DeviceDetectorModule.forRoot(),
    AdsenseModule.forRoot()
  ],
  exports: [CarouselComponent],
  providers: [HomeService, CategoryService, AppInjector, LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    }],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    AppInjector.setInjector(injector);
  }
}
