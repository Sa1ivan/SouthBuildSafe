import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ImagesProcess, ProcessType } from 'src/app/model/process';
import { PopupComponent } from '../popup/popup.component';
import * as MatDialogs from '@angular/material/dialog';

@Component({
  selector: 'app-process-card',
  templateUrl: './process-card.component.html',
  styleUrls: ['./process-card.component.scss']
})
export class ProcessCardComponent implements OnInit{
  @Input() public sProcess!: ImagesProcess;
  public imageSrc!: any;
  public imageTitle!: any;
  public modal = inject(MatDialogs.MatDialog);

  ngOnInit(): void {
    this.imageSrc = this.sProcess.src;
    this.imageTitle = this.sProcess.title;
  }

  @Output()
  public openImage = new EventEmitter<any>();

  public openPopup(image: ImagesProcess)
  {
    this.modal.open(PopupComponent, {
      minWidth: "420",
      data: image
    })
  }
}
