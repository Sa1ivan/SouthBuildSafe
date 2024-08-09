import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit{
  public imageSrc!: any;
  public imageTitle!: any;
  public imageDisplay!: any;
  public dialogData = inject(MAT_DIALOG_DATA)[0] === '.' ? inject(MAT_DIALOG_DATA) : inject(MAT_DIALOG_DATA)[0];
  public counter = 1;
  public router = inject(Router);

  ngOnInit(): void {
    this.imageTitle = this.dialogData[0].title !== undefined ? this.dialogData[0].title : '';
    this.imageSrc = this.dialogData[0].src !== undefined ? this.dialogData[0].src : this.dialogData + '';
    console.log(this.router.url)
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
