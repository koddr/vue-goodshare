<p align="center">
  <img src="https://user-images.githubusercontent.com/11155743/32192540-861b182a-bdc5-11e7-9867-3beca0163512.png" alt="vue-goodshare logo">
</p>

# vue-goodshare

![npm version](https://badge.fury.io/js/vue-goodshare.svg) [![vue js site](https://img.shields.io/badge/Vue.js-2.4.x_or_newer-blue.svg?style=flat)](https://vuejs.org) [![license](https://img.shields.io/badge/license-MIT-red.svg?style=flat)](https://github.com/koddr/vue-goodshare/blob/master/LICENSE)

> Vue.js component for social share. A simple way to share a link on the pages of your website in the most popular (and not so) social networks. Powered by [goodshare.js](https://github.com/koddr/goodshare.js) project.

### Features

Simple install, extensive documentation, developer support, **SEO friendly**, many options for customization of appearance, **clean code without scripts tracking user activity** on the page, **high speed**.

Beautiful button design **already included**. Just choose one, add attribute to component and save!

### Full Documentation

* [https://koddr.github.io/vue-goodshare/](https://koddr.github.io/vue-goodshare/)

### Requirements

* Vue.js >= 2.4.0
* vue-style-loader >= 3.0.0
* css-loader >= 0.28.0
* sass-loader >= 6.0.0
* node-sass >= 4.6.0

### Install component

``` bash
$ npm install vue-goodshare --save
```

## Usage

Init `vue-goodshare` component after [Vue.js](https://github.com/vuejs/vue) in your main JavaScript file. There is two way to do this.

### Single share element

Includes **only needed** social networks and/or mobile messengers.

``` js
// ./src/js/script.js

import Vue from 'vue'

// Import vue-goodshare single elements
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'

const app = new Vue({
  el: '#app',
  components: {
    VueGoodshareFacebook
  }
})
```

Add components to HTML template (with attributes):

``` html
<!-- ./index.html -->

<div id="app">

  <vue-goodshare-facebook 
    page_url="https://github.com" 
    title_social="Facebook"
    has_counter
    has_icon 
  ></vue-goodshare-facebook>
  
</div>
```

And result is:

<img width="160" alt="screen shot" src="https://user-images.githubusercontent.com/11155743/32197328-d67af4f2-bdd4-11e7-8323-96d0d1376c5d.png">

### Bundle of share elements

> Facebook, Twitter, LinkedIn, Google Plus, Tumblr, Pinterest, Reddit

``` js
// ./src/js/script.js

import Vue from 'vue'

// Import vue-goodshare bundle
import VueGoodshare from 'vue-goodshare'

const app = new Vue({
  el: '#app',
  components: {
    VueGoodshare
  }
})
```

Add component to HTML template (without attributes):

``` html
<!-- ./index.html -->

<div id="app">

  <vue-goodshare></vue-goodshare>

</div>
```

And result is:

<img width="100%" alt="screen shot" src="https://user-images.githubusercontent.com/11155743/32456641-62592450-c337-11e7-8f75-61919301d6de.jpg">

### Live demo & Testing on localhost

* Clone repository from GitHub:

``` bash
$ git clone https://github.com/koddr/vue-goodshare.git
```

* Go to `examples` folder:

``` bash
$ cd vue-goodshare/examples
```

* Start simple Python 3.4+ HTTP server (only macOS and Linux):

``` bash
$ python3 -m http.server 4000 --bind localhost
```

### Author & maintainers

Development and maintenance engaged by [Vic Shóstak](https://github.com/koddr) (aka Koddr).
If you want to say «thank you» and/or ask me about `vue-goodshare` — [create new issue](https://github.com/koddr/vue-goodshare/issues/new).

___
> ### Your assistance will help make project even better!
>
> * [Donate with PayPal](https://www.paypal.me/koddr/9.99usd)
> * [Donate with Yandex.Money](https://money.yandex.ru/to/41001601525977/599)
>
> #### Thanks for supporting!
___

### License

[The MIT License (MIT)](https://github.com/koddr/vue-goodshare/blob/master/LICENSE)
