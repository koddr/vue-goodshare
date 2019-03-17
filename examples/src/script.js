// Importing Vue and Vue plugins
import Vue from "vue";

// Importing VueGoodshare popular providers components
import VueGoodshare from "vue-goodshare";

// Importing VueGoodshare only needed components
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook";

// Init Vue app
const app = new Vue({
  el: "#app",
  components: {
    VueGoodshare,
    VueGoodshareFacebook
  }
});
