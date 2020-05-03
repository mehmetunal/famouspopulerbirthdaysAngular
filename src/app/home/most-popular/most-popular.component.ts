import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/home.services';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MostPopularComponent implements OnInit {

  public DataSource: any;

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
    this.init();
  }

  public init(): void {
    this.homeService.GETMostPopular(0, 3).subscribe((res: Array<any>) => {
      this.DataSource = res;
    })
  }
}