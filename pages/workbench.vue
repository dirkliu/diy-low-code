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
            @add-card="onAddCard"
          />
        </template>
        <div class="bottom-btns">
          <div
            class="add-dashed-box"
            v-if="!showTemplateList"
            @click="showTemplateList = true"
          >
            <el-icon class="add-icon"><plus /></el-icon>
            <span class="add-text">添加</span>
          </div>
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
    <el-drawer
      v-model="showEditor"
      title="编辑文本"
      direction="rtl"
      size="400px"
      :with-header="true"
    >
      <Editor
        api-key="x9bktol9e94do9mw5bsxn5hk7g8crh3g7yt9w8gknzgbi5dz"
        :init="{
          menubar: 'view',
          toolbar_location: 'top',
          toolbar_mode: 'wrap',
          promotion: false
        }"
        initial-value="欢迎使用 TinyMCE 编辑器！"
      />
    </el-drawer>
  </div>
</template>

<script setup>
import { ref, markRaw, resolveComponent } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import pageJSON from '@/pageData/templates.json'
import Editor from '@tinymce/tinymce-vue'

const Cards = markRaw(resolveComponent('Cards'))
const componentMap = { Cards }
const showTemplateList = ref(false)
const showEditor = ref(false)
const selectedTemplates = ref([])

const pageData = pageJSON.map(item => ({
  ...item,
  component: componentMap[item.component]
}))

function onSelectTemplate(item) {
  selectedTemplates.value.push(item)
  showTemplateList.value = false
}

function onAddCard (subData) {
  const newCard = {
    component: 'Card', // 默认组件类型
    data: {
      title: '新卡片标题',
      subtitle: '新卡片副标题',
      text: '新卡片内容',
      img: 'https://img2.baidu.com/it/u=2054978784,2557745907&fm=253&fmt=auto&app=138&f=JPEG?w=247&h=285'
    },
    subData: subData || []
  }
  subData.push(newCard)
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
  width: 100%;
}

.add-dashed-box {
  width: 100%;
  border: 2px dashed #409eff;
  border-radius: 12px;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
  background: #fafcff;
  &:hover {
    border-color: #66b1ff;
    background: #f0faff;
  }
  .add-icon {
    font-size: 36px;
    color: #409eff;
    margin-bottom: 8px;
  }
  .add-text {
    font-size: 20px;
    color: #409eff;
    font-weight: 500;
  }
}
</style>