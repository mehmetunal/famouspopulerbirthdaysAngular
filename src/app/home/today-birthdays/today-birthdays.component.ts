import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/home.services';

@Component({
  selector: 'app-today-birthdays',
  templateUrl: './today-birthdays.component.html',
  styleUrls: ['./today-birthdays.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodayBirthdaysComponent implements OnInit {

  public FirstDataSource: any;
  public DataSource: any;

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
    this.init();
  }

  public init(): void {
    this.homeService.GETToDaysBirthdays(0, 9).subscribe((res: Array<any>) => {
      this.FirstDataSource = res[0];
      this.DataSource = res.filter(f => f.id != this.FirstDataSource.id);
    })
  }
}