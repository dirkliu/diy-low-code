<template>
  <Editor
    v-if="editable"
    api-key="x9bktol9e94do9mw5bsxn5hk7g8crh3g7yt9w8gknzgbi5dz"
    :init="{
      menubar: false,
      inline: true,
      plugins: [
        'link', 'lists', 'powerpaste',
        'autolink', 'tinymcespellchecker'
      ],
      toolbar: [
        'undo redo | bold italic underline | fontfamily fontsize',
        'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent'
      ]
    }"
    v-model="model"
  />
  <component
    v-else
    :is="tag"
    :innerHTML="model"
    class="editable-content"
  ></component>
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue'
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

</script>

<style lang="scss" scoped>
.editable-content {
  &[contenteditable=true] {
    border: 1px solid #ccc;
  }
}
</style>