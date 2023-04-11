import { LitElement, html, css } from 'lit';

export class Header extends LitElement {
  static properties = {
   header: {type:String},
   userName: {type:String}
  }

  constructor() {
    super();
    this.userName='';
  }

  static styles = css`
     .header {
        display:flex;
        justify-content:space-between;
        height:10%;
        background-color:#3195c7;
        color:#E0F0F3 ;
        padding:4%;
     }

     .exitButton {
        text-decoration:none;
     }
    `;


  

  render() {
    return html`
       <div class="header">
        <p>Hi !</p>
       <button class="exitButton"> <a href="/home">Home</a></button>
       
       </div>
      `;
  }
}
customElements.define('header-component', Header);