<template>
  <div class="workbench">
    <div class="page-header">工作台</div>
    <el-splitter layout="horizontal">
      <el-splitter-panel :size="300" max="40%">
        <div 
          v-for="(item, index) in pageData" 
          :key="index"
          @click="slectTemplate = item"
        >{{item.name}} --- {{item.id}}</div>
      </el-splitter-panel>
      <el-splitter-panel min="60%">
        <template v-if="slectTemplate">
          <component :is="slectTemplate.component" :data="slectTemplate.data" :sub-data="slectTemplate.subData"/>
        </template>
      </el-splitter-panel>
    </el-splitter>
  </div>
</template>

<script setup>
import pageJSON from '@/pageData/templates.json'

const Cards = resolveComponent('Cards')

const componentMap = {
  Cards
}
let slectTemplate = shallowRef('')
const pageData = pageJSON.map(item => {
  return {
    ...item,
    // component: resolveComponent("Cards")
    component: componentMap[item.component]
  }
})
</script>
