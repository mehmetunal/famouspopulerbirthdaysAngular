import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.services';
import { HomeService } from 'src/services/home.services';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-age',
    templateUrl: './age.component.html',
    styleUrls: ['./age.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AgeComponent extends BaseComponent implements OnInit {

    public DataSource: any;
    private url: string;

    constructor(
        private route: ActivatedRoute, 
        private service: CategoryService) {
        super();
        this.route.params.subscribe(routeParams => {
            this.url = routeParams["url"];
            this.init()
        });
    }

    ngOnInit(): void {

    }

    public init(): void {
        this.service.GETAge(this.url, 0).subscribe((res: any) => {
            this.DataSource = res;
            this.seoModel.title = this.DataSource?.title;
            this.seoInit();
        })
    }
}
