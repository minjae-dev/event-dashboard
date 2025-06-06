<script lang=ts setup>
import { useReservationStore } from '@/stores/reservationStore';
// import { computed } from 'vue';

// const props = defineProps<{
//   reservationsData: IReservation[]
// }>();

const store = useReservationStore();

// const filteredItems = computed(() => {
//   if (!props.filterDate) return store.reservations;
//   return store.reservations.filter(item => item.reserved_at === props.filterDate);
// });

</script>
<template>
  <div class="reservation-table card h-100">
    <div class="card-body">
      <h5 class="card-title">예약 현황 테이틀</h5>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>이벤트 ID</th>
            <th>유저 ID</th>
            <th>상태</th>
            <th>예약 시각</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in store.reservations"
            :key="item.id"
          >

            <td>{{ item.id }}</td>
            <td>{{ item.event_id }}</td>
            <td>{{ item.event_id }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.reserved_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
