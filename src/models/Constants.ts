export const enum USER_ROLE {
  MANAGER = '0',
  USER = '1',
  ADMIN = '2',
  SYSTEM_ADMIN = '3',
}

export const enum BUILDING_CATEGORY {
  A_DONG = 'A동',
  B_DONG = 'B동',
  C_DONG = 'C동',
}

export const enum LOCATION_CATEGORY {
  AUDITORIUM = 'Auditorium',
  PERFORMANCE_HALL = 'performance hall',
  SEMINAR_ROOM_1 = 'Conference Room A',
  SEMINAR_ROOM_2 = 'Conference Room B',
  GALLERY = 'Gallery',
}
export const enum EVENT_CATEGORY {
  LECTURES = 'Lectures',
  WORKSHOP = 'Workshop',
  PERFORMANCE = 'Performance',
  EXHIBITION = 'Exhibition',
  CLASS = 'Class',
  ETC = 'Etc',
}

export enum EVENT_STATUS {
  OPEN = 1, // 예약 가능
  CLOSED = 2, // 예약 종료
  CANCELLED = 3, // 이벤트 취소됨
}

export enum RESERVATION_STATUS {
  RESERVED = 1,
  CANCELLED = 2,
  WAIT_LIST = 3, // 대기자
}
