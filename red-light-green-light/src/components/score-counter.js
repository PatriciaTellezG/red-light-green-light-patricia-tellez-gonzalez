import { LitElement, html } from 'lit-element';

class ScoreCounter extends LitElement {
  static get properties() {
    return {
      count: { type: Number }
    };
  }

  constructor() {
    super();
    this.count = 0;
    this.lastButton = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('button-clicked', this.handleButtonClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('button-clicked', this.handleButtonClick);
  }

  render() {
    return html`
      <h1>Score: ${this.count}</h1>
    `;
  }

  handleButtonClick = event => {
    const buttonId = event.detail;
    if (this.lastButton === buttonId) {
      this.count = 0;
    } else {
      this.count++;
    }
  }
}
  
customElements.define('score-counter', ScoreCounter);