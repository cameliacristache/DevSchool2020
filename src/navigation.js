class Navigation extends HTMLElement {
  constructor() {
    super();

    const _style = document.createElement('style');
    const _nav = document.createElement('nav');
    _nav.innerHTML = `
		<ul>
			<li>
				<a href="index.html">home</a>
			</li>
			<li>
				<a href="destinations.html">destinations</a>
			</li>
			<li>
				<a href="#">language</a>
			</li>
		</ul>
		<slot name="title"></slot>`;

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(_nav);
    this._shadowRoot.appendChild(_style);
  }

  static get observedAttributes() {
    return ['color'];
  }

  connectedCallback() {
    console.log('hello from connected callback');
  }

  disconnectedCallback() {
    console.log('hello from disconnected');
  }

  adoptedCallback() {}

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('changed color', name, oldVal, newVal);
    this.updateStyle(this);
  }

  updateStyle(element) {
    const style = element.shadowRoot.querySelector('style');

    style.innerHTML = `nav {
			display: flex;
			justify-content: center;
			text-align: center;
		}
		
		nav ul {
			display: flex;
			list-style-type: none;
			margin-top: 40px;
		}
		
		nav li {
			border: 1px solid ${element.getAttribute('color')};
			margin: 0 15px;
			color: ${element.getAttribute('color')};
		}
		
		nav a {
			min-width: 140px;
			padding: 10px 20px;
			color: inherit;
			text-decoration: none;
			display: flex;
			justify-content: center;
		}`;
  }
}

export default customElements.define('navigation-element', Navigation);
