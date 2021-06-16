import './timer.scss';
import { BaseComponent } from '../base-component';

const TIMER_DELAY = 5000;

export class Timer extends BaseComponent {
  private seconds = 0;

  private minutes = 0;

  private displaySeconds = '';

  private displayMinutes = '';

  public counter = 0;

  private timerId: number | undefined;

  constructor() {
    super('div', ['timer']);
  }

  startTimer() {
    this.element.innerHTML = 'Ready?';
    window.clearInterval(this.timerId);
    setTimeout(() => {
      this.seconds = 0;
      this.element.innerHTML = 'Go!';
      this.timerId = window.setInterval(() => {
        if (this.seconds / 60 === 1) {
          this.minutes++;
          this.seconds = 0;
        }
        if (this.seconds < 10) {
          this.displaySeconds = `0${this.seconds.toString()}`;
        } else {
          this.displaySeconds = this.seconds.toString();
        }
        if (this.minutes < 10) {
          this.displayMinutes = `0${this.minutes.toString()}`;
        } else {
          this.displayMinutes = this.minutes.toString();
        }
        this.element.innerHTML = `Your time: ${this.displayMinutes}:${this.displaySeconds}`;
        this.seconds++;
        this.counter++;
      }, 1000);
    }, TIMER_DELAY);
  }

  stopTimer() {
    window.clearInterval(this.timerId);
    this.element.innerHTML = `Your result time is ${this.displayMinutes}:${this.displaySeconds}`;
    this.seconds = 0;
  }
}
