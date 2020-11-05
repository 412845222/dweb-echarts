import EchartsBar from './src/main.vue';

/* istanbul ignore next */
EchartsBar.install = function(Vue) {
  Vue.component(EchartsBar.name, EchartsBar);
};

export default EchartsBar;
