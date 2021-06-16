import './registration.scss';
import { BaseComponent } from '../base-component';
import { StartButton } from '../start_button/start-button';
// import { Header } from '../../shared/header'
export class Registration extends BaseComponent {
  public registered = false;

  private isValid: boolean[] = [];

  private startButton: StartButton;

  // private header: Header;

  constructor() {
    super('form', ['form']);
    const form = this.element;
    // this.header = new Header;
    this.startButton = new StartButton();
    // form.setAttribute('action', '#start')
    const regexName = /^\d*[a-zA-Zа-яА-ЯёЁ\s][a-zA-Zа-яА-ЯёЁ\d\s]*$/;
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const name = document.createElement('input');
    // name.setAttribute('required', 'required');
    name.setAttribute('maxlength', '30');
    name.setAttribute('placeholder', 'Name');
    this.element.append(name);
    const nameLabel = document.createElement('small');
    // nameLabel.classList.add('nameLabel')
    this.element.append(nameLabel);
    const submitButton = document.createElement('button');
    submitButton.innerHTML = 'Register';
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('href', '#start');
    const lastName = document.createElement('input');
    this.element.append(lastName);
    // lastName.setAttribute('required', 'required');
    lastName.setAttribute('maxlength', '30');
    lastName.setAttribute('placeholder', 'Last name');
    const lastNameLabel = document.createElement('small');
    this.element.append(lastNameLabel);
    const email = document.createElement('input');
    this.element.append(email);
    email.setAttribute('maxlength', '30');
    email.setAttribute('placeholder', 'Email');
    const emailLabel = document.createElement('small');
    this.element.append(emailLabel);
    this.element.append(submitButton);
    const cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'Cancel';
    this.element.append(cancelButton);

    const registerModal = document.createElement('div');
    registerModal.classList.add('regmodal');
    registerModal.innerHTML = 'You have successfully registered!';

    cancelButton.onclick = () => {
      email.value = '';
      name.value = '';
      lastName.value = '';
    };

 function isEmail(emailString: string) {
      return regexEmail.test(emailString);
    }

    function isName(nameString: string) {
      return regexName.test(nameString);
    }

 function setErrorFor(input: HTMLElement, label: HTMLElement, message: string) {
      input.className = 'is-invalid';
      label.innerText = message;
    }

    function setSuccessFor(input: HTMLElement, label: HTMLElement) {
      input.className = 'is-valid';
      label.innerText = '';
    }

    function checkInputs() {
      let error = 0;
      const usernameValue = name.value;
      const userLastNameValue = lastName.value;
      const emailValue = email.value;

      if (usernameValue === '') {
        setErrorFor(name, nameLabel, 'Name cannot be blank');
        error++;
      } else if (!isName(usernameValue)) {
        setErrorFor(name, nameLabel, 'Incorrect name');
        error++;
      } else {
        setSuccessFor(name, nameLabel);
      }

      if (userLastNameValue === '') {
        setErrorFor(lastName, lastNameLabel, 'Last name cannot be blank');
        error++;
      } else if (!isName(userLastNameValue)) {
        setErrorFor(lastName, lastNameLabel, 'Incorrect last name');
        error++;
      } else {
        setSuccessFor(lastName, lastNameLabel);
      }

      if (emailValue === '') {
        setErrorFor(email, emailLabel, 'Email cannot be blank');
        error++;
      } else if (!isEmail(emailValue)) {
        setErrorFor(email, emailLabel, 'Incorrect email');
        error++;
      } else {
        setSuccessFor(email, emailLabel);
      }
      return error;
    }
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      checkInputs();
      const error = checkInputs();
      if (error === 0) {
        this.element.innerHTML = '';
        this.element.append(registerModal);
        this.startButton.activate();
        // this.startButton.render(this.element)
      }
    });
  }
}
