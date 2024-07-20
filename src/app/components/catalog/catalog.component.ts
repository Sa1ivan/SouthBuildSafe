import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogType } from 'src/app/model/catalog';
import { GetFilesService } from 'src/app/services/getFiles.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  constructor(public getFiles: GetFilesService) {}

  public files$!: Observable<CatalogType[]>;

  ngOnInit(): void {
    this.files$ = this.getFiles._catalogFiles();
  }
}
