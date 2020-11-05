import LeftMenu from './src/main.vue';

/* istanbul ignore next */
LeftMenu.install = function(Vue) {
  Vue.component(LeftMenu.name, LeftMenu);
};

export default LeftMenu;
