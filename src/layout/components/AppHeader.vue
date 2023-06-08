<template>
  <div aria-label="A complete example of page header">
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
          <el-icon size="20px">
            <Ship />
          </el-icon>
          <span>{{username}}</span>

<!--          <el-button type="primary" class="ml-2">Edit</el-button>-->
        </div>
      </template>

      <el-descriptions :column="3" size="small" class="mt-4">
<!--        <el-descriptions-item label="Username"></el-descriptions-item>-->
      </el-descriptions>

    </el-page-header>
  </div>
</template>

<script setup lang="ts">
import { ElNotification as notify } from 'element-plus'
import {ref} from "vue";
import {Ship} from "@element-plus/icons-vue";

const username = ref('邓俊杰')
const subTitle = ref('Sub title')

const onBack = () => {
  notify('Back')
}
</script>
