import { LitElement, html, css } from 'lit';

export class Game extends LitElement {
    static properties = {
        
      }

      
  constructor() {
    super();
   
    }

    static styles = css`
    
  `;

render() {
    return html`
    <header-component>HEADER</header-component>
    `;
    
  }

}


customElements.define('game-component', Game);