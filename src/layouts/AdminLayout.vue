<script setup lang="ts">
import DashBoardView from "@/views/admin/DashBoardView.vue";
import DashBoardLayout from "./DashBoardLayout.vue";
</script>
<template>

  <main class="content">
    <h1>관리자 레이아웃</h1>
    <DashBoardLayout>
      <DashBoardView />
    </DashBoardLayout>
  </main>
</template>
<style lang="scss" scoped></style>
