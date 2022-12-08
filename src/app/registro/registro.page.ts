import { CpfValidator } from './../validators/cpf-validator';
import { comparaValidator } from './../validators/compara-validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = this.formBuilder.group({
      nome: ['', Validators.compose(
        [Validators.required, Validators.minLength(3)]
        )
      ],
      cpf: ['', Validators.compose(
        [Validators.required/*CpfValidator.cpfValid*/]
        )
      ],
      email: ['', Validators.compose(
        [Validators.required, Validators.email]
        )
      ],
      senha: ['', Validators.compose(
        [Validators.required, Validators.minLength(8)]
        )
      ],
      confirmaSenha: ['', Validators.compose(
        [Validators.required, Validators.minLength(8)]
        )
      ],
    }, {
      validator: comparaValidator('senha', 'confirmaSenha')
    }
    );

  }

  salvarRegistro() {
    console.log('Formulário: ', this.formRegistro.valid);
  }

  ngOnInit() {
  }

}
