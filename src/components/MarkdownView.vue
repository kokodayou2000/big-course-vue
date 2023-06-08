

<template>
  <div class="p10">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Markdown编辑器</span>
        </div>
      </template>

      <v-md-editor v-model="text"
                   height="400px"
                   @save="save"
      />

    </el-card>
  </div>


</template>


<script lang="ts" setup>
import {ref} from "vue";

const text = ref('你好')

const save = ()=>{

}

</script>





<style scoped>

</style>
