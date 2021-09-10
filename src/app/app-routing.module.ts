import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { CategoryComponent } from './category/category.component';
import { ProfessionComponent } from './category/profession/profession.component';
import { PopularComponent } from './category/popular/popular.component';
import { PopularDetailComponent } from './category/popular/popular-detail/popular-detail.component';
import { AgeComponent } from './category/age/age.component';
import { BirthPlaceComponent } from './category/birth-place/birth-place.component';
import { SunSignComponent } from './category/sun-sign/sun-sign.component';
import { ToDaysBirthDaysComponent } from './category/to-days-birth-days/to-days-birth-days.component';
import { HomeMostPopularComponent } from './category/home-most-popular/home-most-popular.component';
import { TomorrowBirthdaysComponent } from './home/tomorrow-birthdays/tomorrow-birthdays.component';
import { HomeTomorrowBirthdaysComponent } from './category/home-tomorrow-birthdays/home-tomorrow-birthdays.component';
import { HomeAgeTopLastComponent } from './category/age-top-last/home-age-top-last.component';
import { TrendingComponent } from './category/trending/trending.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "people/:url", component: PeopleDetailComponent },
  { path: "random", component: PeopleDetailComponent },
  { path: "popular", component: PopularComponent },
  { path: "most-populary", component: HomeMostPopularComponent },
  { path: "popularity/:url", component: PopularDetailComponent },
  { path: "profession", component: ProfessionComponent },
  { path: "profession/:url", component: CategoryComponent },
  { path: "job/:url", component: CategoryComponent },
  { path: "age/:url", component: AgeComponent },
  { path: "sun-sign/:url", component: SunSignComponent },
  { path: "brith-placelink/:url", component: BirthPlaceComponent },
  { path: "to-days-birth-days", component: ToDaysBirthDaysComponent },
  { path: "tomorrow-birthdays", component: HomeTomorrowBirthdaysComponent },
  { path: "age-top-last", component: HomeAgeTopLastComponent },
  { path: "trending", component: TrendingComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
