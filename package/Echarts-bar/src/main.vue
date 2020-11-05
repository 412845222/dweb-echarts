<template>
  <div id="echarts" style="padding-top:20px">

  </div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/lib/chart/bar');
  import { useStore } from "vuex"
  import { ref, onMounted,computed,watch } from 'vue'
  export default {
    name: 'echarts-bar',
    setup() {
      const store = useStore()
      const option = ref(computed(function () {
        return store.getters.getBarOption
      }))

      function initEacharts(option) {
        console.log('init Echarts!')
        // console.log(option)
        let dom = document.getElementById('echarts')
        let myChart = echarts.init(dom, 'dark')
        myChart.setOption(option);
      }

      onMounted(() => {
        initEacharts(option.value)
      })

      watch([store.getters.getBarOption],function() {
        // console.log(newv[0],oldv[0])
        initEacharts(option.value)
      })

      return {
        option:option
      }
    }

  }

</script>