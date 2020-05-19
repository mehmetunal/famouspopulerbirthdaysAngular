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

    constructor(private service: CategoryService,
        private titleService: Title) {
        super();
        this.titleService.setTitle(`${this.title} - Famous Populer Birthdays`);
    }

    ngOnInit(): void {
        this.init();
    }

    public init(): void {
        this.DataLoad(0);
    }

    public DataLoad(page: number) {
        debugger;
        this.service.GETTrending(page, this.pageSize).subscribe((res: any) => {
            this.DataSource = res;
        })
    }
}