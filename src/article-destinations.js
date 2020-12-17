import { LitElement, html, css } from 'lit-element';

import './article-destination.js';

class ArticleDestinations extends LitElement {
  static get styles() {
    return css`
      section {
        margin-bottom: var(--main-spacer);
      }
    `;
  }

  render() {
    return html`
      <section>
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
