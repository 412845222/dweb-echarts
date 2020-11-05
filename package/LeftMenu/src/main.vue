<template>
  <div class="dweb-left-menu dweb">
    <div class="logo">
      <img src="../../../assets/img/Dweb.png" alt="">
      <span>.Club</span>
    </div>
    <div v-for="(item,index) in listdata" :key="index" class="item">
      <span>{{ item.name }}</span>
    </div>
  </div>  
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'dweb-left-menu',
  props:['data'],
  setup(props) {
    const listdata = ref(props.data)
    // console.log(props.data)

    return {
      listdata:listdata
    }
  }
}
</script>
