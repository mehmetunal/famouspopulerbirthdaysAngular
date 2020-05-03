import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.services';
import { HomeService } from 'src/services/home.services';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';

@Component({
    selector: 'app-trending',
    templateUrl: './trending.component.html',
    styleUrls: ['./trending.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TrendingComponent extends BaseComponent implements OnInit {

    public DataSource: any;
    public title: string = "Trending";

    constructor(private service: CategoryService) {
        super();
    }

    ngOnInit(): void {
        this.init();
    }

    public init(): void {
        this.service.GETTrending(0, 120).subscribe((res: any) => {
            this.DataSource = res;
        })
    }
}
