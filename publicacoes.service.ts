import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicacoesService {

  publicacao:any[] = [
    {
      image:'Imagem',
      titulo:'Curso de Nutrição...',
      texto: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos'
    },
    {
      image:'OutraImagem',
      titulo:'Professoras da Unifacisa...',
      texto: 'Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'
    }
  ]

  constructor() { 
    console.log('funcionando serviço')
  }

  listarPublicacoes() {
    return this.publicacao;
  }

  //lista pelo id
  ListarUm(i){
    return this.publicacao[i];
  }

  // publicacoesUrl = 'http://www.cesed.br/portal/wp-json/wp/v2/posts';

  // constructor(private http: HttpClient) { }

  // listar(){
  //   return this.http.get<any[]>(`${this.publicacoesUrl}`);
  // }
}
