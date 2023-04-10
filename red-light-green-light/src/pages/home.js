import { LitElement, html, css } from 'lit';

export class Home extends LitElement {
  static properties = {
    homeTitle: { type: String },
    userName: { type: String },
  }

  constructor() {
    super();
    this.homeTitle = 'Home';
    this.userName = 'Chloe';
    
  }

  static styles = css`
    .wallpaperContainer {
     
     margin: 1%;
     padding:5%;
     border-radius:1rem;
     
    }
  `;

  render() {
    return html`
    <div class="wallpaperContainer">
      <h1>${this.homeTitle}</h1>
      <p>¡Bienvenida ${this.userName}!</p>
    </div>`;
  }
}

customElements.define('home-component', Home);

