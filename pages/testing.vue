<template>
  <div class="page-test">
    <component 
      v-for="(item, index) in pageData" 
      :key="index" 
      :is="item.component" 
      :data="item.data"
      :sub-data="item.subData"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import pageJSON from '@/pageData/testing.json'

const Cards = markRaw(resolveComponent('Cards'))
const componentMap = {
  Cards,
  // 其他组件...
}

const pageData = reactive(pageJSON.map(item => {
  return {
    ...item,
    // component: resolveComponent("Cards")
    component: componentMap[item.component]
  }
}))
</script>

<style lang="scss">
@import url("~/assets/css/global.scss");

* {
  margin: 0;
  box-sizing: border-box;
}
</style>
