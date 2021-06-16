import './header.scss';
import { BaseComponent } from '../components/base-component';
import { Button } from '../components/registration_button/button';
import { StartButton } from '../components/start_button/start-button';

export class Header extends BaseComponent {
  private button: Button;

  private startButton: StartButton;

  constructor() {
    super('div', ['header']);
    this.button = new Button();
    this.startButton = new StartButton();

    this.element.innerHTML = `
    <div class="logo">
      <a href="#about">match<span class="logo__bg">match</span></a>
    </div>
    <div class="navigation">
      <nav>
        <ul class="navigation__list">
          <li class="navigation__item" id="about"><a href="#about">About Game</a></li>
          <li class="navigation__item" id="csores" ><a href="#scores">Best Scores</a></li>
          <li class="navigation__item" id="settings"><a href="#settings">Game Settings</a></li>
        </ul>
      </nav>
    </div>
   `;
    const buttonsBlock = this.element.querySelector('#buttons');
    this.element.appendChild(this.button.element);
    this.element.appendChild(this.startButton.element);
  }
}
