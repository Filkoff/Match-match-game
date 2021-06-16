import { BaseComponent } from '../base-component';
import './about.scss';

export class About extends BaseComponent {
  constructor() {
    super('div', ['about']);

    this.element.innerHTML = `
        <h2>Welcome to our game</h2>

            `;
  }
}
