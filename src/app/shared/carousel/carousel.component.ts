import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {
    
    @Input()
    public DataSource: any;

    constructor(config: NgbCarouselConfig) {
        config.interval = 4000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    ngOnInit() {
    }
}  