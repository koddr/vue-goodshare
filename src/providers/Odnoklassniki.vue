<template>
  <a
    class="button-social"
    :class="buttonSocialDesignObject"
    :page-url="page_url"
    :page-title="page_title"
    :button-design="button_design"
    :title-social="title_social"
    :has-square-edges="has_square_edges"
    :has-icon="has_icon"
    :has-counter="has_counter"
    @click.prevent="showShareWindow"
  >
    <i class="icon-odnoklassniki" v-if="this.$props.has_icon"></i>
    <span class="title-social" v-if="this.$props.title_social">{{
      title_social
    }}</span>
    <span
      class="counter-odnoklassniki"
      v-model="counter_odnoklassniki"
      v-if="this.$props.has_counter"
    >
      {{ counter_odnoklassniki }}
    </span>
  </a>
</template>

<script>
import { clickEvent } from "../helpers/events";
import { documentHrefWithoutHash } from "../helpers/href";
import { documentTitle } from "../helpers/title";

export default {
  name: "VueGoodshareOdnoklassniki",
  props: {
    page_url: {
      type: String,
      default: documentHrefWithoutHash
    },
    page_title: {
      type: String,
      default: documentTitle
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
        odnoklassniki__design__flat: this.$props.button_design === "flat",
        odnoklassniki__design__gradient:
          this.$props.button_design === "gradient",
        odnoklassniki__design__outline: this.$props.button_design === "outline"
      },
      counter_odnoklassniki: 0
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
      click(this, "odnoklassniki");
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
        top;
      const share_url =
        "https://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1" +
        "&st._surl=" +
        encodeURIComponent(this.$props.page_url) +
        "&st.comments=" +
        encodeURIComponent(this.$props.page_title);

      return window.open(
        share_url,
        "Share this",
        window_config + ",toolbar=no,menubar=no,scrollbars=no"
      );
    },

    handleUpdateCount(count) {
      this.counter_odnoklassniki =
        count >= 1000 ? this.sliceThousandInt(count) : count;
    },

    /**
     * Get share counter.
     *
     * @return {object} a share counter
     */
    getShareCounter: function() {
      // Let's see whether some other component has already
      // asked for count. Then we just subscribe for the count update event
      if (window.ODKL && typeof window.ODKL.updateCount === "function") {
        return;
      }
      // Variables
      const script = document.createElement("script");

      // Create `script` tag with share count URL
      script.src =
        "https://connect.ok.ru/dk?st.cmd=extLike&uid=1" +
        "&ref=" +
        encodeURIComponent(this.$props.page_url);

      // Add `script` tag with share count URL
      // to end of `body` tag
      document.body.appendChild(script);

      // Set share count to `counter_odnoklassniki` v-model
      window.ODKL = {};
      window.ODKL.updateCount = (index, count) => {
        if (count) {
          this.$root.$emit("ODKL:count:update", count);
        }
      };
    }
  },
  mounted() {
    // Show share counter when page loaded
    if (this.$props.has_counter) this.getShareCounter();
    // Subscribe to update count event using $root as an event bus
    this.$root.$on("ODKL:count:update", this.handleUpdateCount.bind(this));
  },
  destroyed() {
    this.$root.$off("ODKL:count:update", this.handleUpdateCount.bind(this));
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

.icon-odnoklassniki:before {
  content: "\f263";
}

// Colors
$odnoklassniki_main_color: rgb(237, 129, 43);
$odnoklassniki_main_color_opacity: rgba(237, 129, 43, 0.5);
$gradient_color: rgb(255, 159, 73);
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

// Button odnoklassniki style `flat`
.odnoklassniki__design__flat {
  background-color: $odnoklassniki_main_color;
  color: $text_white_color;
}

// Button odnoklassniki style `gradient`
.odnoklassniki__design__gradient {
  background-image: linear-gradient(
    to bottom,
    $odnoklassniki_main_color,
    $gradient_color
  );
  background-image: -moz-linear-gradient(
    to bottom,
    $odnoklassniki_main_color,
    $gradient_color
  );
  background-image: -o-linear-gradient(
    to bottom,
    $odnoklassniki_main_color,
    $gradient_color
  );
  background-image: -webkit-linear-gradient(
    to bottom,
    $odnoklassniki_main_color,
    $gradient_color
  );
  background-image: -ms-linear-gradient(
    to bottom,
    $odnoklassniki_main_color,
    $gradient_color
  );
  color: $text_white_color;
}

// Button odnoklassniki style `outline`
.odnoklassniki__design__outline {
  background-color: $background_white_color;
  border: 1px solid $odnoklassniki_main_color;
  color: $odnoklassniki_main_color;
}

// Title
.title-social {
  margin-left: 0;
}

// Counter
.counter-odnoklassniki {
  margin-left: 6px;
  padding-left: 6px;
}

.odnoklassniki__design__flat .counter-odnoklassniki,
.odnoklassniki__design__gradient .counter-odnoklassniki {
  border-left: 1px solid $text_white_color_opacity;
}

.odnoklassniki__design__outline .counter-odnoklassniki {
  border-left: 1px solid $odnoklassniki_main_color_opacity;
}
</style>
