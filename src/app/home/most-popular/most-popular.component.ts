import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { ChildBaseComponent } from 'src/app/child-base.component.';
import { HomeService } from 'src/services/home.services';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MostPopularComponent extends ChildBaseComponent implements OnInit {

  public DataSource: any;

  constructor(private homeService:HomeService) {
    super();
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