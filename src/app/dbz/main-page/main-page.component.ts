import { Component } from '@angular/core';

import { DbzCharacter } from '../intefaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  newCharacter: DbzCharacter = { name: '', power: 0 };

  constructor() {}
}
