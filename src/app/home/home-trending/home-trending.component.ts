import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { ChildBaseComponent } from 'src/app/child-base.component.';
import { CategoryService } from 'src/services/category.services';

@Component({
  selector: 'app-home-trending',
  templateUrl: './home-trending.component.html',
  styleUrls: ['./home-trending.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeTrendingComponent extends ChildBaseComponent implements OnInit {

  public DataSource: any;

  constructor(private service: CategoryService) {
    super();
  }

  ngOnInit(): void {
    this.init();
  }

  public init(): void {
    this.service.GETTrending(0, 3).subscribe((res: any) => {
      this.DataSource = res;
    })
  }
}