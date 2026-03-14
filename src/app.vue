<script setup lang="ts">
import modalButtons from '@/components/buttons/modalButtons.vue'
import BasicModal from '@/components/common/BasicModal.vue'
import { useModalStore } from '@/stores/modalStore'

const modalStore = useModalStore()
const submit = (a: unknown) => {
  console.log(a)
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <BasicModal
    v-if="modalStore.visible"
    title="Hello Modal"
  >
    <modalButtons
      :valid="false"
      :is-cancel="false"
      @next-step="submit"
    />
  </BasicModal>
</template>
