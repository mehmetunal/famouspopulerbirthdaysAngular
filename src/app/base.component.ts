import { Component } from '@angular/core';
import { HomeService } from 'src/services/home.services';
import { AppInjector } from 'src/services/app-injector.service';

@Component({
    template: ''
})
export class BaseComponent {

    protected homeService: HomeService;
    constructor() {
        const injector = AppInjector.getInjector();
        this.homeService = injector.get(HomeService);
        this.homeService.RandomSub.next(true);
    }
}
