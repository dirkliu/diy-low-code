<template>
  <div class="workbench">
    <div class="page-header">工作台</div>
    <el-splitter layout="horizontal">
      <el-splitter-panel :min="'100%'" class="right-panel">
        <template v-for="(item, idx) in selectedTemplates" :key="idx">
          <component
            :is="item.component"
            :data="item.data"
            :sub-data="item.subData"
            :editable="true"
          />
        </template>
        <div class="bottom-btns">
          <el-button
            class="add-btn"
            type="primary"
            @click="showTemplateList = true"
            v-if="!showTemplateList"
            size="large"
          >
            + 添加
          </el-button>
        </div>
      </el-splitter-panel>
    </el-splitter>
    <!-- 抽屉模板选择 -->
    <el-drawer
      v-model="showTemplateList"
      title="选择模板"
      direction="ltr"
      size="300px"
      :with-header="true"
    >
      <div 
        v-for="(item, index) in pageData" 
        :key="index"
        @click="onSelectTemplate(item)"
        class="template-item"
      >{{item.name}} --- {{item.id}}</div>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref, markRaw, resolveComponent } from 'vue'
import pageJSON from '@/pageData/templates.json'

const Cards = markRaw(resolveComponent('Cards'))
const componentMap = { Cards }

const showTemplateList = ref(false)
const selectedTemplates = ref([])

const pageData = pageJSON.map(item => ({
  ...item,
  component: componentMap[item.component]
}))

function onSelectTemplate(item) {
  selectedTemplates.value.push(item)
  showTemplateList.value = false
}
</script>

<style lang="scss" scoped>
.workbench {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-header {
  height: 60px;
  line-height: 60px;
  font-size: 22px;
  font-weight: bold;
  padding-left: 24px;
  background: #f5f7fa;
  border-bottom: 1px solid #e4e7ed;
}

.el-splitter {
  flex: 1 1 auto;
  height: calc(100vh - 60px);
  min-height: 0;
}

.template-item {
  padding: 12px 24px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #e6f7ff;
  }
}

.right-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  position: relative;
}

.bottom-btns {
  margin-top: 20px;
  text-align: center;
}

.add-btn {
  font-size: 28px;
  padding: 24px 60px;
  border-radius: 12px;
}
</style>