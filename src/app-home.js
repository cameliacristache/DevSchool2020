import { LitElement, html, css } from 'lit-element';

import './app-header.js';
import './app-footer.js';
import './article-posts.js';
import './article-destinations.js';

class AppHome extends LitElement {
  static get styles() {
    return css`
      section {
        margin-bottom: var(--main-spacer);
      }

      section h2 {
        color: var(--main-color);
        text-align: center;
        font-weight: normal;
        margin-bottom: var(--secondary-spacer);
      }

      section > p {
        text-align: center;
      }
    `;
  }
  render() {
    return html`
      <app-header></app-header>
      <main>
        <section>
          <h2>Suggestive Subtitle</h2>
          <p>Some description</p>
        </section>
        <article-posts></article-posts>
        <!-- switch between posts and destinations -->
        <!-- <article-destinations></article-destinations> -->
      </main>
      <app-footer></app-footer>
    `;
  }
}

export default customElements.define('app-home', AppHome);
