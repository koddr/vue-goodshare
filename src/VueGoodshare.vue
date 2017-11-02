<template>
  <div>
    <vue-goodshare-facebook has_icon has_counter title_social="Facebook"></vue-goodshare-facebook>
    <vue-goodshare-vkontakte has_icon has_counter title_social="Вконтакте"></vue-goodshare-vkontakte>
    <vue-goodshare-odnoklassniki has_icon has_counter title_social="Одноклассники"></vue-goodshare-odnoklassniki>
    <vue-goodshare-moi-mir has_icon title_social="Мой Мир@Mail.ru"></vue-goodshare-moi-mir>
    <vue-goodshare-google-plus has_icon title_social="Google Plus"></vue-goodshare-google-plus>
    <vue-goodshare-twitter has_icon title_social="Twitter"></vue-goodshare-twitter>
  </div>
</template>

<script>
  // Import VueGoodshare components
  import VueGoodshareVkontakte from "./providers/Vkontakte.vue"
  import VueGoodshareFacebook from "./providers/Facebook.vue"
  import VueGoodshareOdnoklassniki from "./providers/Odnoklassniki.vue"
  import VueGoodshareMoiMir from './providers/MoiMir.vue'
  import VueGoodshareTwitter from "./providers/Twitter.vue"
  import VueGoodshareGooglePlus from "./providers/GooglePlus.vue"
  
  export default {
    name: 'VueGoodshare',
    components: {
      VueGoodshareFacebook,
      VueGoodshareVkontakte,
      VueGoodshareOdnoklassniki,
      VueGoodshareMoiMir,
      VueGoodshareTwitter,
      VueGoodshareGooglePlus
    }
  }
</script>
