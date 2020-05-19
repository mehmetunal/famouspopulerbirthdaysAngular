import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/home.services';
import { AppInjector } from 'src/services/app-injector.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SeoService } from 'src/services/seo.services';
import { SeoModel } from 'src/models/seo.model';


@Component({
    template: ''
})
export class BaseComponent {

    protected homeService: HomeService;
    protected seoService: SeoService;
    protected deviceService: DeviceDetectorService
    public isDevice: boolean = false;
    public seoModel: SeoModel;
    protected deviceInfo = null;

    constructor() {
        const injector = AppInjector.getInjector();
        this.homeService = injector.get(HomeService);
        this.seoService = injector.get(SeoService);
        this.homeService.RandomSub.next(true);
        this.deviceService = injector.get(DeviceDetectorService);
        this.deviceInfo = this.deviceService.getDeviceInfo();
        this.isDevice = this.deviceService.isDesktop();
        this.seoModel = new SeoModel();
    }

    public seoInit(): void {
        this.seoService.generateTags(this.seoModel);
    }

}
