import { ViewEncapsulation, Component, OnInit, Input } from '@angular/core';
import { ChildBaseComponent } from 'src/app/child-base.component.';

@Component({
    selector: 'app-people-list-big',
    templateUrl: './people-list-big.component.html',
    styleUrls: ['./people-list-big.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PeopleListBigComponent extends ChildBaseComponent implements OnInit {

    private _dataSource: any;
    @Input()
    set DataSource(dataSource: any) {
        this._dataSource = dataSource;
    }
    get DataSource(): any { return this._dataSource; }


    private _title: string;
    @Input()
    set title(title: string) {
        this._title = title;
    }
    get title(): string { return this._title; }

    constructor() {
         super();
    }

    ngOnInit(): void {
    }

}
