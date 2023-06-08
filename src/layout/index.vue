<script setup lang="ts">
import AppAside from "@/layout/components/AppAside.vue";
import AppHeader from "@/layout/components/AppHeader.vue";

</script>

<template>
  <el-container>
    <el-aside width="auto">
      <AppAside />
    </el-aside>
    <el-container>
      <el-header>
        <AppHeader />
      </el-header>
      <el-main>
        <!-- 子路由出口 -->
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>


<style scoped lang="scss" >
//.el-container {
//  min-height: 100vh;
//}
//
//.el-aside {
//  position: sticky;
//  top: 0;
//  max-height: 100vh;
//  background: #d3dce6;
//}
//
//.el-header {
//  background: #f8f9fb;
//  position: sticky;
//  top: 0;
//  z-index: 100;
//}
//
//.el-main {
//  background: #e9eef3;
//}
</style>
