import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/** tipos de data-binding */

  /** Em Angular, a String interpolation é usada para exibir dados dinâmicos no modelo HTML (no usuário final). Ele facilita você fazer alterações no arquivo component.ts e buscar dados de lá para o modelo HTML (arquivo componente.html).*/
  title = 'data-binding';

  n1: number = 0
  n2: number = 0
  somar(x: number, y: number) {
    return x + y
  }

  /**A Property Binding no  Angular é usada para vincular os valores das propriedades do componente ou do modelo ao elemento HTML. Dependendo dos valores, mudará o comportamento existente do elemento HTML. A sintaxe para usar a propriedade é: [property] = ‘expressão’.
   */
  tipoInput: string = 'text'
  mudarTipoDoInput(): void {
    if (this.tipoInput == 'password') {
      this.tipoInput = 'text'
    } else {
      this.tipoInput = 'password'
    }
  }

  /**A Event Biding angular é um tipo de associação de dados unidirecional, em que os dados fluem da exibição em um modelo para a fonte de dados em um arquivo typescript de componente. A vinculação de eventos nos permite ouvir determinados eventos, como cliques, toques, pressionamentos de tecla e movimentos do mouse para que possamos responder a esse evento.
   */

  /**
   * Two Way Data Binding: (usuario pode interagir com seu site)
   */
   
   i: number = 0
 
   increment() {
     this.i++
   }
 
   decrement() {
     this.i--
   }
  }
