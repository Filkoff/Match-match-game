import { Component, RootElement } from './app.api';
import { Page } from './page/page';

export class App implements Component {
  private readonly application: HTMLDivElement;

  constructor(private readonly root: Element | null) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    this.application.innerHTML = 'hello from App';
    this.root?.appendChild(this.application);
    this.application.appendChild(new Page(this.application).render());

    return this.application;
  }
}
