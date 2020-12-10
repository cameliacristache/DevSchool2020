import {
  LitElement,
  html,
  css,
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

class AppFooter extends LitElement {
  static get styles() {
    return css`
      footer {
        padding: var(--secondary-spacer);
        text-align: center;
        font-size: 14px;
        color: white;
        background-color: var(--main-color);
      }
    `;
  }

  render() {
    return html` <footer>
      <p>&#169; 2020 Travel website - All rights reserved</p>
      <p>by Awesome DevSchoolers</p>
    </footer>`;
  }
}

export default customElements.define('app-footer', AppFooter);
