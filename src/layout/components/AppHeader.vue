<template>
  <div class="head">
    <el-page-header @back="onBack">

      <template #content>
        <div class="flex items-center">
          <el-avatar
              class="mr-3"
              :size="32"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="text-large font-600 mr-3"> 个人网站 </span>
          <span
              class="text-sm mr-2"
              style="color: var(--el-text-color-regular)"
          >

          </span>
<!--          <el-tag>Default</el-tag>-->

        </div>

      </template>


      <template #extra>
        <div class="flex items-center">
        <el-button type="primary"  plain @click="open">查看时间</el-button>
        </div>
      </template>

<!--      <template #extra>-->
<!--        <div class="flex items-center">-->
<!--          <el-button type="primary" class="ml-2">查看时间</el-button>-->
<!--        </div>-->
<!--      </template>-->

    </el-page-header>
  </div>
</template>

<script setup lang="ts">
import {dayjs, ElNotification as notify} from 'element-plus'
import {computed, onMounted, ref, watch} from "vue";
import {Ship} from "@element-plus/icons-vue";
import Router from "@/router";
import {useCounterStore} from "@/store";

const store = useCounterStore()

const onBack = () => {
  notify('Back')
  Router.back()
}

import { ElNotification } from 'element-plus'

const open = () => {
  ElNotification.success({
    title: '成功',
    dangerouslyUseHTMLString: true,
    message: '<strong><i>当前时间'+store.showTime+'</i></strong>',
  })
}




</script>


<style scoped>
.head{
  margin-top: 10px;
}

.elapsed-container {
  width: 300px;
}

.elapsed-bar {
  background-color: red;
  height: 10px;
}
</style>

