<template>
  <div class="cards">
    <div class="cards-outer">
          <h2 class="cards-title">{{ config.title }}</h2>
          <div class="cards-subtitle">{{ config.subTitle }}</div>
          <div class="cards-text" v-if="config.text">{{ config.text }}</div>
    </div>
    <div class="cards-list">
      <Card class="card-item" v-for="(item, index) in config.list" :img="item.img" :key="index"></Card>
    </div>
    <div class="cards-btns">
      <button>按钮</button>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'Cards'
})
defineProps({
  config: {
    type: Object,
    default() {
      return {
        title: '卡片标题',
        subTitle: '卡片副标题',
        text: '卡片内容',
        list: [
          {
            'name': resolveComponent('Card'),
            "img": "https://img2.baidu.com/it/u=3577407992,732771609&fm=253&fmt=auto&app=138&f=JPG?w=281&h=500"
          }
        ]
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.cards {
  padding: 3.125em max(calc(50% - 600px),1.5vw);

  .cards-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .cards-title {
    text-align: center;
    font-size: 32px;
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