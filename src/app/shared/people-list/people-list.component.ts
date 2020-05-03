import { ViewEncapsulation, Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.component.html',
    styleUrls: ['./people-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PeopleListComponent implements OnInit {

    private _dataSource: any;
    @Input()
    set DataSource(dataSource: any) {
        this._dataSource = dataSource;
    }
    get DataSource(): any { return this._dataSource; }


    private _moreAllURL: string;
    @Input()
    set MoreAllURL(moreAllURL: string) {
        this._moreAllURL = moreAllURL;
    }
    get MoreAllURL(): string { return this._moreAllURL; }

    constructor() {
    }

    ngOnInit(): void {
    }

}
