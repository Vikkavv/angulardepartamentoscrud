import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search-component/search-component';
import { DepartamentosService } from './services/departamentos.service';
import { CreateDepartamento } from './components/create-departamento/create-departamento';

@NgModule({
  declarations: [App, HomeComponent, MenuComponent, SearchComponent, CreateDepartamento],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), DepartamentosService],
  bootstrap: [App],
})
export class AppModule {}
