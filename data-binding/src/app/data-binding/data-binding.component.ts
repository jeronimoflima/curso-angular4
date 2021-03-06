import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.training';

  cursoAngular = true;

  isMouseOver: boolean = false;

  nomeDoCurso: string = "Angular";

  urlImagem = 'http://lorempixel.com/400/200/nature/';

  valorS;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'Jeronimo',
    idade: 28
  }



  getValor(){
    return 1;
  }

  mouseOn(){
    this.isMouseOver = !this.isMouseOver;

  }

  mouseOut(){

  }

  getCurtiCurso(){
    return true;
  }

  botaoClicado(){
    alert("botaoClicado");
  }

  onKeyUp(evento:KeyboardEvent){
    console.log(evento);
  }

  valorSalvo(valor){
    this.valorS = valor;

  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }



  constructor() { }

  ngOnInit() {
  }

}
