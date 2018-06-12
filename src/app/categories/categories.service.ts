import { Injectable } from "@angular/core";
import { BASE_API_URL } from "./../config/index";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories({ url }): Observable<any> {
    return this.http.get<any>(BASE_API_URL + url);
  }
}
