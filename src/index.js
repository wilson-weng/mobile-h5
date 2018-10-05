import 'src/site/utils/polyfill'
import Vue from 'vue'
import App from 'src/site/containers/App'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import 'src/site/styles/index.scss'

Vue.use(MintUI)


import vueScrollTo from 'src/site/utils/scrollTo';

Vue.use(vueScrollTo, {});
// eslint-disable-next-line
new Vue({ ...App, router, store }).$mount('#site')
