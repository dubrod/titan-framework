module.exports = {
     plugins: [
          require('postcss-import'),
          require('tailwindcss/nesting'),
          require('tailwindcss'),
          require('postcss-sort-media-queries'),
          require('autoprefixer'),
          require('cssnano')({
               preset: [ // https://cssnano.co/docs/what-are-optimisations
                    "default", //default = minify
                    {
                         "discardComments": {
                              "removeAll": true
                         }
                    }
               ],
          }),
     ]
};
