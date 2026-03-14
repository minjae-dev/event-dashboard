<script setup lang="ts">
import { getEventById, updateEvent } from '@/apis/events/eventApi';
import VideoDetail from '@/components/detail/EventDetail.vue';
import { USER_ROLE } from '@/models/Constants';
import type { EventDataType } from '@/models/Event';
import { useAuthStore } from '@/stores/authStore';
import { formatDate } from '@/uses/common';
import { buildingCategoryMapper, eventCategoryMapper, eventStatusMapper, locationCategoryMapper } from '@/uses/enumMapping';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
const toast = useToast()

const route = useRoute();
const router = useRouter();
const { getUserRole } = useAuthStore()
// notes
const defaultData = {
  id: null,
  description: null,
  category: null,
  location: null,
  building: null,
  startDate: null,
  endDate: null,
  capacity: null,
  title: null,
  status: null,
};
const detailData = ref<EventDataType>(defaultData);

onMounted(async () => {
  const response = await getEventById(route.params.id as string);
  if (response && response.data.length > 0) {
    const { location, category, building, status, startDate, endDate, ...rest } = response.data[0];
    detailData.value = {
      location: locationCategoryMapper(location),
      category: eventCategoryMapper(category),
      building: buildingCategoryMapper(building),
      status: eventStatusMapper(status),
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      ...rest
    }
  } else {
    detailData.value = defaultData
  }
})

const labelByRole = () => {
  switch (getUserRole()) {
    case USER_ROLE.ADMIN:
      return '이벤트 수정(관리자)';
    case USER_ROLE.MANAGER:
      return '이벤트 수정(매니저)';
    case USER_ROLE.USER:
      return '이벤트 조회(사용자)';
    default:
      return '기본';
  }
}
// notes

const handleClickSaveBtn = async () => {

  await updateEvent(route.params.id as string, detailData.value);
  toast.success('수정되었습니다')
  router.back();
};
</script>
<template>
  <div class="detail-view">
    <VideoDetail
      :readonly="getUserRole() === USER_ROLE.ADMIN ? false : true"
      :role="getUserRole() ?? ''"
      :label="labelByRole()"
      v-model="detailData"
    >
      <template
        v-if="getUserRole() === USER_ROLE.ADMIN"
        #buttons
      >
        <button
          @click="handleClickSaveBtn"
          class="btn btn-primary btn-sm"
        >수정하기</button>
        <button
          @click="$router.back()"
          class="btn btn-danger btn-sm ms-2"
        >취소하기</button>
      </template>
    </VideoDetail>
  </div>
</template>


<style scoped></style>
