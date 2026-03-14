<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'auth' })
import DashBoardView from '@/views/admin/DashBoardView.vue'
</script>

<template>
  <DashBoardView />
</template>
