<template>
  <div>
    <vue-goodshare-facebook has_icon has_counter title_social="Facebook"></vue-goodshare-facebook>
    <vue-goodshare-vkontakte has_icon has_counter title_social="Вконтакте"></vue-goodshare-vkontakte>
    <vue-goodshare-odnoklassniki has_icon has_counter title_social="Одноклассники"></vue-goodshare-odnoklassniki>
  </div>
</template>

<script>
  // Import VueGoodshare components
  import VueGoodshareVkontakte from "./providers/Vkontakte.vue"
  import VueGoodshareFacebook from "./providers/Facebook.vue"
  import VueGoodshareOdnoklassniki from "./providers/Odnoklassniki.vue";
  
  export default {
    name: 'VueGoodshare',
    components: {
      VueGoodshareOdnoklassniki,
      VueGoodshareFacebook,
      VueGoodshareVkontakte
    }
  }
</script>
