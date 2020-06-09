import { Component, Renderer2, RendererFactory2 } from '@angular/core';
import { AppInjector } from 'src/services/app-injector.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SeoModel } from 'src/models/seo.model';
import { SeoService } from 'src/services/seo.services';

@Component({
    template: ''
})
export class ChildBaseComponent  {

    protected deviceService: DeviceDetectorService
    public isDevice: boolean = false;
    protected deviceInfo = null;
    public seoModel: SeoModel;
    protected seoService: SeoService;

    constructor() {
        const injector = AppInjector.getInjector();
        this.deviceService = injector.get(DeviceDetectorService);
        this.seoService = injector.get(SeoService);
        this.deviceInfo = this.deviceService.getDeviceInfo();
        this.isDevice = this.deviceService.isDesktop();
        this.seoModel = new SeoModel();
    }

    public seoInit(): void {
        this.seoService.generateTags(this.seoModel);
        this.seoService.hrefLangElement(this.seoModel.pageUrl);
    }
}
