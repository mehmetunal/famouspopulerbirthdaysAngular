import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.services';
import { HomeService } from 'src/services/home.services';
import { BaseComponent } from 'src/app/base.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-popular',
    templateUrl: './popular.component.html',
    styleUrls: ['./popular.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PopularComponent extends BaseComponent implements OnInit {
    public DataSource: any;
    public page: number = 0;
    public title: string = "Most Popular";
    constructor() {
        super();
    }

    ngOnInit(): void {
        this.init();
    }

    public init(): void {
        this.homeService.GETMostPopularDistinct(this.page, 112).subscribe((res: any) => {
            this.DataSource = res;
        })
    }
}
