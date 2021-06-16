import './start-button.scss';
import { BaseComponent } from '../base-component';
// import { Registration } from '../registration/registration';

export class StartButton extends BaseComponent {
  // private registration: Registration;

  constructor() {
    super('a', ['start-button']);
    this.element.setAttribute('href', '#start');
    // this.element.classList.add('disabled')
    this.element.innerHTML = 'start';
    // this.registration = new Registration();
  }

  activate() {
    this.element.classList.remove('disabled');
  }
}
