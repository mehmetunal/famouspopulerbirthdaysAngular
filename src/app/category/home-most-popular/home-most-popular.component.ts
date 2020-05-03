import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/home.services';
import { CategoryService } from 'src/services/category.services';
import { BaseComponent } from 'src/app/base.component';

@Component({
    selector: 'app-home-most-popular',
    templateUrl: './home-most-popular.component.html',
    styleUrls: ['./home-most-popular.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HomeMostPopularComponent extends BaseComponent implements OnInit {
    public DataSource: any;
    public page: number = 0;
    public title: string = "Most Popular";
    constructor(private service: CategoryService) {
        super();
    }

    ngOnInit(): void {
        this.init();
    }

    public init(): void {
        this.service.GETMostPopulary(this.page).subscribe((res: any) => {
            this.DataSource = res;
        })
    }
}
