import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  styleUrl: './distancia.css',
  templateUrl: './distancia.html',
})
export class DistanciaComponent {
  x1: string = '';
  y1: string = '';
  x2: string = '';
  y2: string = '';
  resultado: number = 0;

  calcularDistancia(): void {
    const numX1 = parseFloat(this.x1);
    const numY1 = parseFloat(this.y1);
    const numX2 = parseFloat(this.x2);
    const numY2 = parseFloat(this.y2);

    const dx = numX2 - numX1;
    const dy = numY2 - numY1;

    const cuadradoX = dx * dx;
    const cuadradoY = dy * dy;

    const suma = cuadradoX + cuadradoY;

    this.resultado = Math.sqrt(suma);
  }
}