<template>
  <H1> 这里是 Foo </H1>
  <h1>{{store.count}}</h1>
  <h1>{{store.showTime}}</h1>
</template>

<script lang="ts" setup>

import {useCounterStore} from "@/store";

const store = useCounterStore()


</script>

<style scoped>

</style>
