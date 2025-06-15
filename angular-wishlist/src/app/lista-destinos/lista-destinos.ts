import { Component } from '@angular/core';
import { DestinoViaje } from '../destino-viaje/destino-viaje';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-destinos',
  imports: [NgFor,DestinoViaje],
  templateUrl: './lista-destinos.html',
  styleUrl: './lista-destinos.css'
})
export class ListaDestinos {
  destinos: string[];
  constructor(){
    this.destinos = ['Buenos Aires', 'San Ramon', 'Madrid', 'Campo Rojo'];
  }

  ngOnInit() {
  }

}
