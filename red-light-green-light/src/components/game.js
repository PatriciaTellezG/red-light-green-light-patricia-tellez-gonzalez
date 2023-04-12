import { LitElement, html, css } from 'lit';

export class Game extends LitElement {
    static properties = {
        userName: { type: String }
      }

      
  constructor() {
    super();
   
    }

    static styles = css`
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

render() {
    return html`
    <header-component>HEADER</header-component>
    <div class="game-text-container">
         <div class="high-score">
        Your highest score is:
        </div>
        <div class="traffic-light-image">
            <img class="traffic-image" src="./assets/green.png" >
        </div>
        <div class="score">
            Score:
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