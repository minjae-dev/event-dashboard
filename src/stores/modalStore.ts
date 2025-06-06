// stores/modalStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const visible = ref(false)
  const title = ref('')
  const content = ref('')

  const open = (modalTitle: string, modalContent: string) => {
    title.value = modalTitle
    content.value = modalContent
    visible.value = true
  }
  const close = () => {
    visible.value = false
  }

  return {
    visible,
    title,
    content,
    open,
    close,
  }
})
