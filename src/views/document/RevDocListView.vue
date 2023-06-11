<template>
  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;" >
    <el-radio-button label="top">top</el-radio-button>
    <el-radio-button label="right">right</el-radio-button>
    <el-radio-button label="bottom">bottom</el-radio-button>
    <el-radio-button label="left">left</el-radio-button>
  </el-radio-group>

  <el-tabs :tab-position="tabPosition" style="height: 500px;"  class="demo-tabs" >

    <el-tab-pane v-for="v in docLists" :key="v" :label="v.title" >
      <DocView :preview-data="v.content" />
    </el-tab-pane>

  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import DocView from "@/components/DocView.vue";
import {getAllDocsById, getAllDocsByUserId} from "@/apis";
import {IDoc} from "@/typing/doc";

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

</script>
<style>
.demo-tabs {
  padding: 32px;
  font-weight: 600;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
