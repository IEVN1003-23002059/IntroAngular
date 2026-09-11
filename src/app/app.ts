import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  title:string='Yao Alvarez'

  duplicarnumero(a:number):number{
    return a*2
  }

  pelicula={
    titulo: 'Spider-Man',
    fechaLanzamiento: new Date(),
    precio: 2353
  }
}
