<template>
  <div
    class="modal-backdrop"
    v-if="visible"
  >
    <div class="basic-modal modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            @click="$emit('close')"
          ></button>
        </div>
        <div class="modal-body">
          <div v-html="content">
          </div>

        </div>
        <div class="modal-footer">
          <slot>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore';
import { computed } from 'vue';
const modal = useModalStore();
const visible = computed(() => modal.visible);
const title = computed(() => modal.title);
const content = computed(() => modal.content);

</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
