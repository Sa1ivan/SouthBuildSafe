import { Component, Input } from '@angular/core';
import { CatalogImages } from 'src/app/model/catalog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Input()
  public sPopupImage!: CatalogImages;

  public close(sPopupImage: CatalogImages)
  {
    this.sPopupImage.display = 'none';
  }
}
