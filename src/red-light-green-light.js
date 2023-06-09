import {
  LitElement,
  html,
} from 'lit';
import './components/home.js';
import './components/game.js';
import './components/header.js';

import {
  Router
} from "@vaadin/router";

class RedLightGreenLight extends LitElement {

  render() {
    return html `
    
    <div id="routes"> </div>
    `;
  }
  firstUpdated() {
    const output = this.renderRoot.querySelector('#routes');
    const router = new Router(output);
    router.setRoutes([{
        path: '/',
        component: 'home-component'
      },
      {
        path: '/home',
        component: 'home-component'
      },
      {
        path: '/game',
        component: 'game-component'
      },
      {
        path: '(.*)',
        component: 'home-component'
      }
    ])
  }

}

customElements.define('red-light-green-light', RedLightGreenLight);
