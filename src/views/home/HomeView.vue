<script setup lang="ts">
import {ref} from "vue";
import {useCounterStore} from "@/store";
import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";

const store = useCounterStore()

const flag  = ref(false)


setInterval(()=>{
  console.log("setInterval")
  store.increment()
},1000)


</script>

<template>
  <button @click="flag =!flag">点击</button>
  <Transition name="fade">
    <div v-if="flag"> <Bar /></div>
    <div v-else><Foo /> </div>
  </Transition>
</template>


<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
