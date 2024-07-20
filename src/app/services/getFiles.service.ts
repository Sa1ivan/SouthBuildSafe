import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Images, DataResponse, CatalogType } from '../model/catalog';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetFilesService {

  constructor(private http: HttpClient) { }

  _catalogFiles(): Observable<CatalogType[]> {
    const url = `/assets/mock/catalog.json`
    return this.http
      .get<DataResponse>(url)
      .pipe(
        map(x => x.data)
      );
  }
}
