import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/home.services';

@Component({
  selector: 'app-popular-by-age',
  templateUrl: './popular-by-age.component.html',
  styleUrls: ['./popular-by-age.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PopularByAgeComponent implements OnInit {

  public DataSource: any;

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
    this.init();
  }

  public init(): void {
    this.homeService.GETTomorrowsBirthdays(0, 3).subscribe((res: Array<any>) => {
      this.DataSource = res;
    })
  }
}