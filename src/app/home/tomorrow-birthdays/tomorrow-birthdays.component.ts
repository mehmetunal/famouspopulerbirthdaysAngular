import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/home.services';

@Component({
  selector: 'app-tomorrow-birthdays',
  templateUrl: './tomorrow-birthdays.component.html',
  styleUrls: ['./tomorrow-birthdays.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TomorrowBirthdaysComponent implements OnInit {

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