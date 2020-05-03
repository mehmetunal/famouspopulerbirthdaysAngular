import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.services';
import { HomeService } from 'src/services/home.services';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';

@Component({
    selector: 'app-birth-place',
    templateUrl: './birth-place.component.html',
    styleUrls: ['./birth-place.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class BirthPlaceComponent extends BaseComponent  implements OnInit {

    public DataSource: any;
    private url: string;

    constructor(private route: ActivatedRoute,private service: CategoryService) {
        super();
        this.route.params.subscribe(routeParams => {
            this.url = routeParams["url"];
            this.init()
        });
    }

    ngOnInit(): void {
        
    }

    public init(): void {
        this.service.GETBirthPlace(this.url,0).subscribe((res:any)=>{
            this.DataSource = res;
        })
    }
}
