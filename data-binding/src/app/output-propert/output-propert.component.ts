import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-propert.component.html',
  styleUrls: ['./output-propert.component.css']
})
export class OutputPropertComponent implements OnInit {

  @Input() valor = 0;

  @Output() modouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa(){
    this.campoValorInput.nativeElement.value++;
    this.modouValor.emit({novoValor: this.valor});

  }

  decrementa(){
     this.campoValorInput.nativeElement.value--;
    this.modouValor.emit({novoValor: this.valor});

  }

  constructor() { }

  ngOnInit() {
  }

}
