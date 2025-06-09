// webCompEx.ts
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactComp from './reactComp';


class WebCompEx extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const root = ReactDOM.createRoot(this.shadowRoot!);
    root.render(<ReactComp />);
  }
}

customElements.define('my-web-example', WebCompEx);
