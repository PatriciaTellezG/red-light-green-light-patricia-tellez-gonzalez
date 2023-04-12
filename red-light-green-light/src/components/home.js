import { LitElement, html, css } from 'lit';

export class Home extends LitElement {
  static properties = {
    homeTitle: { type: String },
    userName: { type: String }
  }

  constructor() {
    super();
    this.homeTitle = 'Write your name and start to play!';
    this.userName = '';
    
  }

  getUserName() {
   const inputValue = this.shadowRoot.querySelector('#input').value;
   const event = new CustomEvent('user-name-input',{detail: inputValue, bubbles: true, composed: true});
   this.dispatchEvent(event);
   debugger

    
  }

  static styles = css`
    @media screen and (min-width:400px){

    }
    @media screen and (max-width:1200px){
      
    }

    h1 {
      display: flex;
      justify-content:center;
      padding: 10px;
     
    }

    .welcome-icon {
      display:flex;
      justify-content:center;
      width: 10rem;
      padding: 5%;
      
    }
    .home-page-text {
      display:flex;
      flex-direction:column;
      align-items:center;
    }
    .input {
            top: 0px;
            left: 0px;
            height: 100%;
            width: 75%;
            border: 2px solid #3195c7;
            border-radius: 7px;
            font-size: 16px;
            padding: 0 20px;
            outline: none;
            background: none;
           
        }
        .inputContainer {
            position: relative; 
            height: 45px;
            width: 90%;
            display:flex;
            margin-left: 10%;
            
        }
        ::placeholder {
            color: transparent;
        }

        .label {
            position: absolute;
            top: 15px;
            left: 30px;
            padding: 0 4px;
            background-color: #E0F0F3 ;
            color: #3195c7 ;
            font-size: 16px;
            transition: 0.5s;
            z-index: 0;
            margin-left:10px;
        }

        .input:focus + .label {
            top: -7px;
            left: 30px;
            z-index: 10;
            font-size: 14px;
            font-weight: 600;
            color: #35DCD9 ;
        }
        .input:focus {
            border: 2px solid #35DCD9 ;
        }

        .input:not(:placeholder-shown)+ .label {
            top: -7px;
            left: 3px;
            z-index: 10;
            font-size: 14px;
            font-weight: 600;
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
        
        }

        button:hover {
            background-color: #5bcdcf;
        }
        .joinButton {
          display:flex;
          justify-content:center;
          margin-left: 10%;
          margin-right: 10%;
          padding:5%;
        }
        a {
          text-decoration: none;
          color: #E0F0F3;
          font-weight:400;
          
        }
  `;

      
  render() {
    return html`
    
    <div class="home-page-text">
      <h1>${this.homeTitle}</h1>
      <img class="welcome-icon" src="./assets/welcome.png" >
    </div>
    <div class="form">
            <div class="containerForm"> 
                <div class="inputContainer">
                    <input id="input" type="text" class="input" placeholder="Name" required >
                    <label for="" class="label">Name</label>   
                </div> 
            </div>
            <div class="joinButton">
                <button @click="${this.getUserName}"> <a href="/game">JOIN</a></button>
            </div>
               
            
  </div>
    `;
    
  }
}


customElements.define('home-component', Home);

