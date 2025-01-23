import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    private baseApiUrl = "http://localhost:60424/api/home/";
    // private baseApiUrl = "//localhost:60424/api/home/";
    public RandomSub: Subject<any> = new Subject<any>();

    constructor(private http: HttpClient) {
    }

    //​/api​/home​/GETToDaysBirthdays​/{page}​/{pageSize}
    public GETToDaysBirthdays(page: number = 1, pageSize: number): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETToDaysBirthdays/${page}/${pageSize}`).pipe(map(result => result));
    }

    ///api/home/GETMostPopular/{page}/{pageSize}/{group}
    public GETMostPopular(page: number = 1, pageSize: number): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETMostPopular/${page}/${pageSize}/most-popular`).pipe(map(result => result));
    }


    ///api/home/GETMostPopularDistinct/{page}/{pageSize}/{group}
    public GETMostPopularDistinct(page: number = 1, pageSize: number): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETMostPopularDistinct/${page}/${pageSize}/most-popular`).pipe(map(result => result));
    }

    ///api/home/GETGroupByUrl/{page}/{pageSize}/{group}
    public GETGroupByUrl(page: number = 1, pageSize: number, url: string): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETMostPopularDistinct/${page}/${pageSize}/${url}`).pipe(map(result => result));
    }

    ///api/home/GETTomorrowsBirthdays/{page}/{pageSize}
    public GETTomorrowsBirthdays(page: number = 1, pageSize: number): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETTomorrowsBirthdays/${page}/${pageSize}`).pipe(map(result => result));
    }

    ///api/home/GETPopularByAge/{page}/{pageSize}
    public GETPopularByAge(page: number = 1, pageSize: number): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETPopularByAge/${page}/${pageSize}`).pipe(map(result => result));
    }

    ///api/home/GETTagsCategpri/{page}/{pageSize}
    public GETTagsCategpri(page: number = 1, pageSize: number): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETTagsCategpri/${page}/${pageSize}`).pipe(map(result => result));
    }

    ///api/home/Detail/{url}
    public GETDetail(url: string): Observable<any> {
        return this.http.get(`${this.baseApiUrl}Detail/${url}`).pipe(map(result => result));
    }

    //api/home/Detail/GETAgeList/{yas}/{id}
    public GETAgeList(yas: number, id: number): Observable<any> {
        return this.http.get(`${this.baseApiUrl}Detail/GETAgeList/${yas}/${id}`).pipe(map(result => result));
    }

    //api/home/Detail/GETJob/{peo_title}/{id}
    public GETJob(peo_title: string, id: number): Observable<any> {
        return this.http.get(`${this.baseApiUrl}Detail/GETJob/${peo_title}/${id}`).pipe(map(result => result));
    }

    ///api/home/Detail/GETSunSign/{sunSign}/{id}
    public GETSunSign(sunSign: string, id: number): Observable<any> {
        return this.http.get(`${this.baseApiUrl}Detail/GETSunSign/${sunSign}/${id}`).pipe(map(result => result));
    }

    //api/home/Detail/GETBirthPlace/{peo_birthplace}/{id}
    public GETBirthPlace(peo_birthplace: string, id: number): Observable<any> {
        return this.http.get(`${this.baseApiUrl}Detail/GETBirthPlace/${peo_birthplace}/${id}`).pipe(map(result => result));
    }

    //api/home/Detail/GETFamousPopularity/{id}
    public GETFamousPopularityById(id: number): Observable<any> {
        return this.http.get(`${this.baseApiUrl}Detail/GETFamousPopularity/${id}`).pipe(map(result => result));
    }

    //api/home/Search/{term}
    public GETSearch(term: string): Observable<any[]> {
        return this.http.get(`${this.baseApiUrl}Search/${term}`)
            .pipe(map((r: any) => { return (r.length != 0 ? r : [{ "id": 0, "peo_name": "No Record Found" }]) as any[] }));
    }

    //api/home/GETRandom
    public GETRandom(): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETRandom`,{  responseType: 'text' }).pipe(map((result: any) => result));
    }

    //api/home/SendMessage
  public SendMessage(form:any) :Observable<any>{
      return this.http.post(`${this.baseApiUrl}SendMessage`,JSON.stringify(form)).pipe(map(result => result));
  }
}
