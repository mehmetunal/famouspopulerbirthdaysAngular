import { Component } from '@angular/core';
import { AppInjector } from 'src/services/app-injector.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
    template: ''
})
export class ChildBaseComponent  {

    protected deviceService: DeviceDetectorService
    public isDevice: boolean = false;
    protected deviceInfo = null;

    constructor() {
        const injector = AppInjector.getInjector();
        this.deviceService = injector.get(DeviceDetectorService);
        this.deviceInfo = this.deviceService.getDeviceInfo();
        this.isDevice = this.deviceService.isDesktop();
    }
}
