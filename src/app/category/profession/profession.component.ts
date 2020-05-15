import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.services';
import { ChildBaseComponent } from 'src/app/child-base.component.';

@Component({
    selector: 'app-profession',
    templateUrl: './profession.component.html',
    styleUrls: ['./profession.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ProfessionComponent extends ChildBaseComponent implements OnInit {
    public DataSource: any;
    public title: string = "Professions";
    constructor(private service: CategoryService) {
        super();
    }

    ngOnInit(): void {
        this.init();
    }

    public init(): void {
        this.service.GETProfessionGrup().subscribe((res: any) => {
            this.DataSource = res;
        })
    }
}
