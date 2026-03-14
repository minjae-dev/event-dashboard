<script setup lang="ts">
import { getAllUsers, updateUserRole, type IUserAdmin } from '@/apis/users/usersApi'
import { computed, onMounted, ref } from 'vue'

const users = ref<IUserAdmin[]>([])
const searchKeyword = ref('')
const roleFilter = ref('all')
const loading = ref(false)
const syncingUserId = ref<string | null>(null)

const roleLabel = (role: string | null) => {
  if (role === '2') return '관리자'
  if (role === '1') return '일반 회원'
  return '매니저'
}

const roleBadgeClass = (role: string | null) => {
  if (role === '2') return 'text-bg-danger'
  if (role === '1') return 'text-bg-secondary'
  return 'text-bg-success'
}

const filteredUsers = computed(() => {
  const keyword = searchKeyword.value.toLowerCase()
  return users.value.filter((user) => {
    const matchesKeyword =
      user.name.toLowerCase().includes(keyword) || user.email?.toLowerCase().includes(keyword)
    const matchesRole = roleFilter.value === 'all' || user.role === roleFilter.value
    return matchesKeyword && matchesRole
  })
})

const fetchUsers = async () => {
  loading.value = true
  const response = await getAllUsers()
  users.value = response?.data ?? []
  loading.value = false
}

const changeRole = async (user: IUserAdmin, role: string) => {
  if (!user.id) return
  syncingUserId.value = String(user.id)
  const response = await updateUserRole(String(user.id), role)
  if (response?.data) {
    user.role = response.data.role
    await fetchUsers()
  }
  syncingUserId.value = null
}

onMounted(fetchUsers)
</script>

<template>
  <section class="dash-board-view">
    <header class="mb-4">
      <h2>Admin Dashboard 데모</h2>
      <p class="text-muted mb-0">회원 검색, 역할 변경, 가입일 확인으로 운영 관리를 점검할 수 있습니다.</p>
    </header>

    <div class="member-controls row g-2 mb-3">
      <div class="col-12 col-md-7">
        <input
          v-model="searchKeyword"
          type="text"
          class="form-control"
          placeholder="이름 또는 이메일 검색"
        >
      </div>
      <div class="col-12 col-md-5">
        <select
          v-model="roleFilter"
          class="form-select"
        >
          <option value="all">전체 권한</option>
          <option value="0">매니저</option>
          <option value="1">일반 회원</option>
          <option value="2">관리자</option>
        </select>
      </div>
    </div>

    <div class="table-responsive border rounded bg-white">
      <table class="table table-hover align-middle mb-0">
        <thead class="table-light">
          <tr>
            <th>이름</th>
            <th>이메일</th>
            <th>현재 권한</th>
            <th>가입일</th>
            <th class="text-end">권한 변경</th>
          </tr>
        </thead>
        <tbody v-if="!loading">
          <tr
            v-for="user in filteredUsers"
            :key="String(user.id)"
          >
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <span
                class="badge"
                :class="roleBadgeClass(String(user.role))"
              >{{ roleLabel(String(user.role)) }}</span>
            </td>
            <td>{{ user.created_at.slice(0, 10) }}</td>
            <td class="text-end">
              <select
                class="form-select form-select-sm d-inline-block member-role-select"
                :disabled="syncingUserId === String(user.id)"
                :value="String(user.role)"
                @change="(event) => changeRole(user, (event.target as HTMLSelectElement).value)"
              >
                <option value="0">매니저</option>
                <option value="1">일반 회원</option>
                <option value="2">관리자</option>
              </select>
            </td>
          </tr>
          <tr v-if="filteredUsers.length === 0">
            <td
              colspan="5"
              class="text-center py-4 text-muted"
            >
              조건에 맞는 회원이 없습니다.
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td
              colspan="5"
              class="text-center py-4"
            >
              회원 정보를 불러오는 중입니다...
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
