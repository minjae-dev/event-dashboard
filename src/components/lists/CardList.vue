<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';
import { useModalStore } from '@/stores/modalStore';
import type { Component } from "vue";
import { defineProps } from 'vue';
import { useRouter } from "vue-router";
import { useToast } from 'vue-toastification';
const modalStore = useModalStore();

const toast = useToast()
// route, router
const router = useRouter();

interface Card {
  id: number;
  title: string;
}

interface CardListProps {
  cards: Card[];
  cardListLabel: string;
  component: Component
}

const props = defineProps<CardListProps>();

const { isLogin } = useAuthStore()
// const openEventModal = (eventId: number) => {
//   const card = props.cards.find(item => item.id === eventId);
//   if (!card) {
//     toast.error('해당  찾을 수 없습니다.');
//     return;
//   }
//   const content = `<div><div>`;
//   modalStore.open(card.title, content);
// };


// handlers
function clickCardHandler(eventId: number, eventTarget: EventTarget) {
  const target = eventTarget as HTMLElement;
  if (!isLogin) {
    toast.error('로그인 후 이용가능');
    router.push({ path: `/login` });
  } else {
    router.push({ path: target.id === 'detail' ? `eventDetail/${eventId}` : `reservations/${eventId}` });
  }
}
</script>
<template>
  <h5>
    <label name=label>{{ cardListLabel }}</label>
  </h5>
  <div
    class="card-list"
    v-if="cards && cards.length > 0"
  >
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card-wrapper"
    >
      <!--  -->
      <component
        @detailClick="clickCardHandler(card.id, $event)"
        :is='component'
        :card='card'
      ></component>
    </div>
  </div>
</template>
