import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../services/wordpress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts$: Observable<any[]>;
  eventos$: Observable<any[]>;
  // recente$: Observable<any[]>;

  posts = [];

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
    this.eventos$ = this.wp.getPostsEventos();
    // this.recente$ = this.wp.getPostsDestaq();
   }

  //  constructor(private publicacoes: PublicacoesService) {
  //   this.publicacao = publicacoes.listarPublicacoes();
  //  }

  ngOnInit() {
    this.posts = this.wp.getWpinfo('wp/v2/posts');
    console.log(this.posts);
  }

}
