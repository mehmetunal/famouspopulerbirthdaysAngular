import { Component, Injector } from '@angular/core';
import { AppInjector } from 'src/services/app-injector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
}
