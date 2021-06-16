import './cards-field.scss';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';

const SHOW_TIME = 5;

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  public cardsAmount = 0;

  constructor() {
    super('div', ['cards-field']);
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]) {
    //
    this.cardsAmount = cards.length;
    //
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, SHOW_TIME * 1000);
  }
}
