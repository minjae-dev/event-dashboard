<script lang="ts" setup>
// imports
import { EVENT_CATEGORY, EVENT_STATUS, LOCATION_CATEGORY, USER_ROLE } from '@/models/Constants';
import type { EventDataType } from '@/models/Event';
// props
const props = defineProps({
  modelValue: {
    type: Object as () => EventDataType,
  },
  placeholder: {
    type: String,
    default: 'Type your note here...'
  },
  label: {
    type: String,
  },
  readonly: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    required: true
  }
});
// emits
const emit = defineEmits(['update:modelValue']);
const updateField = (field: keyof EventDataType, value: any) => {
  emit('update:modelValue', { ...props.modelValue, [field]: value });
}
</script>
<template>
  <div class="event-detail container mt-4">
    <div
      v-if="label"
      class="mb-1"
    >
      <label class="form-label fw-bold">{{ label }}</label>
    </div>
    <form @submit.prevent>
      <div class="mb-2">
        <label class="form-label">이벤트 제목</label>
        <input
          type="text"
          class="form-control"
          :value="modelValue?.title"
          :readonly="role !== USER_ROLE.ADMIN"
          @input="role === USER_ROLE.ADMIN && updateField('title', $event.target.value)"
        />
      </div>
      <div class="mb-2">
        <label class="form-label">설명</label>
        <input
          type="text"
          class="form-control"
          :value="modelValue?.description"
          :readonly="role !== USER_ROLE.ADMIN"
          @input="role === USER_ROLE.ADMIN && updateField('description', $event.target.value)"
        />
      </div>
      <div class="mb-2">
        <label class="form-label">이벤트 날짜</label>
        <div class="d-flex gap-2">
          <input
            type="date"
            class="form-control"
            :value="modelValue?.startDate ?? ''"
            :readonly="role !== USER_ROLE.ADMIN"
            @input="role === USER_ROLE.ADMIN && updateField('startDate', $event.target.value)"
          />
          <span>~</span>
          <input
            type="date"
            class="form-control"
            :value="modelValue?.endDate ?? ''"
            :readonly="role !== USER_ROLE.ADMIN"
            @input="role === USER_ROLE.ADMIN && updateField('endDate', $event.target.value)"
          />
        </div>
      </div>
      <div class="mb-2">
        <label class="form-label">수용인원</label>
        <input
          type="number"
          class="form-control"
          :value="modelValue?.capacity"
          :readonly="role !== USER_ROLE.ADMIN"
          @input="(role === USER_ROLE.ADMIN) && updateField('capacity', $event.target.value)"
        />
      </div>

      <div class="mb-2">
        <label class="form-label">이벤트 상태</label>
        <select
          class="form-control"
          :value="modelValue?.status"
          :disabled="role !== USER_ROLE.ADMIN"
          @change="role === USER_ROLE.ADMIN && updateField('status', $event.target.value)"
        >
          <option
            value=""
            disabled
          >이벤트 상태 선택하세요</option>
          <option
            v-for="([key, val], idx) in Object.entries(EVENT_STATUS).filter(([k, v]) => typeof v === 'number')"
            :key="key"
            :value="val"
          >
            {{ key }}
          </option>
        </select>
      </div>

      <div class="mb-2">
        <label class="form-label">카테고리</label>
        <select
          class="form-control"
          :value="modelValue?.category"
          :disabled="!(role === USER_ROLE.ADMIN)"
          @change="(role === USER_ROLE.ADMIN) && updateField('category', $event.target.value)"
        >
          <option
            value=""
            disabled
          >카테고리를 선택하세요</option>
          <option
            v-for="key in Object.keys(EVENT_CATEGORY)"
            :key="key"
            :value="key"
          >
            {{ EVENT_CATEGORY[key] }}
          </option>
        </select>
      </div>

      <div class="mb-2">
        <label class="form-label">장소</label>
        <select
          class="form-control"
          :value="modelValue?.location"
          :disabled="role !== USER_ROLE.ADMIN"
          @change="role === USER_ROLE.ADMIN && updateField('location', $event.target.value)"
        >
          <option
            v-for="key in Object.keys(LOCATION_CATEGORY)"
            :key="key"
            :value="key"
          >
            {{ LOCATION_CATEGORY[key] }}
          </option>
        </select>
      </div>

      <div class="mb-2">
        <label class="form-label">수용인원</label>
        <input
          type="number"
          class="form-control"
          :value="modelValue?.capacity"
          :readonly="role !== USER_ROLE.ADMIN"
          @input="(role === USER_ROLE.ADMIN) && updateField('capacity', $event.target.value)"
        />
      </div>

    </form>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>
