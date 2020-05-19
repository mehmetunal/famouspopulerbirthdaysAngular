import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.services';
import { ChildBaseComponent } from 'src/app/child-base.component.';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-profession',
    templateUrl: './profession.component.html',
    styleUrls: ['./profession.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ProfessionComponent extends ChildBaseComponent implements OnInit {
    public DataSource: any;
    public title: string = "Professions";
    public pageSize: number = 48;
    constructor(private service: CategoryService,
        private titleService: Title) {
        super();
        this.titleService.setTitle(`${this.title} - Famous Populer Birthdays`);
    }

    ngOnInit(): void {
        this.init();
    }

    public init(): void {
        this.DataLoad(0);
    }

    public DataLoad(page: number): void {
        this.service.GETProfessionGrup(page, this.pageSize).subscribe((res: any) => {
            this.DataSource = res;
        })
    }
}
