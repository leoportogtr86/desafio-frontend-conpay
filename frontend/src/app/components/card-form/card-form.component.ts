import { Component, OnInit } from '@angular/core';

import {Cliente} from '../../models/cliente.model'
import {OrdemCompraService} from '../../services/ordem-compra.service'
import {Pedido} from '../../models/pedido.model'


@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  parcelas: string[] = ["1x - R$ 1000 (Sem Juros)", "2x - R$ 500 (Sem Juros)", "3x - R$ 333,33 (Sem Juros)", "4x - R$ 250 (Sem Juros)" ]

    nome: string = ''
    cpfCnpj: string = ''
    dataNascimento: string = ''
    email: string = ''
    telefone: string = ''
    endereco: string = ''
    numeroCartao: string = ''
    validadeCartao: string = ''
    nomeCartao: string = ''
    codigoSeguranca: string = ''

    //controles de validação dos campos


    nomeValido: boolean = false
    cpfCnpjValido: boolean = false
    dataNascimentoValido: boolean = false
    emailValidoValido: boolean = false
    enderecoValido: boolean = false
    numeroCartaoValido: boolean = false
    validadeCartaoValido: boolean = false
    nomeCartaoValido: boolean = false
    codigoSegurancaValido: boolean = false

    //a logica de validacao dos campos sera contruida a partir desses valores
  
    //obs: pesquisar regex

    pedido: Pedido = {


        nome: '',
        cpfCnpj: '',
        dataNascimento:'',
        email:'',
        telefone:'',
        endereco: '',
        numeroCartao: '',
        validadeCartao: '',
        nomeCartao: '',
        codigoSeguranca: ''

    }

    
  

  constructor(private ordem: OrdemCompraService) { }

  ngOnInit(): void {

    // this.ordem.efetivarCompra()
  }

  atualizaNome(nome: string): void{

    this.nome = nome
    console.log(this.nome)

    if (this.nome.length > 0){

      this.nomeValido = true
      console.log(this.nomeValido)
    
    } else {

      this.nomeValido = false
      console.log(this.nomeValido)

    }

    //logica para validacao de campos...deve ser criada para cada campo do formulario

  }

  atualizaCpfCnpj(cpfCnpj: string): void{

    this.cpfCnpj = cpfCnpj
    console.log(this.cpfCnpj)

    

  }

  atualizaDataNascimento(data: string): void{

    this.dataNascimento = data
    console.log(this.dataNascimento)

  }

  atualizaEmail(email: string): void{

    this.email = email
    console.log(this.email)

  }

  atualizaTelefone(telefone: string): void{

    this.telefone = telefone
    console.log(this.telefone)

  }

  atualizaEndereco(endereco: string): void{

    this.endereco = endereco
    console.log(this.endereco)

  }

  atualizaNumeroCartao(numeo: string): void{

    this.numeroCartao = numeo
    console.log(this.numeroCartao)

  }

  atualizaValidadeCartao(validade: string): void{

    this.validadeCartao = validade
    console.log(this.validadeCartao)

  }

  atualizaNomeCartao(nome: string): void{

    this.nomeCartao = nome
    console.log(this.nomeCartao)

  }

  atualizaCodigoSeguranca(codigo: string): void{

    this.codigoSeguranca = codigo
    console.log(this.codigoSeguranca)

  }



  confirmarCompra(): void{

    this.pedido = {

        nome: this.nome,
        cpfCnpj: this.cpfCnpj,
        dataNascimento: this.dataNascimento,
        email: this.email,
        telefone: this.telefone,
        endereco: this.endereco,
        numeroCartao: this.numeroCartao,
        validadeCartao: this.validadeCartao,
        nomeCartao: this.nome,
        codigoSeguranca: this.codigoSeguranca
    }



    this.ordem.efetivarCompra(this.pedido)


  }






}
