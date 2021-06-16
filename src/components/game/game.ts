import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { Timer } from '../timer/timer';
import { Settings } from '../settings/settings';
import './game.scss';
import { Button } from '../registration_button/button';

const FLIP_DELAY = 1000;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private timer: Timer;

  private comparesAmount = 0;

  private uncorrectCompares = 0;

  private correctCompares = 0;

  public score = 0;

  private activeCard?: Card;

  private isAnimation = false;

  private settings: Settings;

  public button: Button;

  constructor() {
    super();
    this.cardsField = new CardsField();
    this.timer = new Timer();
    this.element.appendChild(this.timer.element);
    this.element.appendChild(this.cardsField.element);
    this.settings = new Settings();

    this.button = new Button();
  }

  newGame(images: string[]) {
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => {
        this.cardHandler(card);
      });
    });

    this.cardsField.addCards(cards);
    this.timer.startTimer();
  }

  stopGame() {
    this.score = (this.comparesAmount - this.uncorrectCompares) * 100 - this.timer.counter * 10;
    if (this.score < 0) {
      this.score = 0;
    }
    console.log(this.score);
    this.cardsField.clear();
    this.comparesAmount = 0;
    this.uncorrectCompares = 0;
    this.correctCompares = 0;
    this.isAnimation = false;
    this.activeCard = undefined;
    this.isAnimation = false;
    this.timer.stopTimer();
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) {
      return;
    }
    this.isAnimation = true;

    await card.flipToFront();
    if (!this.activeCard) {
      this.activeCard = card;
      this.comparesAmount++;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      await delay(FLIP_DELAY);
      this.uncorrectCompares++;
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    }
    if (
      this.cardsField.cardsAmount <= 2 * (this.comparesAmount - this.uncorrectCompares)
      ) {
      this.timer.stopTimer();
      this.stopGame();
      this.element.innerHTML = `
        <div>Game over! Your result is ${this.score}</div>
      `;
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
