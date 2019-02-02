<template>
  <a class="button-social"
     :class="buttonSocialDesignObject"
     :page-url="page_url"
     :button-design="button_design"
     :title-social="title_social"
     :has-icon="has_icon"
     :has-square-edges="has_square_edges"
     @click.prevent="showShareWindow"
  >
    <i class="icon-whatsapp" v-if="this.$props.has_icon"></i>
    <span class="title-social" v-if="this.$props.title_social">{{ title_social }}</span>
  </a>
</template>

<script>
import { click } from '../helpers/events'
import { documentHref } from "../helpers/href";

export default {
  name: "VueGoodshareWhatsApp",
  props: {
    page_url: {
      type: String,
      default: documentHref
    },
    button_design: {
      type: String,
      default: () => "flat"
    },
    title_social: String,
    has_icon: Boolean,
    has_square_edges: Boolean
  },
  data() {
    return {
      buttonSocialDesignObject: {
        "button-social__square_edges": this.$props.has_square_edges,
        whatsapp__design__flat: this.$props.button_design === "flat",
        whatsapp__design__gradient: this.$props.button_design === "gradient",
        whatsapp__design__outline: this.$props.button_design === "outline"
      }
    };
  },
  methods: {
    /**
     * Show share window.
     *
     * @return {object} a pop-up window
     */
    showShareWindow: function() {
      click(this, 'whatsApp');
      // Variables
      const width = 640;
      const height = 640;
      let left = screen.width / 2 - width / 2;
      let top = screen.height / 2 - height / 2;
      const window_config =
        "width=" +
        width +
        ",height=" +
        height +
        ",left=" +
        left +
        ",top=" +
        top +
        ",";
      const share_url =
        "whatsapp://send?" + "text=" + encodeURIComponent(this.$props.page_url);

      return window.open(
        share_url,
        "Share this",
        window_config + "toolbar=no,menubar=no,scrollbars=no"
      );
    }
  }
};
</script>

<style scoped lang="scss">
// Fontello
@font-face {
  font-family: "Fontello";
  src: url("../fonts/fontello.eot?26533562");
  src: url("../fonts/fontello.eot?26533562#iefix") format("embedded-opentype"),
    url("../fonts/fontello.woff2?26533562") format("woff2"),
    url("../fonts/fontello.woff?26533562") format("woff"),
    url("../fonts/fontello.ttf?26533562") format("truetype"),
    url("../fonts/fontello.svg?26533562#fontello") format("svg");
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"]:before,
[class*=" icon-"]:before {
  font-family: "Fontello";
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: 0.2em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  margin-left: 0.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-whatsapp:before {
  content: "\f232";
}

// Colors
$whatsapp_main_color: rgb(7, 94, 84);
$gradient_color: rgb(37, 124, 114);
$background_white_color: rgb(254, 254, 254);
$text_white_color: rgb(254, 254, 254);

// Reset
.button-social * {
  box-sizing: border-box;
}

// Button Social link style
.button-social {
  display: inline-flex;
  cursor: pointer;
  padding: 7px 10px;
  margin: 3px 1.5px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}

// Button Social link style on hover
.button-social:hover {
  opacity: 0.9;
}

// Button Social round edges
.button-social__square_edges {
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}

// Button whatsapp style `flat`
.whatsapp__design__flat {
  background-color: $whatsapp_main_color;
  color: $text_white_color;
}

// Button whatsapp style `gradient`
.whatsapp__design__gradient {
  background-image: linear-gradient(
    to bottom,
    $whatsapp_main_color,
    $gradient_color
  );
  background-image: -moz-linear-gradient(
    to bottom,
    $whatsapp_main_color,
    $gradient_color
  );
  background-image: -o-linear-gradient(
    to bottom,
    $whatsapp_main_color,
    $gradient_color
  );
  background-image: -webkit-linear-gradient(
    to bottom,
    $whatsapp_main_color,
    $gradient_color
  );
  background-image: -ms-linear-gradient(
    to bottom,
    $whatsapp_main_color,
    $gradient_color
  );
  color: $text_white_color;
}

// Button whatsapp style `outline`
.whatsapp__design__outline {
  background-color: $background_white_color;
  border: 1px solid $whatsapp_main_color;
  color: $whatsapp_main_color;
}

// Title
.title-social {
  margin-left: 6px;
}
</style>
