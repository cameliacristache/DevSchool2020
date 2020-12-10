import {
  LitElement,
  html,
  css,
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

import './article-post.js';

class ArticlePosts extends LitElement {
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
        <article-post id=${'1'}></article-post>
        <article-post id=${'2'}></article-post>
        <article-post id=${'3'}></article-post>
      </section>
    `;
  }
}

export default customElements.define('article-posts', ArticlePosts);
