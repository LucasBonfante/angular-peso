import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public peso: number = 0;

  exibir(){
    console.log('Peso:' + this.peso + 'Kg');
  }
}
