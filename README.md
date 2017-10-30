<p align="center">
  <img src="https://user-images.githubusercontent.com/11155743/32192540-861b182a-bdc5-11e7-9867-3beca0163512.png" alt="vue-goodshare logo">
</p>

# vue-goodshare 
![npm version](https://badge.fury.io/js/vue-goodshare.svg) [![vue js site](https://img.shields.io/badge/Vue.js-2.2.x_or_newer-orange.svg?style=flat)](https://vuejs.org) [![licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat)](https://github.com/koddr/vue-goodshare/blob/master/LICENSE.md)

> Vue.js component for social share. A simple way to share a link on the pages of your website in the most popular social networks.

### Full Documentation & Demos

* [https://koddr.github.io/vue-goodshare/](https://koddr.github.io/vue-goodshare/)

### Requirements

* Vue.js >= 2.2.0

### Install component

```bash
$ npm i vue-goodshare --save
```

### Usage

* Init Vue.js and component in your main js file:

```javascript
import Vue from 'vue'
import VueGoodshareFacebook from 'vue-goodshare'

const app = new Vue({
  el: '#app',
  components: {
    VueGoodshareFacebook
  }
})
```

* Add component to html template (with attributes):

```html
<vue-goodshare-facebook 
  page_url="https://github.com" 
  title_social="Facebook"
  has_counter
  has_icon 
></vue-goodshare-facebook>
```

This will make beautiful share button for you, like:

<img width="164" alt="screen shot" src="https://user-images.githubusercontent.com/11155743/32195149-860cdb72-bdcd-11e7-97ac-c290535f0e62.png">

### Testing on localhost

* Clone repository from GitHub:

```bash
$ git clone https://github.com/koddr/vue-goodshare.git
```

* Go to `docs` folder:

```bash
$ cd vue-goodshare/docs
```

* Start simple Python 3.4+ HTTP server (only macOS and Linux):

```bash
$ python3 -m http.server 4000 --bind localhost
```

### Author & maintainers

Development and maintenance engaged by [Vic Shóstak](https://github.com/koddr) (aka Koddr).
If you want to say «thank you» and/or ask me about `vue-goodshare` — [create new issue](https://github.com/koddr/vue-goodshare/issues/new).

___
### Your assistance will help make project even better!

* [Donate with PayPal](https://www.paypal.me/koddr/9.99usd)
* [Donate with Yandex.Money](https://money.yandex.ru/to/41001601525977/599)

#### Thanks for supporting!
___

Powered by [goodshare.js](https://github.com/koddr/goodshare.js) project.
