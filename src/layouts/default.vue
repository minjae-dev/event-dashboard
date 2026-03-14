<script setup lang="ts">
import BasicFooter from '@/components/common/BasicFooter.vue'
import BasicHeader from '@/components/common/BasicNav.vue'
</script>

<template>
  <div class="root-layout">
    <BasicHeader />
    <slot />
    <BasicFooter />
  </div>
</template>
