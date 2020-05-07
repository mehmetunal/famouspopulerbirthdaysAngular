import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private baseApiUrl = "//api.avkbul.com/api/category/";
    // private baseApiUrl = "//localhost:60424/api/category/";

    constructor(private http: HttpClient) {
    }

    // /api/category/GETProfessionTopLast/{page}
    public GETProfessionTopLast(page: number = 1): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETProfessionTopLast/${page}`).pipe(map(result => result));
    }

    // /api/category/GETProfessionGrup
    public GETProfessionGrup(): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETProfessionGrup`).pipe(map(result => result));
    }

    // /api/category/GETYoutubeStar
    public GETYoutubeStar(): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETYoutubeStar`).pipe(map(result => result));
    }

    //api/category/GETPopularityCat/{url}/{page}
    public GETPopularityCat(url: string, page: number = 0): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETPopularityCat/${url}/${page}`).pipe(map(result => result));
    }

    //api/category/GETAge/{url}/{page}
    public GETAge(url: string, page: number = 0): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETAge/${url}/${page}`).pipe(map(result => result));
    }

    //api/category/GETBirthPlace/{url}/{page}
    public GETBirthPlace(url: string, page: number = 0): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETBirthPlace/${url}/${page}`).pipe(map(result => result));
    }

    //api/category/GETSunSign/{url}/{page}
    public GETSunSign(url: string, page: number = 0): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETSunSign/${url}/${page}`).pipe(map(result => result));
    }

    //api/category/GETTodayTop1000/{page}
    public GETTodayTop1000(page: number = 0): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETTodayTop1000/${page}`).pipe(map(result => result));
    }

    ///api/home/GETMostPopulary/{page}
    public GETMostPopulary(page: number = 0): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETMostPopulary/${page}`).pipe(map(result => result));
    }

    ///api/home/GETVW_BirthdaysTop1000/{page}
    public GETVW_BirthdaysTop1000(page: number = 0): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETVW_BirthdaysTop1000/${page}`).pipe(map(result => result));
    }

    ///api/home/GETYearTopLast/{page}
    public GETYearTopLast(page: number = 0): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETYearTopLast/${page}`).pipe(map(result => result));
    }

    ///api/home/GETTrending/{page}/{pageSize}
    public GETTrending(page: number = 0, pageSize: number = 120): Observable<any> {
        return this.http.get(`${this.baseApiUrl}GETTrending/${page}/${pageSize}`).pipe(map(result => result));
    }
}