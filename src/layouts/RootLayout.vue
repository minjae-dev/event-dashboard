<script setup lang="ts">
import BasicFooter from "@/components/common/BasicFooter.vue";
import BasicHeader from "@/components/common/BasicNav.vue";
import { RouterView } from "vue-router";
</script>
<template>
  <div class="root-layout">
    <BasicHeader />
    <RouterView />
    <BasicFooter />
  </div>
</template>
<style lang="scss" scoped></style>
