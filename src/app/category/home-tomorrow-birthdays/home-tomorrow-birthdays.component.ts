import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.services';
import { BaseComponent } from 'src/app/base.component';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home-tomorrow-birthdays',
    templateUrl: './home-tomorrow-birthdays.component.html',
    styleUrls: ['./home-tomorrow-birthdays.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HomeTomorrowBirthdaysComponent extends BaseComponent implements OnInit {
    public DataSource: any;
    public page: number = 0;
    public title: string = "Tomorrow's Birthdays";
    constructor(private service: CategoryService) {
        super();
        this.seoModel.title = this.title;
        this.seoInit();
    }

    ngOnInit(): void {
        this.init();
    }

    public init(): void {
        this.service.GETVW_BirthdaysTop1000(this.page).subscribe((res: any) => {
            this.DataSource = res;
        })
    }
}
