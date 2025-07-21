<template>
  <div class="intro">
    低代码平台是一种能够让用户通过可视化拖拽和简单配置，快速构建应用程序的开发工具。它大大降低了开发门槛，使非专业开发者也能参与到应用开发中，提高了开发效率和灵活性。
  </div>

  <component v-for="(item, index) in pageData" :key="index" :is="item.component" :config="item"></component>
</template>

<script setup>
import { reactive } from 'vue'

// const Cards = ref('Cards')
const pageData = reactive([
  {
    "component": resolveComponent('Cards'),
    "title": "卡片组件自定义标题1",
    "list": Array.from({ length: 5 }, () => ({
      "card": resolveComponent('Card'),
      "img": `https://img2.baidu.com/it/u=3577407992,732771609&fm=253&fmt=auto&app=138&f=JPG?w=281&h=500`
    }))
  },
  {
    "component": resolveComponent('Cards'),
    "title": "卡片组件自定义标题2",
    "list": Array.from({ length: 5 }, () => ({
      "card": resolveComponent('Card'),
      "img": `https://img2.baidu.com/it/u=3146104370,1037124710&fm=253&fmt=auto&app=138&f=PNG?w=500&h=652`
    }))
  },
  {
    "component": resolveComponent('Cards'),
    "title": "卡片组件自定义标题2",
    "list": Array.from({ length: 5 }, () => ({
      "card": resolveComponent('CardA'),
      "img": `https://img2.baidu.com/it/u=3577407992,732771609&fm=253&fmt=auto&app=138&f=JPG?w=281&h=500`
    }))
  }
])
</script>

<style lang="scss">
@import url("~/assets/css/global.scss");

* {
  margin: 0;
  box-sizing: border-box;
}

.intro {
  max-width: 900px;
  /* 原700px加宽200px */
  margin: 32px auto 16px auto;
  padding: 20px 28px;
  background: #f0f4ff url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png') repeat;
  border-radius: 16px;
  font-size: 22px;
  color: #222;
  line-height: 1.8;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06), 0 8px 32px rgba(80, 120, 200, 0.10);
  /* 增加更多阴影 */
  font-weight: bold;
  border: 2px solid #a3bffa;
}

.component {
  margin-bottom: 24px;
}
</style>