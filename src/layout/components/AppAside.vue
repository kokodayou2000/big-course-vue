<template>
<!--  TODO -->

  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
  >
    <el-sub-menu index="1">

      <template #title>
        <el-icon><Compass /></el-icon>
        <span>预览</span>
      </template>
      <el-menu-item index="1-1" @click="jump">介绍</el-menu-item>

    </el-sub-menu>

    <el-menu-item index="2">
      <el-icon><setting /></el-icon>
      <template #title>管理界面</template>
    </el-menu-item>

    <el-sub-menu index="3">
      <template #title>
      <el-icon><Notebook /></el-icon>
      <span>笔记</span>
      </template>

      <el-menu-item index="3-1" @click="jumpToView">查看笔记</el-menu-item>
      <el-menu-item index="3-2" @click="jumpToEdit">编辑笔记</el-menu-item>

    </el-sub-menu>


    <el-sub-menu index="4">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>娱乐</span>
      </template>
      <el-menu-item index="4-1" @click="jumpTomMusic">音乐</el-menu-item>
    </el-sub-menu>

  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting, View,
} from '@element-plus/icons-vue'
import Router from "@/router";

const isCollapse = ref(true)

const jump = ()=>{
  console.log("jump")
  Router.push('/about')
  console.log(Router.getRoutes())
}
const jumpToView = ()=>{
  console.log("viewDoc ")
  Router.push('/viewDoc')
}
const jumpToEdit = ()=>{
  console.log("editDoc ")
  Router.push('/editDoc')
}

const  jumpTomMusic = ()=>{
  console.log("music ")
  Router.push('/music')
}

const handleOpen = (key: string, keyPath: string[]) => {
  isCollapse.value = false
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  isCollapse.value = true
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
  min-height: 500px;
}
</style>
