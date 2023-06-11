<script setup lang="ts">
import DocView from "@/components/DocView.vue";
import {ref} from "vue";
import { getOneDocByDocID} from "@/apis";


const previewData = ref('loading')

async function init(id :string) {
  let res = await getOneDocByDocID(id)
  console.log(res.data.content)
  previewData.value = res.data.content

}
init('front')

const show = (target : string)=>{
  init(target)
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
      <el-card shadow="never"> 总结 </el-card>
    </el-col>
  </el-row>

  <DocView :preview-data="previewData">

  </DocView>

</template>

<style scoped>

</style>
