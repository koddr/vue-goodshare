<template>
  <div>
    <vue-goodshare-facebook has_icon has_counter title_social="Facebook"></vue-goodshare-facebook>
    <vue-goodshare-vkontakte has_icon has_counter title_social="Вконтакте"></vue-goodshare-vkontakte>
  </div>
</template>

<script>
  import VueGoodshareVkontakte from "./providers/Vkontakte.vue"
  import VueGoodshareFacebook from "./providers/Facebook.vue"
  
  export default {
    name: 'VueGoodshare',
    components: {
      VueGoodshareFacebook,
      VueGoodshareVkontakte
    }
  }
</script>
