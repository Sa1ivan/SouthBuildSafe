import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataResponse, CatalogType } from '../model/catalog';
import { map, Observable } from 'rxjs';
import { DataResponseProcess, ProcessType } from '../model/process';

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

  _processFiles(): Observable<ProcessType[]> {
    const url = `/assets/mock/process.json`
    return this.http
      .get<DataResponseProcess>(url)
      .pipe(
        map(x => x.data)
      );
  }
}
