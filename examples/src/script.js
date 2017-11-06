// Importing Vue and Vue plugins
import Vue from 'vue'

// Importing VueGoodshare popular providers components
import VueGoodshare from 'vue-goodshare'

// For localhost testing
// import VueGoodshare from '../../src/VueGoodshare.vue'

// Importing VueGoodshare only needed components
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'

// Init Vue app
const app = new Vue({
  el: '#app',
  components: {
    VueGoodshare,
    VueGoodshareFacebook
  }
})
