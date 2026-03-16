import { computed } from 'vue'

export type MemberStatus = 'pending' | 'approved' | 'rejected'

export interface Member {
  id: number
  name: string
  age: number
  location: string
  status: MemberStatus
  joinedAt: string
}

const initialMembers: Member[] = [
  {
    id: 1,
    name: 'Daniel Kim',
    age: 32,
    location: 'Toronto',
    status: 'pending',
    joinedAt: '2026-02-25',
  },
  {
    id: 2,
    name: 'Sarah Lee',
    age: 29,
    location: 'Vancouver',
    status: 'approved',
    joinedAt: '2026-02-22',
  },
  {
    id: 3,
    name: 'David Park',
    age: 35,
    location: 'Seattle',
    status: 'pending',
    joinedAt: '2026-02-28',
  },
  {
    id: 4,
    name: 'John Kim',
    age: 31,
    location: 'Calgary',
    status: 'rejected',
    joinedAt: '2026-02-20',
  },
  {
    id: 5,
    name: 'Eunji Choi',
    age: 27,
    location: 'Busan',
    status: 'approved',
    joinedAt: '2026-03-01',
  },
]

export const useMembers = () => {
  const members = useState<Member[]>('members-demo-list', () => structuredClone(initialMembers))

  const totalMembers = computed(() => members.value.length)
  const pendingMembers = computed(() => members.value.filter((member) => member.status === 'pending'))
  const approvedMembers = computed(() => members.value.filter((member) => member.status === 'approved'))
  const rejectedMembers = computed(() => members.value.filter((member) => member.status === 'rejected'))
  const recentMembers = computed(() => {
    return [...members.value]
      .sort((a, b) => Number(new Date(b.joinedAt)) - Number(new Date(a.joinedAt)))
      .slice(0, 3)
  })

  const updateMemberStatus = (memberId: number, status: MemberStatus) => {
    const target = members.value.find((member) => member.id === memberId)
    if (!target) return

    target.status = status
  }

  return {
    members,
    totalMembers,
    pendingMembers,
    approvedMembers,
    rejectedMembers,
    recentMembers,
    updateMemberStatus,
  }
}
