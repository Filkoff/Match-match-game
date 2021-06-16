import './rules.scss';
import { BaseComponent } from '../base-component';

export class Rules extends BaseComponent {
  constructor() {
    super('div', ['rules']);

    this.element.innerHTML = `
      <h3>Match-match game rules</h3>
      <div class="rules__list">
        <p>1. Configure your game settings</p>
        <p>2. Register new player in game</p>
        <p>3. Start you new game! Remember card positions and match it before times up</p>
      </div>
          `;
  }
}
