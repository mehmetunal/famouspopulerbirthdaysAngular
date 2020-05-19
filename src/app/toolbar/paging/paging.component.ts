import { ViewEncapsulation, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-paging',
    templateUrl: './paging.component.html',
    styleUrls: ['./paging.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PagingComponent implements OnInit {

    @Input()
    public Prev: number = null;

    @Input()
    public Next: number = null;

    @Output() onClick = new EventEmitter()
    
    constructor() {

    }

    ngOnInit(): void {

    }

}