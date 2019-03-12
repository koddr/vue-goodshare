<template>
  <a class="button-social"
     :class="buttonSocialDesignObject"
     :page-url="page_url"
     :page-title="page_title"
     :page-description="page_description"
     :button-design="button_design"
     :title-social="title_social"
     :has-icon="has_icon"
     :has-square-edges="has_square_edges"
     :has-counter="has_counter"
     @click.prevent="showShareWindow"
  >
    <i class="icon-tumblr" v-if="this.$props.has_icon"></i>
    <span class="title-social" v-if="this.$props.title_social">{{ title_social }}</span>
    <span class="counter-tumblr"
          v-model="counter_tumblr"
          v-if="this.$props.has_counter"
    >{{ counter_tumblr }}</span>
  </a>
</template>

<script>
import { click } from '../helpers/events'
import { documentHref } from "../helpers/href";
import { documentTitle } from "../helpers/title";
import { metaDescription } from "../helpers/description";

export default {
  name: "VueGoodshareTumblr",
  props: {
    page_url: {
      type: String,
      default: documentHref
    },
    page_title: {
      type: String,
      default: documentTitle
    },
    page_description: {
      type: String,
      default: metaDescription
    },
    button_design: {
      type: String,
      default: () => "flat"
    },
    title_social: String,
    has_icon: Boolean,
    has_square_edges: Boolean,
    has_counter: Boolean
  },
  data() {
    return {
      buttonSocialDesignObject: {
        "button-social__square_edges": this.$props.has_square_edges,
        tumblr__design__flat: this.$props.button_design === "flat",
        tumblr__design__gradient: this.$props.button_design === "gradient",
        tumblr__design__outline: this.$props.button_design === "outline"
      },
      counter_tumblr: 0
    };
  },
  methods: {
    /**
     * Get a random integer between `min` and `max`.
     *
     * @param {number} min - min number
     * @param {number} max - max number
     * @return {number} a random integer
     */
    getRandomInt: (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },

    /**
     * Slice thousand integer and add `k` letter.
     *
     * @param {number} number - thousand integer
     * @return {string} a integer with letter
     */
    sliceThousandInt: number => {
      return (number / 1000).toFixed(1) + "k";
    },

    /**
     * Show share window.
     *
     * @return {object} a pop-up window
     */
    showShareWindow: function() {
      click(this, 'tumblr');
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
        "https://www.tumblr.com/widgets/share/tool?" +
        "canonicalUrl=" +
        encodeURIComponent(this.$props.page_url) +
        "&title=" +
        encodeURIComponent(this.$props.page_title) +
        "&caption=" +
        encodeURIComponent(this.$props.page_description) +
        "&posttype=link";

      return window.open(
        share_url,
        "Share this",
        window_config + "toolbar=no,menubar=no,scrollbars=no"
      );
    },

    /**
     * Get share counter.
     *
     * @return {object} a share counter
     */
    getShareCounter: function() {
      // Variables
      const script = document.createElement("script");
      const callback = "vue_goodshare_" + this.getRandomInt(1, 2345);

      // Create `script` tag with share count URL
      script.src =
        "https://api.tumblr.com/v2/share/stats?" +
        "url=" +
        encodeURIComponent(this.$props.page_url) +
        "&callback=" +
        callback;

      // Add `script` tag with share count URL
      // to end of `body` tag
      document.body.appendChild(script);

      // Set share count to `counter_tumblr` v-model
      window[callback] = count => {
        if (count) {
          this.counter_tumblr =
            count.response.note_count >= 1000
              ? this.sliceThousandInt(count.response.note_count)
              : count.response.note_count;
        }
      };
    }
  },
  mounted() {
    // Show share counter when page loaded
    if (this.$props.has_counter) this.getShareCounter();
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

.icon-tumblr:before {
  content: "\e80a";
}

// Colors
$tumblr_main_color: rgb(53, 70, 92);
$tumblr_main_color_opacity: rgba(53, 70, 92, 0.5);
$gradient_color: rgb(83, 100, 122);
$background_white_color: rgb(254, 254, 254);
$text_white_color: rgb(254, 254, 254);
$text_white_color_opacity: rgba(254, 254, 254, 0.5);

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

// Button tumblr style `flat`
.tumblr__design__flat {
  background-color: $tumblr_main_color;
  color: $text_white_color;
}

// Button tumblr style `gradient`
.tumblr__design__gradient {
  background-image: linear-gradient(
    to bottom,
    $tumblr_main_color,
    $gradient_color
  );
  background-image: -moz-linear-gradient(
    to bottom,
    $tumblr_main_color,
    $gradient_color
  );
  background-image: -o-linear-gradient(
    to bottom,
    $tumblr_main_color,
    $gradient_color
  );
  background-image: -webkit-linear-gradient(
    to bottom,
    $tumblr_main_color,
    $gradient_color
  );
  background-image: -ms-linear-gradient(
    to bottom,
    $tumblr_main_color,
    $gradient_color
  );
  color: $text_white_color;
}

// Button tumblr style `outline`
.tumblr__design__outline {
  background-color: $background_white_color;
  border: 1px solid $tumblr_main_color;
  color: $tumblr_main_color;
}

// Title
.title-social {
  margin-left: 0;
}

// Counter
.counter-tumblr {
  margin-left: 6px;
  padding-left: 6px;
}

.tumblr__design__flat .counter-tumblr,
.tumblr__design__gradient .counter-tumblr {
  border-left: 1px solid $text_white_color_opacity;
}

.tumblr__design__outline .counter-tumblr {
  border-left: 1px solid $tumblr_main_color_opacity;
}
</style>
