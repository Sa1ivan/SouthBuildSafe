import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetFilesService } from 'src/app/services/getFiles.service';
import { ImagesProcess } from 'src/app/model/process';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit, OnDestroy{
  constructor(public getFiles: GetFilesService) {}

  public files: ImagesProcess[] = [];
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.getFiles._processFiles().pipe(
      takeUntil(this.destroy$),
      tap((response => {
        this.files = Object.values(response[0].process);
      }))
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
