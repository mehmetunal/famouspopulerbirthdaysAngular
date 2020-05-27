import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoModel } from 'src/models/seo.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SeoService {

    constructor(private meta: Meta, private title: Title) {}
    generateTags(config: SeoModel) {

        config.title = `${config.title} - Famous Popular Birthdays`;

        config.image = `https://www.famouspopulerbirthdays.com/upload/${config.image}`;

        this.title.setTitle(config.title);

        this.meta.updateTag({ name: 'description', content: config.description });
        this.meta.updateTag({ name: 'keywords', content: config.keywords });

        this.meta.updateTag({ name: 'twitter:card', content: config.card });
        this.meta.updateTag({ name: 'twitter:site', content: config.tw_site });
        this.meta.updateTag({ name: 'twitter:title', content: config.title });
        this.meta.updateTag({ name: 'twitter:description', content: config.description });
        this.meta.updateTag({ name: 'twitter:image', content: config.image });

        this.meta.updateTag({ property: 'og:type', content: config.type });
        this.meta.updateTag({ property: 'og:site_name', content: config.site_name });
        this.meta.updateTag({ property: 'og:title', content: config.title });
        this.meta.updateTag({ property: 'og:description', content: config.description });
        this.meta.updateTag({ property: 'og:image', content: config.image });
        this.meta.updateTag({ property: 'og:url', content: config.pageUrl });
        console.table(config);

    }


}
