<template>
  <div class="card" :style="{ flexDirection, rowGap }">
    <img v-if="data.img" class="card-img" :src="data.img" alt="Card Image">
    <edit-content class="card-title" v-model="data.title" :editable="editable" />
    <edit-content class="card-subtitle" v-model="data.subtitle" :editable="editable" />
    <edit-content class="card-text" v-model="data.text" :editable="editable" />
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
const flexDirection = ref('column'); // 可选值：'row', 'column', 'row-reverse', 'column-reverse'
const rowGap = ref('5px'); // 行间距

defineOptions({
  name: 'Card'
})

defineProps({
  data: {
    type: Object,
    default() {
      return {}
    }
  },
  editable: {
    type: Boolean,
    default: false
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
