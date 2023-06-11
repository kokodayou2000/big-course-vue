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
          <span class="text-large font-600 mr-3"> Title </span>
          <span
              class="text-sm mr-2"
              style="color: var(--el-text-color-regular)"
          >
            {{subTitle}}
          </span>
<!--          <el-tag>Default</el-tag>-->

        </div>

      </template>



      <template #extra>
        <div class="flex items-center">
          <el-button >登录</el-button>
          <el-button type="primary" class="ml-2">注册</el-button>
        </div>
      </template>

    </el-page-header>
  </div>
</template>

<script setup lang="ts">
import {dayjs, ElNotification as notify} from 'element-plus'
import {ref} from "vue";
import {Ship} from "@element-plus/icons-vue";
import Router from "@/router";

const username = ref('邓俊杰')
const subTitle = ref('Sub title')

const time_value = ref(dayjs())

const onBack = () => {
  notify('Back')
  Router.back()
}
</script>


<style scoped>
.head{
  margin-top: 10px;
}
</style>

