import {LitElement,html,css} from 'lit';
import {Router} from '@vaadin/router';
export class Game extends LitElement {
  static properties = {
    userName: {
      type: String
    },
    count: {
      type: Number
    },
    highestScore: {
      type: Number
    },
    currentImage: {
      type: Number
    },
    red: {
      type: Boolean
    },
  }

  constructor() {
    super();
    this.userName = '';
    this.count = 0;
    this.highScore = 1000;
    this.lastButton = null;
    this.currentImage = 0;
    this.intervalId = null;
    this.red = true;
  }

  connectedCallback() {

    super.connectedCallback();
    const matches = window.location.search.match(/\?user=(.+)/);
    if (matches && matches[1]) {
      this.userName = matches[1];
    } else {
      setTimeout(() => Router.go('/home'), 0);
    }

  }


  // greenLight = max(10000 - score * 100, 2000) + random(-1500, 1500)
  // 
  updated(changedProperties) {
    let timeOut = this.red ? 3000 : 10000;
    if (changedProperties.has('red')) {
      this.intervalId = setTimeout(() => {
        this.red = !this.red
      }, timeOut);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.intervalId);
  }

  leftButton() {
    this.clickButton('left');
  }
  rightButton() {
    this.clickButton('right');
  }
  clickButton(direction) {
    if (this.red) {
      this.count = 0;
    } else {
      if (direction === this.lastButton) {
        this.count -= 1;
      } else {
        this.count++;
      }
    }
    this.lastButton = direction;
  }




  static styles = css `
    .game-buttons {
        display:flex;
        justify-content:space-evenly;
        margin-left: 10%;
        margin-right: 10%;
        }

    button {
        width:60%;
        border-radius: 1rem;
        padding: 0.5rem 0.5rem;
        margin: 2rem 1.2rem;
        border-color: transparent;
        outline: none;
        cursor: pointer;
        background-color: #3195c7;
        color: #E0F0F3;
            
        }
    
    button:hover {
        background-color: #5bcdcf;
    }
    .game-text-container {
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:15%;
    }

    .traffic-light-image {
        display:flex;
        justify-content:center;
        padding:10%;
    }
    .high-score {
        font-size:100%;
    }

    .score {
        font-size:100%;
    }
    img {
        width:50%;
    }
  `;
  //update user name (line:82)
  render() {
    return html `
    <header-component .userName=${this.userName}></header-component> 

    <div class="game-text-container">
         <div class="high-score">
        Your highest score is:
        </div>
        <div class="traffic-light-image">
          
            ${this.red
            ? html`<img class="game-image" src="./assets/red.png" />`
            : html`<img class="game-image" src="./assets/green.png" />`}
            
        </div>
        <div class="score">
        <h1>Score: ${this.count}</h1>
        </div>
    </div>
   
    <div class="game-buttons">
      <button  @click="${this.leftButton}"> Left</button>
      <button  @click="${this.rightButton}"> Right</button>
    </div>
    `;

  }


}


customElements.define('game-component', Game);
