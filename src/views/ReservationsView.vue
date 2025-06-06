<script lang="ts" setup>
import ReservationsTables from '@/components/tables/ReservationsTable.vue';
import type { IReservation } from '@/models/Reservation';
import { useReservationStore } from '@/stores/reservationStore';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
// route, router

const route = useRoute();

const reservationStore = useReservationStore();
const emit = defineEmits(['update:selectedDate'])

const reservationsData = ref<IReservation[]>([])
const selectedDate = ref<string>('');
function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:selectedDate', target.value);
}

onMounted(() => {
  reservationStore.loadReservations(route.params.id as string);
  reservationsData.value = reservationStore.reservations
  selectedDate.value = reservationStore.getRecentReservedDate
});
</script>
<template>
  <div class="reservation-view">
    <input
      type="date"
      class="form-control w-100 w-sm-auto"
      :value="selectedDate"
      @input="onInput"
    />
    <ReservationsTables>
    </ReservationsTables>
  </div>
</template>
