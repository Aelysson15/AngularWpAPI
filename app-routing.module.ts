import { EventosComponent } from './eventos/eventos.component';
import { HomeComponent } from './home/home.component';
import { GraduacaoComponent } from './graduacao/graduacao.component';
import { CepComponent } from './cep/cep.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CeuaComponent } from './ceua/ceua.component';
import { ExtensaoComponent } from './extensao/extensao.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { OuvidoriaComponent } from './ouvidoria/ouvidoria.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { PosComponent } from './pos/pos.component';
import { PosDireitoMedicoComponent } from './pos-direito-medico/pos-direito-medico.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { CpaComponent } from './cpa/cpa.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EventoComponent } from './evento/evento.component';

// rotas das páginas
export const routes: Routes = [
  { path: 'graduacao', component: GraduacaoComponent },
  { path: 'ceua', component: CeuaComponent },
  { path: 'cep', component: CepComponent },
  { path: 'extensao', component: ExtensaoComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'ouvidoria', component: OuvidoriaComponent },
  { path: 'trabalhe-conosco', component: TrabalheConoscoComponent },
  { path: 'fale-conosco', component: FaleConoscoComponent },
  { path: 'pos', component: PosComponent },
  { path: 'pos-direito-medico', component: PosDireitoMedicoComponent },
  { path: 'localizacao', component: LocalizacaoComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'cpa', component: CpaComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'noticia/:id', component: NoticiaComponent },
  { path: 'evento/:id', component: EventoComponent},
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

