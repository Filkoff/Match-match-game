import './settings.scss';
import { BaseComponent } from '../base-component';

const difficulty = document.getElementById('difficulty')?.nodeValue;

export class Settings extends BaseComponent {
  public difficulty: HTMLElement | null | undefined;

  public imgType = '';

  public el: HTMLElement | undefined | null;

  public butt: HTMLElement | undefined | null;

  constructor() {
    super('div', ['settings']);

    this.element.innerHTML = `
      <div class="settings__block">
        <select name="difficulty" id="dif">
          <option selected disabled>Select game difficulty</option>
          <option value="easy">4X4</option>
          <option value="hard">6X6</option>
        </select>
        <select name="imgType" id="imgType">
          <option selected disabled>Select game cards type</option>
          <option value="0">Animals</option>
          <option value="1">Cars</option>
        </select>
        </div>
      </div>
          `;
  }
}
