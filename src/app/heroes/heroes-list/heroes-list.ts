import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {

  imageWidth:number=40;
  imageMargin:number=2;
  muestraImagen:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImagen=!this.muestraImagen;
  }

  heroes:any[]=[
    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre:'Goku',
      descripcion:'kame hame Ha',
      race:'Saiyan',
      ki:9000
    },
    {
      imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre:'Vegeta',
      descripcion:'Final Flash',
      race:'Saiyan',
      ki:8500
    },
    {
      imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
      nombre:'Piccolo',
      descripcion:'Makankosappo',
      race:'Namekiano',
      ki:7000
    },
    {
      imagen:"https://dragonball-api.com/characters/Freezer.webp",
      nombre:'Freezer',
      descripcion:'Death Ball',
      race:'Alien',
      ki:9500
    },

  ]
}
