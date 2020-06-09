import { ViewEncapsulation, Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BaseComponent } from '../base.component';

@Component({
    selector: 'app-people-detail',
    templateUrl: './people-detail.component.html',
    styleUrls: ['./people-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PeopleDetailComponent extends BaseComponent implements OnInit, AfterViewInit {

    public jsonLD: any;
    public DataSource: any;
    public Images: Array<string> = new Array<string>();
    public AgeDataSource: any;
    public JobDataSource: any;
    public SunSignDataSource: any;
    public BirthPlaceDataSource: any;
    public FamousPopularityDataSource: any;
    public enPopuler: any;
    private url: string;
    public hastagURL: string;
    public hastag: string = "";
    private random: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient
    ) {
        super();
        this.route.params.subscribe(routeParams => {
            this.url = routeParams["url"];
            this.init()
            if (this.random == false) {
                this.homeService.RandomSub.next(true);
            }
        });
        this.random = false;
    }
    ngAfterViewInit(): void {
        setTimeout(() => {
            try {
                (window["adsbygoogle"] = window["adsbygoogle"] || []).push({});
            } catch (e) {
                console.error(e);
            }
        }, 2000);
    }

    ngOnInit(): void {
    }
    public init(): void {
        this.homeService.GETDetail(this.url).subscribe((res: any) => {
            this.DataLoad(res);
        })
    }

    private DataLoad(res: any): void {
        this.DataSource = res.data;
        this.seoModel.title = this.DataSource?.peo_name;
        this.seoModel.pageUrl = location.href;
        this.seoModel.image = res.images[0];
        this.jsonLDLoad();
        this.Images = res.images;
        this.seoInit();
        this.InstagramHashTag(res.data.peo_name);
        this.GETAgeList(res.data.yas, res.data.id);
        this.GETJob(res.data.peo_title, res.data.id);
        this.GETSunSign(res.data.sun_sign, res.data.id);
        this.GETBirthPlace(res.data.peo_birthplace, res.data.id);
        this.GETFamousPopularityById(res.data.id);
    }


    private jsonLDLoad() {
        this.jsonLD = {
            "@context": "https://schema.org",
            "@type": "Person",
            "image": this.Images[0],
            "jobTitle": this.DataSource?.title,
            "name": this.DataSource?.peo_name,
            "birthPlace": this.DataSource?.peo_birthplace,
            "birthDate": this.DataSource?.peo_birthday.toString("mediumDate"),
            "url": "https://www.famouspopulerbirthdays.com/people/" + this.DataSource?.link
        }
    }

    private InstagramHashTag(key: string): void {
        if (key === undefined || key === null)
            return;
        key = key.replace(" ", "").toLowerCase();
        this.hastagURL = key;
        this.http.get(`https://www.instagram.com/explore/tags/${key}/?__a=1`)
            .subscribe((s: any) => {
                this.hastag += s.graphql.hashtag.edge_hashtag_to_media.count;
            })

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
            let orderBy = res.sort((a, b) => b["pop_rank"] > a["pop_rank"] ? 1 : b["pop_rank"] === a["pop_rank"] ? 0 : -1);
            this.enPopuler = orderBy[0];
        })
    }
}
