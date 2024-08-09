import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CatalogType } from 'src/app/model/catalog';
import * as MatDialogs from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.scss']
})
export class CatalogCardComponent implements OnInit{
  public imageSrc!: any;
  public imageTitle!: string;
  public imageDisplay!: string;
  public modal = inject(MatDialogs.MatDialog);



  ngOnInit(): void {
    this.imageSrc = Object.values(this.sImage)[0][0].src;
    this.imageTitle = Object.values(this.sImage)[0][0].title;
    this.imageDisplay = Object.values(this.sImage)[0][0].display;
  }

  @Input()
  public sImage!: CatalogType;

  @Output()
  public openImage = new EventEmitter<any>();

  public openPopup(image: CatalogType)
  {
    this.modal.open(PopupComponent, {
      minWidth: "420",
      data: Object.values(image)
    })
  }
}
