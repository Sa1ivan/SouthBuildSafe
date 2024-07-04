import { Component } from '@angular/core';
import { CatalogImages } from 'src/app/model/catalog';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  public popupImage: CatalogImages | null=null;

  public images: CatalogImages[] = [
    {
      src: './assets/images/picture.png',
      title: 'Кутузовский квартал',
      display: 'block'
    },
    {
      src: './assets/images/main-card.png',
      title: 'Красавчиковый переулок',
      display: 'block'
    }
  ];

  public openPopup(image: CatalogImages)
  {
    console.log(image, this.popupImage);
    this.popupImage = image;
    image.display = 'block';
  }
}
