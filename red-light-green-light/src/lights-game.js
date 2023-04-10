import { LitElement, html, css } from 'lit';
import './components/home.js';
import './components/profile.js';


import {Router} from "@vaadin/router";

export class LightsGame extends LitElement {
  static properties = {

  }

  static styles = css`
    :host {
      min-height: 100vh;  
    }
  `;

  render() {
    return html`

    <div id="routes"> </div>
    `;
  }
  firstUpdated(){
    const output =  this.renderRoot.querySelector('#routes');
    const router = new Router(output);
    router.setRoutes([
      {path: '/', component: 'home-component'},
      {path: '/home', component: 'home-component'},
      {path: '/profile', component: 'profile-component'}
    ])
  }

}

customElements.define('lights-game', LightsGame);
