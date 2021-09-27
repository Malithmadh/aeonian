export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'aonian-2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', type: 'text/css', href: 'css/bootstrap.min.css'},
      { rel:'stylesheet', type: 'text/css', href: 'css/flaticon.css'},
      { rel:'stylesheet', type: 'text/css', href: 'css/animate.min.css'},
      { rel:'stylesheet', type: 'text/css', href: 'css/owl.carousel.min.css'},
      { rel:'stylesheet', type: 'text/css', href: 'css/boxicons.min.css'},
      { rel:'stylesheet', type: 'text/css', href: 'css/meanmenu.min.css'},
      { rel:'stylesheet', type: 'text/css', href: 'css/nice-select.min.css'},
      { rel:'stylesheet', type: 'text/css', href: 'css/fancybox.min.css'},
      { rel:'stylesheet', type: 'text/css', href: 'css/odometer.min.css'},
      { rel:'stylesheet', type: 'text/css', href: 'css/magnific-popup.min.css'},
      { rel:'stylesheet', type: 'text/css', href: 'css/style.css'},
      { rel:'stylesheet', type: 'text/css', href: 'css/responsive.css'},

    ],
    script:[
      { src: 'js/jquery.min.js', body: true },
      { src: 'js/popper.min.js', body: true },
      { src: 'js/bootstrap.min.js', body: true },
      { src: 'js/appear.min.js', body: true },
      { src: 'js/odometer.min.js', body: true },
      { src: 'js/magnific-popup.min.js', body: true },
      { src: 'js/fancybox.min.js', body: true },
      { src: 'js/owl.carousel.min.js', body: true },
      { src: 'js/meanmenu.min.js', body: true },
      { src: 'js/nice-select.min.js', body: true },
      { src: 'js/wow.min.js', body: true },
      { src: 'js/form-validator.min.js', body: true },
      { src: 'js/contact-form-script.js', body: true },
      { src: 'js/ajaxchimp.min.js', body: true },
      { src: 'js/main.js', body: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    fallback: true
  }
}
