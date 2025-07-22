<template>
  <div class="cards">
    <div class="cards-outer">
          <h2 class="cards-title">{{ data.title }}</h2>
          <div class="cards-subtitle">{{ data.subTitle }}</div>
          <div class="cards-text" v-if="data.text">{{ data.text }}</div>
    </div>
    <div class="cards-list">
      <!-- <Card class="card-item" v-for="(item, index) in config.list" :img="item.img" :key="index"></Card> -->
       <component v-for="(item, index) in subComponents" 
        :is="item.component" 
        :key="index"
        :data="item.data"
      />
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
const props = defineProps({
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

const Card = resolveComponent('Card')
const CardA = resolveComponent('CardA')
const componentMap = {
  Card,
  CardA
}
console.log('props.subData:', props.subData)
const subComponents = reactive(props.subData.map(item =>({
  ...item,
  component: componentMap[item.component]
})))
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