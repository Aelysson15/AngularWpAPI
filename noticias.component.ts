import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  all$: Observable<any[]>;
  posts = [];

  constructor(private wp: WordpressService) {
    this.all$ = this.wp.getPostsAll();
  }

  ngOnInit() {
    this.posts = this.wp.getWpinfo('wp/v2/posts');
    console.log(this.posts);

  }

}
