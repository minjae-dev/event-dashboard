<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const modalStore = useModalStore();
const close = () => modalStore.close();

const modal = useModalStore();
const router = useRouter();

const nextRoute = computed(() => modal.nextRoute);

// “다음” 버튼 클릭 시 실행
const goNext = () => {
  if (modal.nextRoute) {
    router.push(modal.nextRoute);
  }
  modal.close();
};
const props = defineProps({
  valid: {
    type: Boolean,
    default: true,
  },
  isCancel: {
    type: Boolean,
    default: true,
  },
  nextStep: Function,
});

</script>
<template>
  <button
    class="btn btn-secondary"
    @click="close"
  >
    <div class="btn-back-text">
      <slot name="prev-text">취소</slot>
    </div>
  </button>
  <button
    v-if="nextRoute"
    class="btn btn-primary"
    @click="$emit('nextStep', goNext())"
  >
    <div class="btn-next-text">
      <slot name="next-text">다음</slot>
    </div>
  </button>
</template>
