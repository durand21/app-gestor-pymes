import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DestinoViaje } from './destino-viaje/destino-viaje';
import { ListaDestinos } from "./lista-destinos/lista-destinos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaDestinos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-wishlist';
}
