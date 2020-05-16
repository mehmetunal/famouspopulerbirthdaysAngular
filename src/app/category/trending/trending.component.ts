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

    constructor(private service: CategoryService,
        private titleService: Title) {
        super();
        this.titleService.setTitle(`${this.title} - Famous Populer Birthdays`);
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
