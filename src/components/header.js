import {
  LitElement,
  html,
  css
} from 'lit';

export class Header extends LitElement {
  static get properties() {
    return {
        header: {
      type: String
    },
    userName: {
      type: String
    },
    }

  

  }

  constructor() {
    super();
    this.userName = '';

  }

  static get styles() {
    return css
    `
     .header {
        display:flex;
        justify-content:space-between;
        height:5%;
        background-color:#3195c7;
        color:#E0F0F3 ;
        padding:1%;
     }

     .exitButton {
        display:flex;
        justify-content:center;
        text-decoration:none;
        
     }
     a {
        text-decoration: none;
        display:flex;
        justify-content:flex-end;
          
        }
    .home-route-icon {
        width:20%;
        
    }
    .user-greeting {
        font-size:large;
    }
    `;

  }
 


  render() {
    return html `
    <div class="header">
        <p class="user-greeting">Hi ${this.userName}!</p>
        <div class="exitButton">
        <a href="/home"><img class="home-route-icon" src="./assets/home-route-icon.png" alt="home route"></a>
        </div>
       
       
    </div>
      `;
  }
}
customElements.define('header-component', Header);
