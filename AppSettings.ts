import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
      BrowserModule,
    ],
  })

// outra maneira de organizar
export class AppSettings {

    public static API_ENDPOINT = 'http://www.cesed.br/portal/wp-json/';

  }
