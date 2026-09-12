import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',

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
