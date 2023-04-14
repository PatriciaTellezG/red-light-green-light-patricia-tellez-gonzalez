import {html} from "lit";
import "../src/components/game.js" ;
import { fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import {Router} from '@vaadin/router';



describe('game-component', () => {
    let element;
    beforeEach(async () => {
      element = await fixture(html`<game-component></game-component>`);
    });
  
    it('should initialize properties', () => {
      expect(element.userName).to.equal('');
      expect(element.count).to.equal(0);
      expect(element.highestScore).to.equal(0);
      expect(element.currentImage).to.equal(0);
      expect(element.red).to.be.true;
    });
  
    it('should render the game component', async () => {
      const userName = 'testUser';
      element.userName = userName;
      await element.updateComplete;
      const headerComponent = element.shadowRoot.querySelector('header-component');
      expect(headerComponent.getAttribute('userName')).to.equal(userName);
      const buttons = element.shadowRoot.querySelectorAll('.game-buttons button');
      expect(buttons).to.have.length(2);
    });
  });

  