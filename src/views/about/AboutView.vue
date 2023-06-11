<script setup lang="ts">
import DocView from "@/components/DocView.vue";
import {ref} from "vue";
import { getAllDocsById} from "@/apis";


const previewData = ref('')

async function init(id :string) {
  let res = await getAllDocsById(id)
  console.log(res)
  previewData.value = res.data.content

}
init('front')

const show = (target : string)=>{
  console.log("before "+previewData.value)
  init(target)
  console.log("after "+previewData.value)
}

</script>

<template>
  <el-row :gutter="12">
    <el-col :span="8">
      <el-card shadow="hover" @click="show('front')"> 前端 </el-card>
    </el-col>

    <el-col :span="8">
      <el-card shadow="hover" @click="show('end')"> 后端 </el-card>
    </el-col>

    <el-col :span="8">
      <el-card shadow="never"> Never </el-card>
    </el-col>
  </el-row>

  <DocView :preview-data="previewData">

  </DocView>

</template>

<style scoped>

</style>
