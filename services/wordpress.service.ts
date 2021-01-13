import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../AppSettings';

import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(
    private http: HttpClient,
    private http2: Http
  ) { }

  getPostsDestaq(): Observable<any[]> {
    return this.http.get<any[]>('http://www.cesed.br/portal/wp-json/wp/v2/posts?_embed', {
      params: {
        per_page: '1'
      }
    });
  }

  // pega todos os posts com a categoria especifica
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('http://www.cesed.br/portal/wp-json/wp/v2/posts?_embed&categories=7', {
      params: {
        per_page: '6'
      }
    });
  }

  // pega por categoria
  getPostsEventos(): Observable<any[]> {
    return this.http.get<any[]>('http://www.cesed.br/portal/wp-json/wp/v2/posts?categories=3', {
      params: {
        per_page: '5'
      }
    });
  }

  // pega por categoria
  getPostsEventosAll(): Observable<any[]> {
    return this.http.get<any[]>('http://www.cesed.br/portal/wp-json/wp/v2/posts?categories=3', {
      params: {
        per_page: '10'
      }
    });
  }

  // todas as notícias para página de notícia
  getPostsAll(): Observable<any[]> {
    return this.http.get<any[]>('http://www.cesed.br/portal/wp-json/wp/v2/posts?_embed', {
      params: {
        per_page: '10'
      }
    });
  }

  // Pega dados da página Quem Somos
  getPageQuemSomos(): Observable<any[]> {
    return this.http.get<any[]>('http://www.cesed.br/portal/wp-json/wp/v2/pages/60041', {
      params: {}
     });
  }

  getQSTeste(){
    return this.http.get('http://www.cesed.br/portal/wp-json/wp/v2/pages/60041')
      .pipe(map(response => response));
  }

  getWpinfo(customApiLink) {

    let wpData = [];

    this.http.get(AppSettings.API_ENDPOINT + customApiLink).subscribe(data => {
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          wpData.push(data[key]);
        }
      }
    });
    return wpData;
  }



  // métodos para paginação de posts 
  getTotalPage(){
		return this.http2.get('http://www.cesed.br/portal/wp-json/wp/v2/posts?page=1')
		  .pipe(
			map((response : Response) => response.headers.get("x-wp-totalpages"))
		  );
	}

	getPage(p){
		return this.http.get('http://www.cesed.br/portal/wp-json/wp/v2/posts?page='+p)
		  .pipe(map((response : Response) => response));
	}

  
}
