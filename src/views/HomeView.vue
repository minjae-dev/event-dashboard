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
    name: 'Event Dashboard (현재 서비스)',
    url: '/login',
    status: '데모',
    memberSystem: '로그인 / 권한 분기 (관리자, 매니저, 일반 사용자)',
    description: '회원 권한 기반으로 라우트와 접근 제어가 동작하는 관리자형 웹 앱입니다.',
  },
  {
    name: 'Campus Booking Platform',
    url: 'https://portfolio.example.com/campus-booking',
    status: '운영 중',
    memberSystem: '이메일 가입, 비밀번호 재설정, 예약 히스토리',
    description: '시설 예약 중심 서비스로 회원의 예약 내역 및 알림 기능을 포함합니다.',
  },
  {
    name: 'Creator Community Hub',
    url: 'https://portfolio.example.com/community-hub',
    status: '운영 중',
    memberSystem: '소셜 로그인, 프로필 관리, 권한별 게시글 관리',
    description: '커뮤니티 기반 서비스로 회원 활동 및 관리자 모니터링 기능이 포함됩니다.',
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
      <h2 class="mb-3">포트폴리오</h2>
      <p class="text-muted mb-3">
        회원 시스템이 포함된 운영/데모 사이트를 빠르게 확인할 수 있도록 정리했습니다.
      </p>
      <div class="row g-3">
        <div
          v-for="site in portfolioSites"
          :key="site.name"
          class="col-12 col-lg-4"
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
              target="_blank"
              rel="noreferrer"
              class="btn btn-sm btn-outline-dark"
            >
              사이트 보기
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
