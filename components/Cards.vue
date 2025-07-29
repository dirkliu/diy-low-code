<template>
  <div class="cards" :style="{...styleVars}">
    <div class="cards-outer">
      <edit-content class="cards-title" v-model="data.title" tag="h2" :editable="editable" />
      <edit-content class="cards-subtitle" v-model="data.subTitle" :editable="editable" />
      <edit-content class="cards-text" v-if="data.text" :editable="editable" />
    </div>
    <div class="cards-list" v-if="subComponents?.length">
      <component 
        v-for="(item, index) in subComponents" 
        :is="item.component" 
        :key="index" 
        :data="item.data" 
        :style="{width: columnWidth}" 
        :editable="editable"
      />
    </div>
    <div class="cards-btns" v-if="data.button?.text">
       <el-button type="primary" @click="onSubmit">{{ data.button.text }}</el-button>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'Cards'
})
const props = defineProps({
  editable: {
    type: Boolean,
    default: false
  },
  styleVars: {
    type: Object,
    default() {
      return {
        "--main-bg": "#f3f3f5",
        "--section-padding": "3.125em max(calc(50% - 400px), 1.5vw)",
        "--title-size": "32px"
      }
    }
  },
  data: {
    type: Object,
    default() {
      return {}
    }
  },
  subData: {
    type: Array,
    default() {
      return []
    }
  }
})



const Card = markRaw(resolveComponent('Card'))
const CardA = markRaw(resolveComponent('CardA'))
const componentMap = {
  Card,
  CardA
}

const subComponents = computed(() =>
  (Array.isArray(props.subData) ? props.subData : []).map(item => ({
    ...item,
    component: componentMap[item.component]
  }))
)
const column = computed(() =>
  (props.data.column && props.data.column > 0) ? props.data.column : 4
)
const columnWidth = computed(() => (`calc(100% / ${column.value} - 20px *(${column.value} - 1)/${column.value})`))

function onTitleInput(event) {
  props.data.title = event.target.innerText
}

function onSubmit() {
  console.log('提交按钮被点击', props.data.title)
  // 这里可以添加提交逻辑
}
</script>

<style lang="scss" scoped>
.cards {
  padding: var(--section-padding);
  background: var(--main-bg);

  .cards-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .cards-title {
    text-align: center;
    font-size: var(--title-size);
  }

  .cards-subtitle {
    margin: 16px 0 10px;
    text-align: center;
    font-size: 18px;
  }

  .cards-text {
    text-align: center;
    margin-bottom: 16px;
  }

  .card-item {
    width: calc(33.333% - 20px);
  }

  .cards-btns {
    margin-top: 30px;
    text-align: center;
  }
}
</style>