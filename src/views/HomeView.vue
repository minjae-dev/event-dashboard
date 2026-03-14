<script setup lang="ts">
import { getEvents } from '@/apis/events/eventApi'
import EventCard from '@/components/cards/EventCard.vue'
import CardList from '@/components/lists/CardList.vue'
import type { IEvent } from '@/models/Event'
import { formatDate } from '@/uses/common'
import {
  buildingCategoryMapper,
  eventCategoryMapper,
  eventStatusMapper,
  locationCategoryMapper,
} from '@/uses/enumMapping'
import { onMounted, ref } from 'vue'

interface IPortfolioSite {
  name: string
  url: string
  status: '운영 중' | '데모'
  memberSystem: string
  description: string
}

const eventCards = ref<IEvent[]>([])
const cardListLabel = ref('이벤트 목록')

const portfolioSites = ref<IPortfolioSite[]>([
  {
    name: 'Event Dashboard (현재 프로젝트)',
    url: '/login',
    status: '데모',
    memberSystem: '이메일 로그인 / 역할 기반 접근 제어(관리자·매니저·일반 회원)',
    description: '회원 인증 후 권한별 대시보드로 분기되는 포트폴리오 데모입니다.',
  },
  {
    name: 'Admin Dashboard Member Demo',
    url: '/admin/dashboard',
    status: '데모',
    memberSystem: '회원 검색, 권한 변경, 가입일 모니터링',
    description: '관리자가 회원을 직접 조회/관리하는 과정을 즉시 확인할 수 있습니다.',
  },
])

onMounted(async () => {
  const response = await getEvents({ page: 1, limit: 3 })
  if (response && response.data?.length > 0) {
    const mappedData = response.data.map(
      ({ location, category, building, status, startDate, endDate, ...rest }) => ({
        ...rest,
        location: locationCategoryMapper(location),
        category: eventCategoryMapper(category),
        building: buildingCategoryMapper(building),
        status: eventStatusMapper(status),
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
      }),
    )
    eventCards.value = mappedData
  } else {
    eventCards.value = []
  }
})
</script>

<template>
  <div class="home-view">
    <section class="portfolio-section mb-4">
      <h2 class="mb-3">포트폴리오 & 관리자 데모</h2>
      <p class="text-muted mb-3">
        회원 시스템이 포함된 포트폴리오와 관리자 회원 관리 데모를 바로 확인할 수 있습니다.
      </p>

      <div class="alert alert-info mb-3">
        <strong>체험 계정</strong><br>
        관리자: <code>admin@gmail.com / 123456</code><br>
        매니저: <code>manager@gmail.com / 123456</code><br>
        일반 회원: <code>viewer@gmail.com / 123456</code>
      </div>

      <div class="row g-3">
        <div
          v-for="site in portfolioSites"
          :key="site.name"
          class="col-12 col-lg-6"
        >
          <article class="portfolio-card h-100 p-3 border rounded bg-white">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h3 class="h6 mb-0">{{ site.name }}</h3>
              <span class="badge text-bg-primary">{{ site.status }}</span>
            </div>
            <p class="small text-muted mb-2">{{ site.description }}</p>
            <p class="small mb-2"><strong>회원 시스템:</strong> {{ site.memberSystem }}</p>
            <a
              :href="site.url"
              class="btn btn-sm btn-outline-dark"
            >
              바로 보기
            </a>
          </article>
        </div>
      </div>
    </section>

    <CardList
      :cards="eventCards"
      :card-list-label="cardListLabel"
      :component="EventCard"
    >
      <template #label>
        <label class="card-label">{{ cardListLabel }}</label>
      </template>
    </CardList>
  </div>
</template>
