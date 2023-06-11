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
                   @save="update"
      />
    </el-card>
  </div>
</template>


<script lang="ts" setup>
import {ref} from "vue";
import {getAllDocsById, updateDocs} from "@/apis";

const text = ref('你好')

async function init() {
  let res = await getAllDocsById("front")
  text.value = res.data.content
}
init()



const update = ()=>{
  updateDocs({content: text.value, id: "front"})
}

</script>


<style scoped>

</style>
