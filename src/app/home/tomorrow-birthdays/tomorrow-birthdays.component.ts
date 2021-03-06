import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { ChildBaseComponent } from 'src/app/child-base.component.';
import { HomeService } from 'src/services/home.services';

@Component({
  selector: 'app-tomorrow-birthdays',
  templateUrl: './tomorrow-birthdays.component.html',
  styleUrls: ['./tomorrow-birthdays.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TomorrowBirthdaysComponent extends ChildBaseComponent implements OnInit {

  public DataSource: any;

  constructor(private homeService: HomeService) {
    super();
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