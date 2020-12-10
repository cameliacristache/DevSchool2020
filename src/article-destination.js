import {
  LitElement,
  html,
  css,
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

class ArticleDestination extends LitElement {
  static get properties() {
    return {
      id: {
        type: String,
      },
    };
  }

  static get styles() {
    return css`
      article {
        display: flex;
        margin-bottom: var(--secondary-spacer);
      }

      article div {
        flex: 1;
      }

      article img {
        margin-right: var(--secondary-spacer);
      }

      article h3 {
        color: var(--main-color);
        margin-bottom: var(--secondary-spacer);
      }

      article p {
        margin-bottom: var(--secondary-spacer);
      }

      article a {
        text-decoration: none;
      }
      article h3 {
        color: var(--main-color);
        margin-bottom: var(--secondary-spacer);
      }

      article p {
        margin-bottom: var(--secondary-spacer);
      }

      article a {
        text-decoration: none;
      }
    `;
  }

  render() {
    return html`
      <article>
        <img
          alt="article image"
          src="https://picsum.photos/300/200?${this.id}"
        />
        <div>
          <h3>Destination 1 title</h3>
          <p>Destination 1 description</p>
          <a href="destination.html">know more</a>
        </div>
      </article>
    `;
  }
}

export default customElements.define('article-destination', ArticleDestination);
