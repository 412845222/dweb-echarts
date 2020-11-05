import TopMenu from './src/main.vue';

/* istanbul ignore next */
TopMenu.install = function(Vue) {
  Vue.component(TopMenu.name, TopMenu);
};

export default TopMenu;