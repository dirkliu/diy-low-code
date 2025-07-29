<template>
  <component
    :is="tag"
    :contenteditable="editable"
    :innerHTML="model"
    @input="onInput"
    class="editable-content"
  ></component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  editable: {
    type: Boolean,
    default: false
  }
})

const model = defineModel()

function onInput(event) {
  model.value = event.target.innerHTML
}
</script>

<style lang="scss" scoped>
.editable-content {
  &[contenteditable=true] {
    border: 1px solid #ccc;
  }
}
</style>