# Installation

> Require: Vue.js >= 2.4.0

### npm

Install component via `npm`:

``` bash
$ npm install vue-goodshare --save
```

Init [Vue.js](https://github.com/vuejs/vue) and `vue-goodshare` component in your main JavaScript file. There is two way to do this.

### Init full package of share elements

Includes **all** of social share and mobile messengers providers.

``` js
// ./src/js/script.js

import Vue from 'vue'
import VueGoodshare from 'vue-goodshare'

const app = new Vue({
  el: '#app',
  components: {
    VueGoodshare
  }
})
```

### Init single share element

Includes **only needed** social share and/or mobile messengers providers.

``` js
// ./src/js/script.js

import Vue from 'vue'
import { VueGoodshareFacebook } from 'vue-goodshare'

const app = new Vue({
  el: '#app',
  components: {
    VueGoodshareFacebook
  }
})
```
