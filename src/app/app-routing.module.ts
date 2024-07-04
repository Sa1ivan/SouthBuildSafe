import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProcessComponent } from './components/process/process.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'home',
    title: 'Главная',
    component: HomeComponent
  },
  {
    path: 'catalog',
    title: 'Каталог проектов',
    component: CatalogComponent
  },
  {
    path: 'process',
    title: 'Процесс',
    component: ProcessComponent
  },
  {
    path: 'about',
    title: 'О компании',
    component: AboutComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
