import { StorageService } from './../services/storage.service';
import { comparaValidator } from './../validators/compara-validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Conta } from '../models/Conta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  formLogin: FormGroup;

  conta: Conta = new Conta();

  mensagens = {
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'O campo Senha é obrigatório.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
    ],
  };

  constructor(private formBuilder: FormBuilder,
              private storageService: StorageService,
              private route: Router
            ) {
      this.formLogin = this.formBuilder.group({
        email: ['', Validators.compose(
          [Validators.required, Validators.email]
          )
        ],
        senha: ['', Validators.compose(
          [Validators.required, Validators.minLength(6)]
          )
        ],
      });
    }

    async salvarLogin() {
      if(this.formLogin.valid){
        this.conta.email = this.formLogin.value.email;
        this.conta.senha = this.formLogin.value.senha;
        await this.storageService.set(this.conta.email, this.conta);
        this.route.navigateByUrl('/produtos');
      } else {
        alert('Formulário Inválido!');
      }
    }

  ngOnInit() {
  }

}
