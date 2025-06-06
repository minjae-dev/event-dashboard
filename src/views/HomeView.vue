<script setup lang="ts">
import { getEvents } from '@/apis/events/eventApi';
import EventCard from '@/components/cards/EventCard.vue';
import CardList from '@/components/lists/CardList.vue';
import type { IEvent } from '@/models/Event';
import { formatDate } from '@/uses/common';
import { buildingCategoryMapper, eventCategoryMapper, eventStatusMapper, locationCategoryMapper } from '@/uses/enumMapping';
import { onMounted, ref } from 'vue';

const eventCards = ref<IEvent[]>([]);
const cardListLabel = ref('이벤트 목록')

onMounted(async () => {
  const response = await getEvents({ page: 1, limit: 3 });
  if (response && response.data?.length > 0) {
    const mappedData = response.data.map(({ location, category, building, status, startDate, endDate, ...rest }) => ({
      ...rest,
      location: locationCategoryMapper(location),
      category: eventCategoryMapper(category),
      building: buildingCategoryMapper(building),
      status: eventStatusMapper(status),
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    }));
    eventCards.value = mappedData;
  } else {
    eventCards.value = [];
  }
});
</script>

<template>
  <div class="home-view">
    <CardList
      :cards="eventCards"
      :cardListLabel="cardListLabel"
      :component="EventCard"
    >
      <template #label>
        <label class="card-label">{{ cardListLabel }}</label>
      </template>
    </CardList>
  </div>
</template>
