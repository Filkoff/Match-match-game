import './styles.scss';
import { App } from './app';
import { Header } from './shared/header';
import { Settings } from './components/settings/settings';
import { Scores } from './components/scores/scores';
import { Timer } from './components/timer/timer';
import { Registration } from './components/registration/registration';
import { Rules } from './components/rules/rules';

window.onload = () => {
  const appElement = document.getElementById('app');
  const header = new Header();
  const settings = new Settings();
  const scores = new Scores();
  const timer = new Timer();
  const registration = new Registration();
  const rules = new Rules();

  if (!appElement) throw Error('App root element not found');
  header.render(appElement);
  rules.render(appElement);
  const app = new App(appElement);

  const routing = [
    {
      name: 'scores',
      component: () => {
        app.clear();
        scores.render(appElement);
      },
    },
    {
      name: 'settings',
      component: () => {
        app.clear();
        settings.render(appElement);
      },
    },
    {
      name: 'registration',
      component: () => {
        app.clear();
        // if (registration.registered === true) {
        //   app.start();
        // } else {
          registration.render(appElement);
        // }
      },
    },
    {
      name: 'start',
      component: () => {
        app.clear();
        app.stop();
        app.start();
      },
    },
  ];

  const defaultRoute = {
    name: 'about',
    component: () => {
      app.clear();
      rules.render(appElement);
    },
  };

  window.onpopstate = () => {
    console.log(window.location.hash);
    const currentRouteName = window.location.hash.slice(1);
    const currentRoute = routing.find((p) => p.name === currentRouteName);
    (currentRoute || defaultRoute).component();
  };
};
