import {html} from "lit";
import "../src/components/home.js" ;
import { fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import { Router} from '@vaadin/router';


describe('home-component', () => {
  it('renders the correct default home title', async () => {
    const el = await fixture(html`<home-component></home-component>`);
    expect(el.homeTitle).to.equal('Write your name and start to play!');
  });

  it('renders the correct username when input is provided', async () => {
    const el = await fixture(html`<home-component></home-component>`);
    const routerGoStub = stub(Router,"go")
    const inputEl = el.shadowRoot.querySelector('#input');
    inputEl.value = 'Test User';
    await el.updateComplete
    const buttonEl = el.shadowRoot.querySelector('button');
    buttonEl.click();
    expect(routerGoStub.calledOnce).to.be.true;
  });
});
