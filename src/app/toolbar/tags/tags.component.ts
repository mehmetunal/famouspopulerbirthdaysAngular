import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/home.services';

@Component({
    selector: 'app-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.css'],
    encapsulation: ViewEncapsulation.None
  })
  export class TagsComponent  implements OnInit {
  
    public DataSource: any;

    constructor(private homeService: HomeService) {
  
    }
  
    ngOnInit(): void {
      this.init();
    }
  
    public init(): void {
      this.homeService.GETTagsCategpri(1, 50).subscribe((res: Array<any>) => {
        this.DataSource = res;
      })
    }
  }