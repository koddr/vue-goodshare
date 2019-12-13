<h1 align="center">🍿 vue-goodshare</h1>
<h4 align="center">Vue.js component for share link to social networks and mobile messangers</h4>

<p align="center">
  <img width="100%" src="https://user-images.githubusercontent.com/11155743/32192540-861b182a-bdc5-11e7-9867-3beca0163512.png" alt="vue-goodshare logo">
</p>

<p align="center">
  <img src="https://badge.fury.io/js/vue-goodshare.svg" alt="npm version"/>
  <img src="https://img.shields.io/badge/Vue.js-2.5.x_or_newer-blue.svg?style=flat" alt="vue.js version"/>
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="code style: prettier"/>
  <img src="https://img.shields.io/badge/license-MIT-yellow.svg?style=flat" alt="license"/>
  <a href="https://twitter.com/intent/tweet?text=I%20found%20%40vuejs%20component%20for%20%23share%20a%20link%20from%20your%20%23website%20to%20%23social%20networks%20and%20mobile%20%23messengers%20%F0%9F%91%8D&url=https%3A%2F%2Fgithub.com%2Fkoddr%2Fvue-goodshare" target="_blank">
    <img src="https://img.shields.io/twitter/url/https/github.com/koddr/vue-goodshare.svg" alt="twit link"/>
  </a>
</p>

<p align="center">
  A simple way to share a link on the pages of your website in the most popular (and not so) social networks.<br/>
  Powered by <a href="https://github.com/koddr/goodshare.js">goodshare.js</a> project.
</p>

## The Why?

Vue.js-ready™ component. Simple install, **extensive documentation**, developer support, **SEO friendly**, many options for customization of appearance, **clean code without scripts tracking user activity** on the page, **high speed**.

Beautiful button design **already included**. Just choose one, add attribute to component and save!

## [Docs](https://koddr.github.io/vue-goodshare/)

## Installation

```console
foo@bar:~$ npm install --save vue-goodshare
```

## Usage

### Single share element

Includes **only needed** social networks or mobile messengers.

```js
/**
 * Import Vue.js
 */
import Vue from "vue";

/**
 * Import vue-goodshare single element
 */
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";

const app = new Vue({
  el: "#app",
  components: {
    VueGoodshareFacebook
  }
});
```

Add component to HTML template (with attributes):

```html
<div id="app">
  <vue-goodshare-facebook
    page_url="https://github.com/koddr/vue-goodshare"
    title_social="Facebook"
    has_counter
    has_icon
  ></vue-goodshare-facebook>
</div>
```

Result:

<img width="160" alt="screen shot" src="https://user-images.githubusercontent.com/11155743/32197328-d67af4f2-bdd4-11e7-8323-96d0d1376c5d.png">

### Bundle of share elements

> Facebook, Twitter, LinkedIn, Google Plus, Tumblr, Pinterest, Reddit

```js
/**
 * Import Vue.js
 */
import Vue from "vue";

/**
 * Import vue-goodshare bundle
 */
import VueGoodshare from "vue-goodshare";

const app = new Vue({
  el: "#app",
  components: {
    VueGoodshare
  }
});
```

Add components to HTML template (without attributes):

```html
<div id="app">
  <vue-goodshare></vue-goodshare>
</div>
```

Result:

<img width="100%" alt="screen shot" src="https://user-images.githubusercontent.com/11155743/32456641-62592450-c337-11e7-8f75-61919301d6de.jpg">

## Demo on `localhost`

```console
foo@bar:~$ git clone https://github.com/koddr/vue-goodshare.git
foo@bar:~$ cd vue-goodshare/examples
```

Start simple Python 3.4+ HTTP server (only macOS and Linux):

```console
foo@bar:~$ python3 -m http.server 4000 --bind localhost
```

## Developers

- Idea and active development by [Vic Shóstak](https://github.com/koddr) (aka Koddr).

## Project assistance

If you want to say «thank you» or/and support active development `vue-goodshare`:

1. Add a GitHub Star to project.
2. Twit about project [on your Twitter](https://twitter.com/intent/tweet?text=I%20found%20%40vuejs%20component%20for%20%23share%20a%20link%20from%20your%20%23website%20to%20%23social%20networks%20and%20mobile%20%23messengers%20%F0%9F%91%8D&url=https%3A%2F%2Fgithub.com%2Fkoddr%2Fvue-goodshare).
3. Donate some money to project author via PayPal: [@paypal.me/koddr](https://paypal.me/koddr?locale.x=en_EN).
4. Join DigitalOcean at our [referral link](https://m.do.co/c/b41859fa9b6e) (your profit is **$100** and we get $25).

Thanks for your support! 😘 Together, we make this project better every day.

## License

MIT
