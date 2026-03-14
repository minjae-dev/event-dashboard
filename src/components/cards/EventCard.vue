<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        {{ card.title }}
      </h5>
      <ul class="list-group list-group-flush mb-3">
        <li class="list-group-item">
          <strong>이벤트 ID:</strong> {{ card.id }}
        </li>
        <li class="list-group-item">
          <strong>카테고리:</strong> {{ card.category }}
        </li>
        <li class="list-group-item">
          <strong>상태:</strong>
          <span :class="{
            'badge bg-success': card.status === '예약 가능',
            'badge bg-secondary': card.status !== '예약 가능'
          }">
            {{ card.status }}
          </span>
        </li>
        <li class="list-group-item">
          <strong>날짜:</strong> {{ card.startDate }} ~ {{ card.endDate }}
        </li>
        <li class="list-group-item">
          <strong>장소:</strong> {{ card.location }}
        </li>
        <li class="list-group-item">
          <strong>건물:</strong> {{ card.building }}
        </li>
        <li class="list-group-item">
          <strong>정원:</strong> 이벤트 신청인원 / {{ card.capacity }}
        </li>
        <li class="list-group-item">
          <strong>설명:</strong> {{ card.description }}
        </li>
        <li class="list-group-item mb-3">
          <a
            id="detail"
            @click="onDetailClick"
            target="_blank"
            class="btn btn-primary btn-sm"
          >
            이벤트 상세보기
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IEvent } from '@/models/Event';

interface CardItemProps {
  card: IEvent; // 원본 데이터 객체
}
defineProps<CardItemProps>();
const emit = defineEmits<{
  (e: 'detailClick', el: EventTarget): void;
}>();

function onDetailClick(event: MouseEvent) {
  emit('detailClick', event.target as EventTarget);
}
function onStatusClick(event: MouseEvent) {
  emit('detailClick', event.target as EventTarget);
}

</script>
