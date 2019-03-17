# vue-goodshare examples

> Example web page for testing `vue-goodshare` on your localhost.

### Installation

* Clone repository from GitHub:

``` bash
$ git clone https://github.com/koddr/vue-goodshare.git
```

* Go to `examples` folder:

``` bash
$ cd vue-goodshare/examples
```

* Start simple Python 3.4+ HTTP server (only macOS and Linux):

``` bash
$ python3 -m http.server 4000 --bind localhost
```

### Dev Build

``` bash
$ cd vue-goodshare/examples
$ npm install
$ npm run build # or npm run watch
```

#### Note

For this example, we do not use Webpack `-p` directive (UglifyJs). Yep, `./build/script.js` is too heavy for production, but still better to understand on localhost. 
