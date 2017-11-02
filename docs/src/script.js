// Importing Vue and Vue plugins
import Vue from 'vue'

// Importing VueGoodshare components
import VueGoodshare from '../../src/VueGoodshare.vue'
import VueGoodshareFacebook from '../../src/providers/Facebook.vue'
import VueGoodshareVkontakte from '../../src/providers/Vkontakte.vue'
import VueGoodshareOdnoklassniki from '../../src/providers/Odnoklassniki.vue'
import VueGoodshareTwitter from "../../src/providers/Twitter.vue"
import VueGoodshareGooglePlus from '../../src/providers/GooglePlus.vue'

// Init Vue app
const app = new Vue({
  el: '#app',
  components: {
    VueGoodshare,
    VueGoodshareFacebook,
    VueGoodshareVkontakte,
    VueGoodshareOdnoklassniki,
    VueGoodshareTwitter,
    VueGoodshareGooglePlus
  }
})
