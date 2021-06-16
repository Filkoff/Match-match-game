export class BaseComponent {
  readonly element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', styles: string[] = []) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
  }

  render(rootElement: HTMLElement): void {
    rootElement.appendChild(this.element);
  }
}
