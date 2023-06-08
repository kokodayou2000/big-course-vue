<script setup lang="ts">
const previewData = '这里是要预览的markdown数据'
</script>

<template>
  <v-md-editor :model-value="previewData" mode="preview">

  </v-md-editor>

</template>

<style scoped>

</style>
