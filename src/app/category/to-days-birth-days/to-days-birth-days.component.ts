import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.services';
import { HomeService } from 'src/services/home.services';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';

@Component({
    selector: 'app-to-days-birth-days',
    templateUrl: './to-days-birth-days.component.html',
    styleUrls: ['./to-days-birth-days.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ToDaysBirthDaysComponent extends BaseComponent implements OnInit {

    public DataSource: any;

    constructor(private route: ActivatedRoute, private service: CategoryService) {
        super();
    }

    ngOnInit(): void {
        this.init();
    }

    public init(): void {
        this.service.GETTodayTop1000(0).subscribe((res: any) => {
            this.DataSource = res;
        })
    }
}
