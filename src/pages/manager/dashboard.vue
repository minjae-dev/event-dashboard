<script setup lang="ts">
definePageMeta({ layout: 'manager', middleware: 'auth' })
import DashBoardView from '@/views/manager/DashBoardView.vue'
</script>

<template>
  <DashBoardView />
</template>
