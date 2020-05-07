import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/home.services';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MobileHeaderComponent implements OnInit {
  public randomURL: string;
  constructor(private services: HomeService) {
  }

  ngOnInit(): void {
    this.services.RandomSub.subscribe(s => {
      this.services.GETRandom().subscribe((res: any) => {
        this.randomURL = res;
      })
    })
  }
}