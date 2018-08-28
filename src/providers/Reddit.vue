<template>
  <a class="button-social"
     :class="buttonSocialDesignObject"
     :page-url="page_url"
     :page-title="page_title"
     :button-design="button_design"
     :title-social="title_social"
     :has-icon="has_icon"
     :has-square-edges="has_square_edges"
     :has-counter="has_counter"
     @click.prevent="showShareWindow"
  >
    <i class="icon-reddit" v-if="this.$props.has_icon"></i>
    <span class="title-social" v-if="this.$props.title_social">{{ title_social }}</span>
    <span class="counter-reddit"
          v-model="counter_reddit"
          v-if="this.$props.has_counter"
    >{{ counter_reddit }}</span>
  </a>
</template>

<script>
import { documentHref } from "../helpers/href";
import { documentTitle } from "../helpers/title";

export default {
  name: "VueGoodshareReddit",
  props: {
    page_url: {
      type: String,
      default: documentHref
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
        reddit__design__flat: this.$props.button_design === "flat",
        reddit__design__gradient: this.$props.button_design === "gradient",
        reddit__design__outline: this.$props.button_design === "outline"
      },
      counter_reddit: 0
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
        "https://reddit.com/submit?" +
        "url=" +
        encodeURIComponent(this.$props.page_url) +
        "&title=" +
        encodeURIComponent(this.$props.page_title);

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
        "https://www.reddit.com/api/info.json?" +
        "url=" +
        encodeURIComponent(this.$props.page_url) +
        "&callback=" +
        callback;

      // Add `script` tag with share count URL
      // to end of `body` tag
      document.body.appendChild(script);

      // Set share count to `counter_reddit` v-model
      window[callback] = count => {
        if (count.data.children.length > 0) {
          let total_count = 0;

          for (let i = 0; i < count.data.children.length; i++) {
            total_count += count.data.children[i].data.score;
          }

          this.counter_reddit =
            total_count >= 1000
              ? this.sliceThousandInt(total_count)
              : total_count;
        } else {
          this.counter_reddit = 0;
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

.icon-reddit:before {
  content: "\e805";
}

// Colors
$reddit_main_color: rgb(255, 69, 0);
$reddit_main_color_opacity: rgba(255, 69, 0, 0.5);
$gradient_color: rgb(255, 89, 30);
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

// Button reddit style `flat`
.reddit__design__flat {
  background-color: $reddit_main_color;
  color: $text_white_color;
}

// Button reddit style `gradient`
.reddit__design__gradient {
  background-image: linear-gradient(
    to bottom,
    $reddit_main_color,
    $gradient_color
  );
  background-image: -moz-linear-gradient(
    to bottom,
    $reddit_main_color,
    $gradient_color
  );
  background-image: -o-linear-gradient(
    to bottom,
    $reddit_main_color,
    $gradient_color
  );
  background-image: -webkit-linear-gradient(
    to bottom,
    $reddit_main_color,
    $gradient_color
  );
  background-image: -ms-linear-gradient(
    to bottom,
    $reddit_main_color,
    $gradient_color
  );
  color: $text_white_color;
}

// Button reddit style `outline`
.reddit__design__outline {
  background-color: $background_white_color;
  border: 1px solid $reddit_main_color;
  color: $reddit_main_color;
}

// Title
.title-social {
  margin-left: 4px;
}

// Counter
.counter-reddit {
  margin-left: 6px;
  padding-left: 6px;
}

.reddit__design__flat .counter-reddit,
.reddit__design__gradient .counter-reddit {
  border-left: 1px solid $text_white_color_opacity;
}

.reddit__design__outline .counter-reddit {
  border-left: 1px solid $reddit_main_color_opacity;
}
</style>
