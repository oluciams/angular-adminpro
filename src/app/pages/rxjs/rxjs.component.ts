import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: [],
})
export class RxjsComponent {
  constructor() {
    const obs$ = new Observable((observer) => {
      let i = 0;
      const intervalo = setInterval(() => {

        i++
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();          
        }

         if (i === 2) {           
           observer.error('i llego al valor de 2');
         }

      }, 2000);
    });

    obs$.subscribe(
      valor => console.log("Subs:", valor),
      error => console.warn('Error:', error),
      () => console.info('Obs terminado')
    );
  }
}
