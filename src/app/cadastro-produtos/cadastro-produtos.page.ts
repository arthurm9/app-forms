import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Produto } from '../models/Produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.page.html',
  styleUrls: ['./cadastro-produtos.page.scss'],
})

export class CadastroProdutosPage implements OnInit {

  formCadastro: FormGroup;

  produto: Produto = new Produto();

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    descricao: [
      { tipo: 'required', mensagem: 'O campo Descrição é obrigatório.' },
    ],
    validade: [
      { tipo: 'required', mensagem: 'O campo Validade é obrigatório.' },
    ],
    preco: [
      { tipo: 'required', mensagem: 'É obrigatório haver um preço.' },

    ],
  };

  constructor(private formBuilder: FormBuilder,
              private storageService: StorageService,
              private route: Router
    ) {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.compose(
        [Validators.required, Validators.minLength(3)]
        )
      ],
      descricao: ['', Validators.required],

      validade: ['', Validators.required],

      preco: ['', Validators.required]
    });

  }

  async salvarCadastro() {
    if(this.formCadastro.valid){
      this.produto.nome = this.formCadastro.value.nome;
      this.produto.descricao = this.formCadastro.value.descricao;
      this.produto.validade = this.formCadastro.value.validade;
      this.produto.preco = this.formCadastro.value.preco;
      await this.storageService.set(this.produto.nome, this.produto);
      this.route.navigateByUrl('/produtos');
    } else {
      alert('Formulário Inválido!');
    }
  }

  ngOnInit() {
  }

}
