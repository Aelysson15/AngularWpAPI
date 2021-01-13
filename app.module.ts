import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PublicacoesService } from './publicacoes.service';

import { AppComponent } from './app.component';
import { GraduacaoComponent } from './graduacao/graduacao.component';
import { CepComponent } from './cep/cep.component';
import { CeprosComponent } from './cepros/cepros.component';
import { CeuaComponent } from './ceua/ceua.component';
import { CpaComponent } from './cpa/cpa.component';
import { CursoAdministracaoComponent } from './curso-administracao/curso-administracao.component';
import { CursoExtensaoComponent } from './curso-extensao/curso-extensao.component';
import { ExtensaoComponent } from './extensao/extensao.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { OuvidoriaComponent } from './ouvidoria/ouvidoria.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PosDireitoMedicoComponent } from './pos-direito-medico/pos-direito-medico.component';
import { PosComponent } from './pos/pos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ResponsabilidadeSocialComponent } from './responsabilidade-social/responsabilidade-social.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { WordpressService } from './services/wordpress.service';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { routing } from './app-routing.module';
import { EventosComponent } from './eventos/eventos.component';

// Necessario para usar HTTP
import { HttpModule } from '@angular/http';

// Necessarop para usar innerHtml
import { SanitizeHtmlPipe } from './pipes/sanitizeHtmlPipe';
import { NoticiaComponent } from './noticia/noticia.component';
import { EventoComponent } from './evento/evento.component';


@NgModule({
  declarations: [
    AppComponent,
    GraduacaoComponent,
    CepComponent,
    CeprosComponent,
    CeuaComponent,
    CpaComponent,
    CursoAdministracaoComponent,
    CursoExtensaoComponent,
    ExtensaoComponent,
    FaleConoscoComponent,
    LocalizacaoComponent,
    OuvidoriaComponent,
    PesquisaComponent,
    PosDireitoMedicoComponent,
    PosComponent,
    NoticiasComponent,
    EventosComponent,
    QuemSomosComponent,
    ResponsabilidadeSocialComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NoticiaComponent,
    TrabalheConoscoComponent,
    SanitizeHtmlPipe,
    EventoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    HttpModule
  ],
  providers: [
    PublicacoesService,
    WordpressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
