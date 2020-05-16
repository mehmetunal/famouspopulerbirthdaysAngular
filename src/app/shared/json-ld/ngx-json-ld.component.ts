import { Component, OnInit, Output, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'ngx-json-ld',
    template: '<div [innerHTML]="jsonLD"></div>',
})
export class NgxJsonLdComponent {
    public jsonLD: SafeHtml;
    @Input()
    set json(prm: any) {
        if (!prm) return;
        this.jsonLD = this.getSafeHTML(prm);
    }
    constructor(private sanitizer: DomSanitizer) {
    }
    getSafeHTML(value: {}) {
        const json = JSON.stringify(value, null, 2);
        const html = `<script type="application/ld+json">${json}</script>`;
        // Inject to inner html without Angular stripping out content
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}