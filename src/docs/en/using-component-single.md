# Single share element

Includes **only needed** social networks and/or mobile messengers.

> See lists of supported [Social networks](supported-social-networks.md), [Mobile messengers](supported-social-messengers.md) or [Misc components](supported-misc-components.md).

```js
// ./src/js/script.js

import Vue from "vue";

// Import vue-goodshare single elements
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";

const app = new Vue({
  el: "#app",
  components: {
    VueGoodshareFacebook
  }
});
```

Add components to HTML template (with attributes):

```html
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
