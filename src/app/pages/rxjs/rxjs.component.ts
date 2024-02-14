import { Component } from "@angular/core";
import { Observable, interval } from "rxjs";
import { filter, map, retry, take } from "rxjs/operators";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: [],
})
export class RxjsComponent {
  constructor() {
    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log("Subs:", valor),
    //   error => console.warn('Error:', error),
    //   () => console.info('Obs terminado')
    // );

    this.retornaIntervalo().subscribe(console.log);
  }

  retornaIntervalo(): Observable<number> {
    // const intervalo$ = interval(2000)
    //                     .pipe(
    //                       take(4),
    //                       map(valor => valor + 1 )
    //                     );

    // return intervalo$;

    return interval(2000).pipe(
      map((valor) => valor + 1),
      filter(valor => valor % 2 === 0 ? true : false),
      take(10),
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error("i llego al valor de 2");
        }
      }, 2000);
    });
  }
}
