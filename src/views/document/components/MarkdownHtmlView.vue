<script setup lang="ts">
const previewData = '这里是要预览的解析后的html文本'
</script>

<template>
  <v-md-editor :model-value="previewData" mode="html"></v-md-editor>
</template>

<style scoped>

</style>
