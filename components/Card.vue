<template>
  <div class="card" :style="{ flexDirection, rowGap }">
    <img class="card-img" :src="img" alt="Card Image">
    <h3 class="card-title">{{ cardTitle }}</h3>
    <div class="card-subtitle">{{ cardSubtitle }}</div>
    <div class="card-text">{{ cardText }}</div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
const flexDirection = ref('column'); // 可选值：'row', 'column', 'row-reverse', 'column-reverse'
const rowGap = ref('5px'); // 行间距

const cardTitle = ref('卡片标题1');
const cardSubtitle = ref('卡片副标题1');
const cardText = ref('文字内容1');

defineOptions({
  name: 'Card'
})

defineProps({
  name: {
    type: String,
    default: 'Card'
  },
  img: {
    type: String,
    default: 'https://img1.baidu.com/it/u=3484182907,1571493837&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=400'
  }
})
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  .card-img {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
