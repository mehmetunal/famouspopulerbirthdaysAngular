import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.services';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';

@Component({
    selector: 'app-popular-detail',
    templateUrl: './popular-detail.component.html',
    styleUrls: ['./popular-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PopularDetailComponent  extends BaseComponent  implements OnInit {
    public DataSource: any;
    public page: number = 0;
    public url: string;
    constructor(private route: ActivatedRoute, private service: CategoryService) {
      super();
        this.route.params.subscribe(routeParams => {
            this.url = routeParams["url"];
            this.init()
        });
    }

    ngOnInit(): void {
    }

    public init(): void {
        this.service.GETPopularityCat(this.url, this.page).subscribe((res: any) => {
            this.DataSource = res;
        })
    }
}
