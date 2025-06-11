import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludador } from "./saludador/saludador";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saludador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-hola-mundo';
}
