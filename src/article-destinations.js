import {
  LitElement,
  html,
  css,
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

import './article-destination.js';

class ArticleDestinations extends LitElement {
  static get styles() {
    return css`
      section h2 {
        color: var(--main-color);
        text-align: center;
        font-weight: normal;
        margin-bottom: var(--secondary-spacer);
      }
      section {
        margin-bottom: var(--main-spacer);
        width: 80%;
      }
    `;
  }

  render() {
    return html`
      <section>
        <h2>Destinastions</h2>
        <article-destination id=${'1'}></article-destination>
        <article-destination id=${'2'}></article-destination>
        <article-destination id=${'3'}></article-destination>
        <article-destination id=${'4'}></article-destination>
        <article-destination id=${'5'}></article-destination>
        <article-destination id=${'6'}></article-destination>
        <article-destination id=${'7'}></article-destination>
      </section>
    `;
  }
}

export default customElements.define(
  'article-destinations',
  ArticleDestinations
);
