<template>
  <H1> 这里是 Bar </H1>
  <h1>{{store.showTime}}</h1>

</template>

<script lang="ts" setup>

import {useCounterStore} from "@/store";
import {storeToRefs} from "pinia";

const store = useCounterStore()


</script>

<style scoped>

</style>
