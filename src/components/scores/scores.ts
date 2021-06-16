import './scores.scss';
import { BaseComponent } from '../base-component';

export class Scores extends BaseComponent {
  constructor() {
    super('div', ['scores']);

    this.element.innerHTML = `
      <h3>Best results</h3>
      <div class="scores__best">
        <p>1 Player1-------------  0</p>
        <p>2 Player2-------------  0</p>
        <p>3 Player2-------------  0</p>
      </div>
          `;
  }
}
