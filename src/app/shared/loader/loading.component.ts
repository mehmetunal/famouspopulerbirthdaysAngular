import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/services/loader-service.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
    loading: boolean;
    constructor(private loaderService: LoaderService) {
        this.loaderService.isLoading.subscribe((v) => {
            this.loading = v;
            setTimeout(function(){
                document.body.removeAttribute('style');
            },1000)
        });
    }
    ngOnInit() {
    }
}