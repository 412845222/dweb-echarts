import LuckySheet from './src/main.vue';

/* istanbul ignore next */
LuckySheet.install = function(Vue) {
  Vue.component(LuckySheet.name, LuckySheet);
};

export default LuckySheet;
