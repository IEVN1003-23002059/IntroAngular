import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: false,
  styleUrl: './usuario.css',
  templateUrl: './usuario.html',
})
export class Usuario {
  usuarioCorrecto: string = 'Yao';
  contrasenaCorrecta: string = '12345';

  usuarioIngresado: string = '';
  contrasenaIngresada: string = '';

  mensajeResultado: string = '';

  validarCredenciales(): void {
    if (this.usuarioIngresado !== this.usuarioCorrecto) {
      this.mensajeResultado = 'El nombre de usuario no es válido.';
    } else if (this.contrasenaIngresada !== this.contrasenaCorrecta) {
      this.mensajeResultado = 'La contraseña no es válida.';
    } else {
      this.mensajeResultado = 'Bienvenido al sistema, ' + this.usuarioCorrecto + '.';
    }
  }
}
