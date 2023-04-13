import { LitElement, html, css } from 'lit';
import {Router } from '@vaadin/router';
export class Game extends LitElement {
    static properties = {
        userName: { type: String },
        count: { type: Number },
        highestScore: { type: Number },
        red: { type: Boolean},
        currentImage: { type:Number },
           
      }
    
      constructor() {
        super();
        this.userName='';
        this.count = 0;
        this.highScore = 1000;
        this.red = false;
        this.lastButton=null;
        this.currentImage=0;

        }

    connectedCallback() {

    super.connectedCallback();
    const matches = window.location.search.match(/\?user=(.+)/);
    if (matches&&matches[1])  {
    this.userName =matches[1];
    } else {
        setTimeout(() => Router.go('/home'), 0);
    }
    }
    leftButton() {
        this.clickButton('left');
      }
      rightButton() {
        this.clickButton('right');
      }
      clickButton(direction) {
        console.log(direction);
        if (!this.last_button) {
          this.count++;
        }
        else{
          if (direction === this.lastButton) {
            this.count = 0;
            this.lastButton = null;
            return
          }else{
            this.count++;
          }
        }
        this.lastButton = direction;
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
//update user name (line:82)
render() {
    return html`
    <header-component .userName=${this.userName}></header-component> 

    <div class="game-text-container">
         <div class="high-score">
        Your highest score is:
        </div>
        <div class="traffic-light-image">
            ${this.red ? html`<img class="traffic-image" src="./assets/red.png" >` : html`<img class="traffic-image" src="./assets/green.png" >`}
            
            
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