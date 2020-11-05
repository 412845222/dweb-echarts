import Test from './package/dwebtest/index.js';
import LeftMenu from './package/LeftMenu/index.js';
import TopMenu from './package/TopMenu/index.js';
import PageView from './package/PageView/index.js';
import luckysheet from './package/luckysheet/index.js';
import EchartsBar from './package/Echarts-bar/index.js';

const components = [
  Test,
  LeftMenu,
  TopMenu,
  PageView,
  luckysheet,
  EchartsBar
];

const install = function(Vue = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

};


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Test,
  LeftMenu,
  TopMenu,
  PageView,
  luckysheet,
  EchartsBar
};
