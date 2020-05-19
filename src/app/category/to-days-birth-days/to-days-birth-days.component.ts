import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.services';
import { BaseComponent } from 'src/app/base.component';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-to-days-birth-days',
    templateUrl: './to-days-birth-days.component.html',
    styleUrls: ['./to-days-birth-days.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ToDaysBirthDaysComponent extends BaseComponent implements OnInit {

    public DataSource: any;

    constructor(private service: CategoryService) {
        super();
    }

    ngOnInit(): void {
        this.init();
    }

    public init(): void {
        this.service.GETTodayTop1000(0).subscribe((res: any) => {
            this.DataSource = res;
            this.seoModel.title = this.DataSource?.title;
            this.seoInit();
        })
    }
}
