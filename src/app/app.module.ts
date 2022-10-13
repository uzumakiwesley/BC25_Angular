import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  /**
   * declarations serve para registrar componentes, pipes, diretivas e outras estrututas
   */
  declarations: [
    AppComponent,
    ProdutoComponent,
    NavbarComponent
  ],
  /**
   * imports serve para módulos dentro de outros módulos
   * 
   * SERVE EXCLUSIVAMENTE PARA OUTROS MÓDULOS
   */
  imports: [
    BrowserModule
  ],
  /**
   * providers serve para registrae serviços e interceptadores HTTP
   */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
