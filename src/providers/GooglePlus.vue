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
    <i class="icon-googleplus" v-if="this.$props.has_icon"></i>
    <span class="title-social" v-if="this.$props.title_social">{{ title_social }}</span>
  </a>
</template>

<script>
import { documentHref } from "../helpers/href";

export default {
  name: "VueGoodshareGooglePlus",
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
        googleplus__design__flat: this.$props.button_design === "flat",
        googleplus__design__gradient: this.$props.button_design === "gradient",
        googleplus__design__outline: this.$props.button_design === "outline"
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
        "https://plus.google.com/share?" +
        "url=" +
        encodeURIComponent(this.$props.page_url);

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
  src: url("../fonts/fontello.eot?88483298");
  src: url("../fonts/fontello.eot?88483298#iefix") format("embedded-opentype"),
    url("../fonts/fontello.woff2?88483298") format("woff2"),
    url("../fonts/fontello.woff?88483298") format("woff"),
    url("../fonts/fontello.ttf?88483298") format("truetype"),
    url("../fonts/fontello.svg?88483298#fontello") format("svg");
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

.icon-googleplus:before {
  content: "\f0d5";
}

// Colors
$googleplus_main_color: rgb(221, 75, 57);
$gradient_color: rgb(251, 105, 87);
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

// Button googleplus style `flat`
.googleplus__design__flat {
  background-color: $googleplus_main_color;
  color: $text_white_color;
}

// Button googleplus style `gradient`
.googleplus__design__gradient {
  background-image: linear-gradient(
    to bottom,
    $googleplus_main_color,
    $gradient_color
  );
  background-image: -moz-linear-gradient(
    to bottom,
    $googleplus_main_color,
    $gradient_color
  );
  background-image: -o-linear-gradient(
    to bottom,
    $googleplus_main_color,
    $gradient_color
  );
  background-image: -webkit-linear-gradient(
    to bottom,
    $googleplus_main_color,
    $gradient_color
  );
  background-image: -ms-linear-gradient(
    to bottom,
    $googleplus_main_color,
    $gradient_color
  );
  color: $text_white_color;
}

// Button googleplus style `outline`
.googleplus__design__outline {
  background-color: $background_white_color;
  border: 1px solid $googleplus_main_color;
  color: $googleplus_main_color;
}

// Title
.title-social {
  margin-left: 6px;
}
</style>
