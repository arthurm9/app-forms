import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroProdutosPageRoutingModule } from './cadastro-produtos-routing.module';

import { CadastroProdutosPage } from './cadastro-produtos.page';
import { RegistroPageRoutingModule } from '../registro/registro-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroPageRoutingModule
  ],
  declarations: [CadastroProdutosPage]
})
export class CadastroProdutosPageModule {}
