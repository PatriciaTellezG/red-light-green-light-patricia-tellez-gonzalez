import { LitElement, html, css } from 'lit';
import './components/home.js';
import './components/game.js';



import {Router} from "@vaadin/router";

 class RedLightGreenLight extends LitElement {
  static properties = {

  }

  static styles = css`
    
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
      {path: '/game', component: 'game-component'}
    ])
  }

}

customElements.define('red-light-green-light', RedLightGreenLight);