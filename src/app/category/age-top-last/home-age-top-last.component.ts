import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/home.services';
import { CategoryService } from 'src/services/category.services';
import { BaseComponent } from 'src/app/base.component';

@Component({
    selector: 'app-home-age-top-last',
    templateUrl: './home-age-top-last.component.html',
    styleUrls: ['./home-age-top-last.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HomeAgeTopLastComponent extends BaseComponent implements OnInit {
    public DataSource: any;
    public page: number = 0;
    constructor(private service: CategoryService) {
        super();
    }

    ngOnInit(): void {
        this.init();
    }

    public init(): void {
        this.service.GETYearTopLast(this.page).subscribe((res: any) => {
            this.DataSource = res;
        })
    }
}
