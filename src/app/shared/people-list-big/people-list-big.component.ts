import { ViewEncapsulation, Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
    selector: 'app-people-list-big',
    templateUrl: './people-list-big.component.html',
    styleUrls: ['./people-list-big.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PeopleListBigComponent /*extends BaseComponent*/ implements OnInit {
    //people-img-mobile
    //public imgClass = "people-big-img";

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
        // super();
        // if (!this.isDevice) {
        //     // this.imgClass = "people-big-img-mobile";
        //     this.imgClass = "";
        // }
    }

    ngOnInit(): void {
    }

}
