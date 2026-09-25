import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  styleUrl: './palindromo.css',
  templateUrl: './palindromo.html',
})
export class Palindromo {
  
 frase: string = '';
  numVocales: number = 0;
  numConsonantes: number = 0;
  esPalindromo: boolean = false;
  analizado: boolean = false;

  vocales: string[] = ['a', 'e', 'i', 'o', 'u'];
  consonantes: string[] = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

  analizar() {
    this.numVocales = 0;
    this.numConsonantes = 0;

    let letrasLimpias: string[] = [];
    let totalLetras = 0;

    for (let char of this.frase) {
      let esVocal = false;
      for (let v of this.vocales) {
        if (char === v) {
          esVocal = true;
          break;
        }
      }

      let esConsonante = false;
      for (let c of this.consonantes) {
        if (char === c) {
          esConsonante = true;
          break;
        }
      }

      if (esVocal) {
        this.numVocales++;
        letrasLimpias.push(char);
        totalLetras++;
      } 
      else if (esConsonante) {
        this.numConsonantes++;
        letrasLimpias.push(char);
        totalLetras++;
      }
    }

    if (totalLetras === 0) {
      this.esPalindromo = false;
    } else {
      this.esPalindromo = true;
      let fin = totalLetras - 1; 

      for (let i = 0; i < totalLetras; i++) {
        if (letrasLimpias[i] !== letrasLimpias[fin]) {
          this.esPalindromo = false;
          break;
        }
        fin--; 
      }
    }

    this.analizado = true;
  }
  }
