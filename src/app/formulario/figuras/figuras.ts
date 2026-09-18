import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  styleUrl: './figuras.css',
  templateUrl: './figuras.html',
})
export class Figuras {
  
  figura: string = 'rectangulo';
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  calcular() {
    switch (this.figura) {
      case 'rectangulo':
        this.resultado = this.num1 * this.num2;
        break;

      case 'cuadrado':
        this.resultado = this.num1 * this.num1;
        break;

      case 'triangulo':
        this.resultado = (this.num1 * this.num2) / 2;
        break;

      case 'pentagono':
        this.resultado = (this.num1 * this.num2) / 2;
        break;

      case 'circulo':
        this.resultado = 3.1416 * (this.num1 * this.num1);
        break;
    }
  }
}
