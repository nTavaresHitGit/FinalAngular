import { Injectable } from '@angular/core';
import {Content} from '../HelperFiles/content-interface';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
private httpOptions  = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Content[]>{
    return this.http.get<Content[]>('api/content');
  }
  addProduct(content: Content): Observable<Content> {
    return this.http.post<Content>('api/content', content, this.httpOptions);
  }
}
