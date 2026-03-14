<script setup lang="ts">
import ReservationsView from '@/views/ReservationsView.vue'
definePageMeta({ middleware: 'auth' })
</script>

<template>
  <ReservationsView />
</template>
