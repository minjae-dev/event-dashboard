<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'auth' })

const { pendingMembers, updateMemberStatus } = useMembers()
</script>

<template>
  <section class="container py-4">
    <h2 class="mb-3">Pending Approval</h2>
    <AdminMenu />

    <div class="border rounded bg-white p-3">
      <p
        v-if="pendingMembers.length === 0"
        class="mb-0 text-muted"
      >
        There are no pending members.
      </p>

      <ul
        v-else
        class="list-group"
      >
        <li
          v-for="member in pendingMembers"
          :key="member.id"
          class="list-group-item d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2"
        >
          <div>
            <strong>{{ member.name }}</strong>
            <span class="text-muted"> · {{ member.location }}</span>
          </div>
          <div class="d-flex gap-2">
            <button
              class="btn btn-sm btn-success"
              @click="updateMemberStatus(member.id, 'approved')"
            >
              Approve
            </button>
            <button
              class="btn btn-sm btn-outline-danger"
              @click="updateMemberStatus(member.id, 'rejected')"
            >
              Reject
            </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
