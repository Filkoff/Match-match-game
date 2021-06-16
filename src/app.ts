import { Game } from './components/game/game';
import { ImageCategoryModel } from './models/image-category-model';
import { Header } from './shared/header';
import { Registration } from './components/registration/registration';
import { Settings } from './components/settings/settings';

export class App {
  private readonly game: Game;

  private readonly header: Header;

  private registration: Registration;

  private settings: Settings;

  private type: string | null | undefined | HTMLElement;

  private val: string | null | undefined | HTMLElement;

  constructor(private readonly rootElement: HTMLElement) {
    this.registration = new Registration();
    this.header = new Header();
    this.game = new Game();
    this.settings = new Settings();
  }

  async start() {
    this.type = document.getElementById('difficulty');
    this.game.render(this.rootElement);
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const category = categories[1];
    const images = category.images.map((name) => `${category.category}/${name}`);
    this.game.newGame(images);
  }

  clear() {
    this.rootElement.innerHTML = '';
    this.header.render(this.rootElement);
  }

  register() {
    this.rootElement.appendChild(this.registration.element);
  }

  stop() {
    this.game.stopGame();
  }
}
