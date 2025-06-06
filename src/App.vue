<script setup lang="ts">
import modalButtons from "@/components/buttons/modalButtons.vue";
import BasicModal from '@/components/common/BasicModal.vue';
import { useModalStore } from '@/stores/modalStore';
const modalStore = useModalStore();
const submit = (a) => {
  console.log(a)
}
</script>



<template>
  <RouterView />
  <BasicModal
    title="Hello Modal"
    v-if="modalStore.visible"
  >
    <modalButtons
      :valid="false"
      :isCancel="false"
      @nextStep="submit"
    >
      <!-- <template v-slot:next-text> 원하는 버튼 넘기기 </template> -->
    </modalButtons>
  </BasicModal>
</template>

<style scoped></style>
