import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  getInfo(): string {
    return `${this.name} - ${this.age}`;
  }

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }
}
