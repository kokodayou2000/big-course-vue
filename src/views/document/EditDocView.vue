<script setup lang="ts">

import EditDoc from "@/components/EditDoc.vue";
import {getAllDocsById, getAllDocsByUserId, getOneDocByDocID, updateDocs} from "@/apis";
import {ref} from "vue";
import {IDoc} from "@/typing/doc";
import DocView from "@/components/DocView.vue";

const tabPosition = ref('right')

const docLists = ref([{} ] as IDoc[])

async function init(){
  let d = await getAllDocsByUserId("1")
  for (let i = 0; i < d.data.rows.length; i++) {
    docLists.value.push(d.data.rows[i])
  }
  console.log(docLists.value)
}

init()

const update = ()=>{
  // updateDocs({content: "1", id: "front"})
  console.log(tabPosition.value)
}

</script>

<template>
  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;" >
    <el-radio-button label="top">top</el-radio-button>
    <el-radio-button label="right">right</el-radio-button>
    <el-radio-button label="bottom">bottom</el-radio-button>
    <el-radio-button label="left">left</el-radio-button>
  </el-radio-group>

  <el-tabs :tab-position="tabPosition" style="height: 500px;"  class="demo-tabs" >

    <el-tab-pane v-for="v in docLists" :key="v" :label="v.title" >
      <EditDoc v-bind="v" @update="update" />
    </el-tab-pane>

  </el-tabs>


</template>

<style scoped>

</style>
