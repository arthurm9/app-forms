import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private storageService: StorageService) { }

  async buscarProdutos(){
    this.listaProdutos = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarProdutos();
  }

  async excluirProduto(nome: string){
    await this.storageService.remove(nome);
    this.buscarProdutos();
  }

  ngOnInit() {
  }

}
