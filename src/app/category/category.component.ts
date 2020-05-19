import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../base.component';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CategoryComponent extends BaseComponent implements OnInit {
    public DataSource: any;
    public title: string;
    private url: string;

    constructor(private route: ActivatedRoute) {
        super();
        this.route.params.subscribe(routeParams => {
            this.url = routeParams["url"];
            this.init()
        });
    }

    ngOnInit(): void {

    }

    public init(): void {
        this.homeService.GETGroupByUrl(1, 100, this.url).subscribe((res: Array<any>) => {
            this.DataSource = res;
            if (res) {
                this.title = res[0].pop_grup;
                this.seoModel.title = this.title;
                this.seoInit();
            }
        })
    }
}
