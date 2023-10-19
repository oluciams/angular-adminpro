import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent {
  
  @Input() progreso: number = 40;
  // @Input('valor') progreso: number = 40;

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      return (this.progreso = 100);
    }

    if (this.progreso <= 0 && valor < 0) {
      return (this.progreso = 0);
    }

    this.progreso = this.progreso + valor;

    return;
  }
}
