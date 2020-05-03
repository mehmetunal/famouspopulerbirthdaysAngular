import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/home.services';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../base.component';

@Component({
    selector: 'app-people-detail',
    templateUrl: './people-detail.component.html',
    styleUrls: ['./people-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PeopleDetailComponent extends BaseComponent implements OnInit {

    public DataSource: any;
    public Images: Array<string> = new Array<string>();
    public AgeDataSource: any;
    public JobDataSource: any;
    public SunSignDataSource: any;
    public BirthPlaceDataSource: any;
    public FamousPopularityDataSource: any;

    public enPopuler: any;

    private url: string;

    constructor(private route: ActivatedRoute) {
        super();
        this.route.params.subscribe(routeParams => {
            this.url = routeParams["url"];
            if (this.url) {
                this.init()
            } else {
                this.onRandom();
            }

            this.homeService.RandomSub.next(true);
        });
    }

    ngOnInit(): void {
        // this.init();
    }

    public onRandom(): void {
        this.homeService.GETRandom().subscribe((res: any) => {
            this.DataLoad(res);
        })
    }

    public init(): void {
        this.homeService.GETDetail(this.url).subscribe((res: any) => {
            this.DataLoad(res);
        })
    }

    private DataLoad(res: any): void {
        this.DataSource = res.data;
        this.Images = res.images;
        this.GETAgeList(res.data.yas, res.data.id);
        this.GETJob(res.data.peo_title, res.data.id);
        this.GETSunSign(res.data.sun_sign, res.data.id);
        this.GETBirthPlace(res.data.peo_birthplace, res.data.id);
        this.GETFamousPopularityById(res.data.id);
    }


    private GETAgeList(yas: number, id: number): void {
        this.homeService.GETAgeList(yas, id).subscribe((res: any) => {
            this.AgeDataSource = res;
        })
    }

    private GETJob(peo_title: string, id: number): void {
        this.homeService.GETJob(peo_title, id).subscribe((res: any) => {
            this.JobDataSource = res;
        })
    }

    private GETSunSign(sunSign: string, id: number): void {
        this.homeService.GETSunSign(sunSign, id).subscribe((res: any) => {
            this.SunSignDataSource = res;
        })
    }

    private GETBirthPlace(peo_birthplace: string, id: number): void {
        this.homeService.GETBirthPlace(peo_birthplace, id).subscribe((res: any) => {
            this.BirthPlaceDataSource = res;
        })
    }

    private GETFamousPopularityById(id: number): void {
        this.homeService.GETFamousPopularityById(id).subscribe((res: Array<any>) => {
            this.FamousPopularityDataSource = res;
            this.enPopuler = res.sort(p => p.pop_rank)[0];
        })
    }
}
