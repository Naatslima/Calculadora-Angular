import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  
  display: string = '';

  addToDisplay(value: string) {
    this.display += value;
  }

  clearDisplay() {
    this.display = '';
  }

  calcular() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = "Error";
    }
  }
}
