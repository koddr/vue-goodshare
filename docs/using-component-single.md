# Single share element

Includes **only needed** social networks or mobile messengers.

``` js hl_lines="9 14"
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

``` html hl_lines="4 5 6 7 8 9"
<!-- ./index.html -->

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