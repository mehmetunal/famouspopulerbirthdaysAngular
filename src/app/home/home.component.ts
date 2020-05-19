import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';
import { SeoModel } from 'src/models/seo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent extends BaseComponent {
  constructor() {
    super();
    this.seoInit();
  }
}