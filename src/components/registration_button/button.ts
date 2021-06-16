import './button.scss';
import { BaseComponent } from '../base-component';
import { Registration } from '../registration/registration';

export class Button extends BaseComponent {
  private registration: Registration;

  constructor() {
    super('a', ['button']);
    this.element.setAttribute('href', '#registration');
    this.registration = new Registration();
    if (this.registration.registered) {
      this.element.innerHTML = 'start game';
    } else if (!this.registration.registered) {
      this.element.innerText = 'register';
    }
  }
}
