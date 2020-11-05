import PageView from './src/main.vue';

/* istanbul ignore next */
PageView.install = function(Vue) {
  Vue.component(PageView.name, PageView);
};

export default PageView;