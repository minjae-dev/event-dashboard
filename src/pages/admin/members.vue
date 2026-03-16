<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'auth' })

import type { MemberStatus } from '@/composables/useMembers'

const search = ref('')
const statusFilter = ref<MemberStatus | 'all'>('all')

const { members, updateMemberStatus } = useMembers()

const filteredMembers = computed(() => {
  const keyword = search.value.trim().toLowerCase()

  return members.value.filter((member) => {
    const byKeyword =
      member.name.toLowerCase().includes(keyword) ||
      member.location.toLowerCase().includes(keyword)
    const byStatus = statusFilter.value === 'all' || member.status === statusFilter.value
    return byKeyword && byStatus
  })
})

const statusLabelMap: Record<MemberStatus, string> = {
  pending: 'Pending',
  approved: 'Approved',
  rejected: 'Rejected',
}
</script>

<template>
  <section class="container py-4">
    <h2 class="mb-3">Members Management</h2>
    <AdminMenu />

    <div class="row g-2 mb-3">
      <div class="col-12 col-md-7">
        <input
          v-model="search"
          class="form-control"
          type="text"
          placeholder="Search by name or location"
        >
      </div>
      <div class="col-12 col-md-5">
        <select
          v-model="statusFilter"
          class="form-select"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
    </div>

    <div class="table-responsive border rounded bg-white">
      <table class="table table-striped align-middle mb-0">
        <thead class="table-light">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="member in filteredMembers"
            :key="member.id"
          >
            <td>{{ member.name }}</td>
            <td>{{ member.age }}</td>
            <td>{{ member.location }}</td>
            <td>
              <span class="badge text-bg-secondary text-capitalize">{{ statusLabelMap[member.status] }}</span>
            </td>
            <td>
              <div class="d-flex gap-2 flex-wrap">
                <button
                  class="btn btn-sm btn-success"
                  :disabled="member.status === 'approved'"
                  @click="updateMemberStatus(member.id, 'approved')"
                >
                  Approve
                </button>
                <button
                  class="btn btn-sm btn-outline-danger"
                  :disabled="member.status === 'rejected'"
                  @click="updateMemberStatus(member.id, 'rejected')"
                >
                  Reject
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="filteredMembers.length === 0">
            <td
              colspan="5"
              class="text-center py-4 text-muted"
            >
              No members found.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
