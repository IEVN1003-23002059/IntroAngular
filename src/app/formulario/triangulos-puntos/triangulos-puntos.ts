import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulos-puntos',
  standalone: false,
  styleUrl: './triangulos-puntos.css',
  templateUrl: './triangulos-puntos.html',
})
export class TriangulosPuntos {

  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  x3: number = 0;
  y3: number = 0;

  area: number = 0;
  esTriangulo: boolean = false;
  analizado: boolean = false;

  analizarPuntos(): void {
    this.analizado = true;

    let determinante = this.x1 * (this.y2 - this.y3) +
                       this.x2 * (this.y3 - this.y1) +
                       this.x3 * (this.y1 - this.y2);

    if (determinante < 0) {
      determinante = determinante * -1;
    }

    const calculoArea = determinante / 2;

    if (calculoArea > 0) {
      this.esTriangulo = true;
      this.area = calculoArea;
    } else {
      this.esTriangulo = false;
      this.area = 0;
    }
  }
}
