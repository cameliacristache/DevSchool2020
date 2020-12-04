import {
  LitElement,
  html,
  css,
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

class AppHeader extends LitElement {
  static get styles() {
    return css`
      header {
        height: 50vh;
        background-color: var(--main-color);
        color: white;
        position: relative;
        margin-bottom: var(--main-spacer);
      }

      h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      nav {
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
        border: 1px solid white;
        margin: 0 15px;
        color: white;
      }

      nav a {
        min-width: 140px;
        padding: 10px 20px;
        color: inherit;
        text-decoration: none;
        display: flex;
        justify-content: center;
      }
    `;
  }

  render() {
    return html` <header>
      <nav>
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
      </nav>
      <h1>Travel website</h1>
    </header>`;
  }

  connectedCallback() {
    super.connectedCallback();

    // const iAmYoda = new Promise((resolve, reject) => {
    //   const person = 'Yoda';
    //   if (person === 'Yoda') {
    //     resolve('I am Yoda');
    //   } else {
    //     reject(`I am ${person}`);
    //   }
    // });

    // const promise2 = new Promise((resolve, reject) =>
    //   setTimeout(resolve, 700, 'not ok')
    // );

    // const promise3 = new Promise((resolve, reject) =>
    //   setTimeout(reject, 500, 'not super ok')
    // );

    // Promise.race([promise2, promise3])
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));

    this.getPosts();
    this.getPosts2();
  }

  async getPosts2() {
    const axios = window.axios;
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/anaaremere'
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    console.log('la sfarsitul metodei');
  }

  getPosts() {
    const axios = window.axios;

    // axios
    //   .get('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));

    // axios
    //   .post(
    //     'https://jsonplaceholder.typicode.com/posts',
    //     {
    //       title: 'foo',
    //       body: 'bar',
    //       userId: 1,
    //     },
    //     {
    //       headers: {
    //         'content-type': 'multipart/form-data',
    //         Authorization: 'Bearer  ceva-token',
    //       },
    //     }
    //   )
    //   .then((response) => console.log(response));

    // axios.request({
    //   url: 'https://jsonplaceholder.typicode.com/posts',
    //   method: 'POST',
    //   data: {
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    //   },
    // });

    // const request = axios.create({
    //   baseURL: 'https://jsonplaceholder.typicode.com/',
    //   timeout: 10000,
    //   headers: {
    //     Authorization: 'Bearer  ceva-token',
    //   },
    // });

    // request.get('posts').then((response) => console.log(response));

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    // const body = {
    //   title: 'foo',
    //   body: 'bar',
    //   userId: 1,
    // };

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'GET',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // })
    //   .then((response) => response.json())
    //   .then((response) => console.log(response));
  }
}

export default customElements.define('app-header', AppHeader);
