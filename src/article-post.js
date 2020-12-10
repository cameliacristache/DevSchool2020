import {
  LitElement,
  html,
  css,
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

class ArticlePost extends LitElement {
  static get properties() {
    return {
      id: {
        type: String,
      },
    };
  }

  static get styles() {
    return css`
      article > picture {
        display: flex;
        flex: 0 1 55vw;
      }

      article > div {
        flex: 1 0 auto;
        padding: 10vw;
      }

      picture img {
        object-fit: cover;
        width: 100%;
      }

      article h3 {
        margin-bottom: var(--secondary-spacer);
        font-size: 24px;
      }

      article {
        display: flex;
        background-color: #f0f0f0;
      }

      :host(:nth-of-type(2n)) article {
        flex-direction: row-reverse;
      }
    `;
  }

  render() {
    return html`
      <article>
        <picture>
          <source
            srcset="https://picsum.photos/900/500?${this.id}"
            type="image/jpeg"
          />
          <img
            src="https://picsum.photos/900/500?${this.id}"
            alt="article image"
          />
        </picture>
        <div>
          <h3>Article 1 title</h3>
          <h4>Article 1 subtitle</h4>
          <p>Article 1 description</p>
        </div>
      </article>
    `;
  }
}

export default customElements.define('article-post', ArticlePost);
