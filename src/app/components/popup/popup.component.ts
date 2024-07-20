import { Component, inject, Input, OnInit } from '@angular/core';
import { Images } from 'src/app/model/catalog';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { CatalogType } from 'src/app/model/catalog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit{
  public imageSrc!: any;
  public imageTitle!: any;
  public imageDisplay!: any;
  public dialogData = inject(MAT_DIALOG_DATA)[0];
  public counter = 1;

  ngOnInit(): void {
    this.imageTitle = this.dialogData[0].title;
    this.imageSrc = this.dialogData[0].src;
  }

  next(src: any)
  {
    for (let index = 0; index < this.dialogData.length; index++) {
      let currentSrc = 0;
      if(this.dialogData[index].src === src)
      {
        currentSrc = index;
        currentSrc + 1 >= this.dialogData.length ? currentSrc = 0 : currentSrc++;
        this.imageSrc = this.dialogData[currentSrc].src;
        this.counter = currentSrc+1;
      }

    }
  }

  prev(src: any)
  {
    for (let index = 0; index < this.dialogData.length; index++) {
      let currentSrc = 0;
      if(this.dialogData[index].src === src)
      {
        currentSrc = index;
        currentSrc === 0 ? currentSrc = this.dialogData.length - 1 : currentSrc--;  
        this.imageSrc = this.dialogData[currentSrc].src;
        this.counter = currentSrc+1;
      }
      
    }
  }
}
