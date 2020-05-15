import { Component } from '@angular/core';
import { HomeService } from 'src/services/home.services';
import { AppInjector } from 'src/services/app-injector.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    template: ''
})
export class BaseComponent {

    protected homeService: HomeService;
    protected deviceService: DeviceDetectorService
    public isDevice: boolean = false;
    protected deviceInfo = null;

    constructor() {
        const injector = AppInjector.getInjector();
        this.homeService = injector.get(HomeService);
        this.homeService.RandomSub.next(true);
        this.deviceService = injector.get(DeviceDetectorService);
        this.deviceInfo = this.deviceService.getDeviceInfo();
        this.isDevice = this.deviceService.isDesktop();
    }
}
