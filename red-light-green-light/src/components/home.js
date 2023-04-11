import { LitElement, html, css } from 'lit';

export class Home extends LitElement {
  static properties = {
    homeTitle: { type: String },
    userName: { type: String },
  }

  constructor() {
    super();
    this.homeTitle = 'Create new player';
    this.userName = '';
    
  }

  static styles = css`
    .wallpaperContainer {
     
     margin: 1%;
     padding:5%;
     border-radius:1rem;
     
    }

    .input {
            top: 0px;
            left: 0px;
            height: 100%;
            width: 100%;
            border: 1px solid brown;
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
            margin-bottom: 15px;
            display:flex;
            margin-left: 15px;
        }
        ::placeholder {
            color: transparent;
        }

        .label {
            position: absolute;
            top: 15px;
            left: 30px;
            padding: 0 4px;
            background-color: white;
            color: brown;
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
            color: orange;
        }
        .input:focus {
            border: 2px solid orange;
        }

        .input:not(:placeholder-shown)+ .label {
            top: -7px;
            left: 3px;
            z-index: 10;
            font-size: 14px;
            font-weight: 600;
        }
        button {
            background-color: rgb(255 171 102 / 50%);
            border-radius: 1rem;
            padding: 0.5rem 0.5rem;
            margin: 2rem 1.2rem;
            border-color: transparent;
            outline: none;
            cursor: pointer;
            color: brown;
            
        }
    

  `;

  render() {
    return html`
    <div class="home-page-text">
      <h1>${this.homeTitle}</h1>
      <p> ${this.userName}</p>
    </div>
    <div class="form">
            <div class="containerForm">
                <div class="inputContainer">
                    <input type="text" class="input" placeholder="Name">
                    <label for="" class="label">Name</label>   
                </div> 
            </div>
            <div class="joinButton">
                <button  @click="${this.joinButton}"> JOIN</button>
                <a href="/profile">Start playing</a>
            
  </div>
    `;
    
  }
}

customElements.define('home-component', Home);

