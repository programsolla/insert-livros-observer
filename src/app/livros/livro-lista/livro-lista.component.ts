import { formatCurrency } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
  export class LivroListaComponent implements OnInit, OnDestroy {
    livros: Livro[] = [];

    private livrosSubscription: Subscription;

    constructor ( public livroService: LivroService ) {

  }

  ngOnInit(): void {
    // Acessando o serviço e capturando a lista
    // de livros atualizada
    this.livros= this.livroService.getLivros();
    // o objeto subscription esta recebendo o retorno do
    // metodo sbscribe
    this.livrosSubscription = this.livroService.getListaDeLivrosAtualizadaObservable().subscribe((livros: Livro[])=> {
      this.livros = livros;
    } );


   }


   // Metodo executado quando o componente for removido

   ngOnDestroy(): void{
    this.livrosSubscription.unsubscribe();
   }
}
