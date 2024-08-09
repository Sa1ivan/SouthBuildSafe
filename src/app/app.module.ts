import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProcessComponent } from './components/process/process.component';
import { AboutComponent } from './components/about/about.component';
import { PopupComponent } from './components/popup/popup.component';
import { CatalogCardComponent } from './components/catalog-card/catalog-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProcessCardComponent } from './components/process-card/process-card.component';

const MaterialModules = [
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    ProcessComponent,
    AboutComponent,
    PopupComponent,
    CatalogCardComponent,
    ProcessCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule, 
    ReactiveFormsModule,
    MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MaterialModules
  ]
})
export class AppModule { }
