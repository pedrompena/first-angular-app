import { Component, Input} from '@angular/core';
import { DbzCharacter } from '../intefaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
})
export class CharacterFormComponent {
  @Input() newCharacter: DbzCharacter = { name: '', power: 0 };

  // @Output() onNewCharacter: EventEmitter<DbzCharacter> = new EventEmitter();

  add() {
    if (this.newCharacter.name.length > 0) {
      // this.onNewCharacter.emit(this.newCharacter);
      this.dbzService.addCharacter(this.newCharacter);
      this.newCharacter = { name: '', power: 0 };
    }
  }

  constructor(private dbzService: DbzService) {}
}
