// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import SelectButton from './components/SelectButton';
import GeneralTable from './components/GeneralTable';

require('@/assets/style/reset.scss');
require('@/assets/style/main.scss');

Vue.config.productionTip = false;
Vue.component('select-button', SelectButton);
Vue.component('general-table', GeneralTable);

function parseThousands(el, binding) {
  const elem = el;
  elem.innerHTML = binding.value.toString()
    .replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/,
      (all, pre, groupOf3Digital) => pre + groupOf3Digital.replace(/\d{3}/g, ',$&'),
    );
}
Vue.directive('thousands', {
  inserted: (el, binding) => parseThousands(el, binding),
  update: (el, binding) => parseThousands(el, binding),
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
