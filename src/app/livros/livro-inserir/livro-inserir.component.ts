import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Livro } from '../livro.model';
import {LivroService} from '../livro.service'
@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css'],
})
export class LivroInserirComponent {

  constructor (public livroService: LivroService){

  }


  onAdicionarLivro( form: NgForm) {
    if (form.invalid) return; //enviando os dados ao livro.service
    this.livroService.adicionarLivro(
      form.value.titulo,
      form.value.ator,
      form.value.ano,
      form.value.id
    );
      // Limpando os campos de atribuições do form
    form.resetForm();
  }
}
