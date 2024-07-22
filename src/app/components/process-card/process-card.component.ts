import { Component, Input, OnInit } from '@angular/core';
import { ImagesProcess, ProcessType } from 'src/app/model/process';

@Component({
  selector: 'app-process-card',
  templateUrl: './process-card.component.html',
  styleUrls: ['./process-card.component.scss']
})
export class ProcessCardComponent implements OnInit{
  @Input() public sProcess!: ImagesProcess;
  public imageSrc!: any;
  public imageTitle!: any;

  ngOnInit(): void {
    this.imageSrc = this.sProcess.src;
    this.imageTitle = this.sProcess.title;
  }
}
