import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.services';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';

@Component({
    selector: 'app-sun-sign',
    templateUrl: './sun-sign.component.html',
    styleUrls: ['./sun-sign.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SunSignComponent extends BaseComponent implements OnInit {

    public DataSource: any;
    private url: string;

    constructor(private route: ActivatedRoute, private service: CategoryService) {
        super();
        this.route.params.subscribe(routeParams => {
            this.url = routeParams["url"];
            this.init()
        });
    }

    ngOnInit(): void {

    }

    public init(): void {
        this.service.GETSunSign(this.url, 0).subscribe((res: any) => {
            this.DataSource = res;
        })
    }
}
