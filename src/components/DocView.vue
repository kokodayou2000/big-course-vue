<script setup lang="ts">

defineProps(['previewData'])

</script>

<template>
  <v-md-editor :model-value="previewData" mode="preview">

  </v-md-editor>

</template>

<style scoped>

</style>
