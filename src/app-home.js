import { LitElement, html, css } from 'lit-element';

import './app-header.js';
import './app-footer.js';
import './article-posts.js';
import './article-destinations.js';

class AppHome extends LitElement {
  constructor() {
    super();

    this._theme = localStorage.getItem('theme') || 'light';
  }

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

  static get properties() {
    return {
      _theme: { type: String },
    };
  }

  updated(changedProperties) {
    if (changedProperties.has('_theme') && this._theme !== 'undefined') {
      this._updateTheme();
    }
  }

  render() {
    return html`
      <app-header>
        <label>
          <input
            type="checkbox"
            @change=${this._toggleTheme}
            ?checked=${this._theme === 'dark'}
          />
          Use dark theme?
        </label>
      </app-header>
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

  _toggleTheme() {
    this._theme = this._theme === 'dark' ? 'light' : 'dark';
  }

  _updateTheme() {
    document.head.querySelector(`link[data-theme]`)?.remove();

    const themeStyle = document.createElement('link');
    themeStyle.rel = 'stylesheet';
    themeStyle.dataset.theme = this._theme;
    themeStyle.href = `css/${this._theme}.css`;
    document.head.appendChild(themeStyle);

    localStorage.setItem('theme', this._theme);
  }
}

export default customElements.define('app-home', AppHome);
