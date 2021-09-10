import {ViewEncapsulation, Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base.component';
import {HomeService} from "src/services/home.services";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent extends BaseComponent {
  constructor(private service: HomeService) {
    super();
    this.seoInit();
  }

  form: any = {};

  public send() {
    this.service.SendMessage(this.form).subscribe((res: any) => {
      alert(res);
    });
  }
}
