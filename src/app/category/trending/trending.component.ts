import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.services';
import { BaseComponent } from 'src/app/base.component';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-trending',
    templateUrl: './trending.component.html',
    styleUrls: ['./trending.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TrendingComponent extends BaseComponent implements OnInit {

    public DataSource: any;
    public title: string = "Trending";
    public pageSize: number = 120;

    constructor(private service: CategoryService) {
        super();
        this.seoModel.title = this.title;
        this.seoInit();
    }

    ngOnInit(): void {
        this.init();
    }

    public init(): void {
        this.DataLoad(0);
    }

    public DataLoad(page: number) {
        this.service.GETTrending(page, this.pageSize).subscribe((res: any) => {
            this.DataSource = res;
        })
    }
}