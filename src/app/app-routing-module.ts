import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { SearchComponent } from './components/search-component/search-component';
import { CreateDepartamento } from './components/create-departamento/create-departamento';

export const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"createdepartamento", component: CreateDepartamento},
  {path:"search/:searched", component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
