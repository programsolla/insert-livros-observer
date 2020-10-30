import { Injectable } from '@angular/core';

import { Subject } from 'rxjs'

import { Livro } from './livro.model'

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor() { }

  private livros: Livro [] = [];

  private listaLivrosAtualizada = new Subject <Livro[]>();

  getLivros(): Livro[] {
    return [...this.livros]
  }

  adicionarLivro ( titulo:string, ator:string, ano:string, id:string): void{
    const livro: Livro = {
      titulo: titulo,
      ator: ator,
      ano: ano,
      id: id
    };
    this.livros.push(livro);

    // Enviando mensagem de que aconteceu modificação
    // no objeto a ser observado (a lista de livros)
    this.listaLivrosAtualizada.next([...this.livros]);
  }


  // Devolve um objeto "Observable"
  // para que os componentes se resgistrem
  // como observadores
  getListaDeLivrosAtualizadaObservable() {
    return this.listaLivrosAtualizada.asObservable();
  }

}
