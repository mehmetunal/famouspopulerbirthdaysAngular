import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
    ElementRef,
    PLATFORM_ID,
  } from '@angular/core';
  import { isPlatformBrowser } from '@angular/common';
  
  import { ADSENSE_TOKEN, AdsenseConfig } from './adsense-config';
  
  @Component({
    selector: 'ng2-adsense,ng-adsense',
    template: `
      <ins
        #ins
        class="adsbygoogle {{ className }}"
        [style.display]="display"
        [style.width.px]="width"
        [style.height.px]="height"
        [attr.data-ad-client]="adClient"
        [attr.data-ad-slot]="adSlot"
        [attr.data-ad-format]="adFormat"
        [attr.data-ad-region]="adRegion"
        [attr.data-layout]="layout"
        [attr.data-adtest]="adtest"
        [attr.data-layout-key]="layoutKey"
        [attr.data-full-width-responsive]="fullWidthResponsive"
      >
      </ins>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class AdsenseComponent implements OnInit, AfterViewInit, OnDestroy {
    /** adsense account ca-pub-XXXXXXXXXXXXXXXX */
    @Input() adClient: string;
    /** ad slot/number */
    @Input() adSlot: string | number;
    @Input() adFormat: string;
    /** can be manually set if you need all ads on a page to have same id page-xxx */
    @Input() adRegion = 'page-' + Math.floor(Math.random() * 10000) + 1;
    /** ins element display style */
    @Input() display: string;
    /** ins element height in px */
    @Input() width: number;
    /** ins element width in px */
    @Input() height: number;
    /** used for in-feed ads */
    @Input() layout: string;
    /** used for in-feed ads */
    @Input() layoutKey: string;
    /** enable page-level ads */
    @Input() pageLevelAds: boolean;
    /** sets up some sort of google test ad */
    @Input() adtest: string;
    /* used for flexible ads */
    @Input() fullWidthResponsive: boolean;
    /**
     * classes applied to the ins element
     */
    @Input() className: string;
    @ViewChild('ins', { read: ElementRef, static: true }) ins: any;
  
    constructor(
      @Inject(ADSENSE_TOKEN) private config: AdsenseConfig,
      @Inject(PLATFORM_ID) private platform: any,
    ) {}
  
    ngOnInit(): void {
      const config = this.config;
      function use<T>(source: T, defaultValue: T): T {
        debugger;
        return config && source !== undefined ? source : defaultValue;
      }
      this.adClient = use(this.adClient, config.adClient);
      this.adSlot = use(this.adSlot, config.adSlot);
      this.adFormat = use(this.adFormat, config.adFormat);
      this.display = use(this.display, config.display || 'block');
      this.width = use(this.width, config.width);
      this.height = use(this.height, config.height);
      this.layout = use(this.layout, config.layout);
      this.layoutKey = use(this.layoutKey, config.layoutKey);
      this.pageLevelAds = use(this.pageLevelAds, config.pageLevelAds);
      this.adtest = use(this.adtest, config.adtest);
      this.fullWidthResponsive = use(
        this.fullWidthResponsive,
        config.fullWidthResponsive
      );
    }
    ngOnDestroy(): void {
      const iframe = this.ins.nativeElement.querySelector('iframe');
      if (iframe && iframe.contentWindow) {
        iframe.src = 'about:blank';
        iframe.remove();
      }
    }
  
    ngAfterViewInit(): void {
      if (isPlatformBrowser(this.platform)) {
        this.push();
      }
    }
  
    push(): void {
      const p: any = {};
      if (this.pageLevelAds) {
        p.google_ad_client = this.adClient;
        p.enable_page_level_ads = true;
      }
  
      if (window) {
        try {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(p);
        } catch {
          // pass
        }
      }
    }
  }