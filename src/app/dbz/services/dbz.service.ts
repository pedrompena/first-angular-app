import { Injectable } from '@angular/core';
import { DbzCharacter } from '../intefaces/dbz.interfaces';

@Injectable()
export class DbzService {
  private _characters: DbzCharacter[] = [
    { name: 'Krilin', power: 700 },
    { name: 'Goku', power: 10000 },
  ];

  get characters(): DbzCharacter[] {
    return [...this._characters];
  }

  constructor() {}

  addCharacter(character: DbzCharacter) {
    this._characters.push(character);
  }
}
