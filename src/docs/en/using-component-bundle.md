# Bundle of share elements

Init bundle after Vue.js in your main JavaScript file:

```js
// ./src/js/script.js

import Vue from "vue";

// Import vue-goodshare bundle
import VueGoodshare from "vue-goodshare";

const app = new Vue({
  el: "#app",
  components: {
    VueGoodshare
  }
});
```

### The most popular social networks around the World

> Facebook, Twitter, LinkedIn, Google Plus, Tumblr, Pinterest, Reddit

Add component to HTML template (without attributes):

```html
<!-- ./index.html -->

<div id="app">

  <vue-goodshare></vue-goodshare>

</div>
```

And result is:

<img width="100%" alt="screen shot" src="https://user-images.githubusercontent.com/11155743/32456641-62592450-c337-11e7-8f75-61919301d6de.jpg">

### The most popular social networks in Russia (and the former CIS)

> Vkontakte, Odnoklassniki, Facebook, Twitter, Moi Mir@Mail.ru, LiveJournal

Add component to HTML template (with `bundle="ru"` attribute):

```html
<!-- ./index.html -->

<div id="app">

  <vue-goodshare bundle="ru"></vue-goodshare>

</div>
```

And result is:

<img width="100%" alt="screen shot" src="https://user-images.githubusercontent.com/11155743/32456560-204b9c28-c337-11e7-9e79-ad8d42d897b5.jpg">

> The name of the buttons will be in Russian.

### Only mobile messengers

> Telegram, Viber, WhatsApp, LINE

Add component to HTML template (with `bundle="mobile"` attribute):

```html
<!-- ./index.html -->

<div id="app">

  <vue-goodshare bundle="mobile"></vue-goodshare>

</div>
```

And result is:

<img width="100%" alt="screen shot" src="https://user-images.githubusercontent.com/11155743/32456459-c4bc8368-c336-11e7-8dde-74d2971c42af.jpg">
