import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      The base is: <strong>{{ base }}</strong>
    </h3>
    <button (click)="restOrSum(base)">+ {{ base }}</button>
    <span>{{ counter }}</span>
    <button (click)="restOrSum(-base)">- {{ base }}</button>
  `,
})
export class CounterComponent {
  public title: string = 'Counter App';
  public counter: number = 0;
  public base: number = 5;

  restOrSum: Function = (value: number): void => {
    this.counter += value;
  };
}
