function createEnumMapper<T extends Record<string, string>>(mapping: T) {
  return (key: string): string => mapping[key] || '알 수 없음'
}

// 매핑함수
const categoryMapper = createEnumMapper({
  seminar: '세미나',
  workshop: '워크숍',
  meetup: '밋업',
  conference: '컨퍼런스',
  etc: '기타',
})

const buildingCategoryMapper = createEnumMapper({
  A_DONG: 'A동',
  B_DONG: 'B동',
  C_DONG: 'C동',
})

const locationCategoryMapper = createEnumMapper({
  AUDITORIUM: 'Auditorium',
  PERFORMANCE_HALL: 'performance hall',
  SEMINAR_ROOM_1: 'Conference Room A',
  SEMINAR_ROOM_2: 'Conference Room B',
  GALLERY: 'Gallery',
})

const eventCategoryMapper = createEnumMapper({
  LECTURES: 'Lectures',
  WORKSHOP: 'Workshop',
  PERFORMANCE: 'Performance',
  EXHIBITION: 'Exhibition',
  CLASS: 'Class',
  ETC: 'Etc',
})

const eventStatusMapper = createEnumMapper({
  '1': '예약 가능',
  '2': '예약 종료',
  '3': '이벤트 취소됨',
})

const reservationStatusMapper = createEnumMapper({
  1: '예약됨',
  2: '취소됨',
  3: '대기자',
})

export {
  buildingCategoryMapper,
  categoryMapper,
  eventCategoryMapper,
  eventStatusMapper,
  locationCategoryMapper,
  reservationStatusMapper,
}
