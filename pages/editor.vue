<script setup>
  import Editor from '@tinymce/tinymce-vue'
</script>

<template>
  <main id="sample">
    <Editor
      api-key="x9bktol9e94do9mw5bsxn5hk7g8crh3g7yt9w8gknzgbi5dz"
      :init="{
        menubar: false,
        toolbar_location: 'top',
        toolbar_mode: 'wrap'
      }"
      initial-value="Welcome to TinyMCE!"
    />
  </main>
</template>