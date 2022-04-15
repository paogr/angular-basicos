import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string ='';
  

  borrarPrimerHeroe(){
    console.log('Borrar');
    this.heroeBorrado = this.heroes.shift() || '';
    
  }
  borrarUltimoHeroe(){
    console.log('Borrar');
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
