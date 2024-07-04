import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CatalogImages } from 'src/app/model/catalog';

@Component({
  selector: 'app-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.scss']
})
export class CatalogCardComponent {
  @Input()
  public sImage!: CatalogImages;

  @Output()
  public openImage = new EventEmitter<any>();

  public openPopup(image: CatalogImages)
  {
    this.openImage.emit(image);
  }
}
