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

  urlImagem = 'http://lorempixel.com/400/200/nature/';

  valorS;

  nome: string = 'abc';

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

  constructor() { }

  ngOnInit() {
  }

}
