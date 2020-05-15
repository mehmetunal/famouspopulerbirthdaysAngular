import { ViewEncapsulation, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  Observable } from 'rxjs';
import { HomeService } from 'src/services/home.services';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  public clients: Observable<any[]>;
  public flag: boolean = true;
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private router: Router, private service: HomeService) {

  }

  ngOnInit(): void {

  }

  // Push a search term into the observable stream.  
  public searchClient(term: string): void {
    if (term.length < 3) {
      this.clients = null;
      return;
    }

    this.clients = this.service.GETSearch(term)
      .pipe(
        debounceTime(300),        // wait for 300ms pause in events  ,
        distinctUntilChanged(),   // ignore if next search term is same as previous
      );
  }

  public onselectClient(term: string): void {
    debugger;
    this.clients = null;
    this.searchInput.nativeElement.value = '';
    this.router.navigate([`/people/${term}`])
  }
}