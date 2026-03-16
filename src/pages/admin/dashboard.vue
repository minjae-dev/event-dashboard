<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'auth' })

const { totalMembers, pendingMembers, approvedMembers, rejectedMembers, recentMembers } = useMembers()
</script>

<template>
  <section class="container py-4">
    <h2 class="mb-3">Admin Dashboard</h2>
    <AdminMenu />

    <div class="row g-3 mb-4">
      <div class="col-12 col-md-3">
        <article class="border rounded p-3 bg-white h-100">
          <p class="text-muted mb-1">Total Members</p>
          <h3 class="mb-0">{{ totalMembers }}</h3>
        </article>
      </div>
      <div class="col-12 col-md-3">
        <article class="border rounded p-3 bg-white h-100">
          <p class="text-muted mb-1">Pending Approval</p>
          <h3 class="mb-0">{{ pendingMembers.length }}</h3>
        </article>
      </div>
      <div class="col-12 col-md-3">
        <article class="border rounded p-3 bg-white h-100">
          <p class="text-muted mb-1">Approved</p>
          <h3 class="mb-0">{{ approvedMembers.length }}</h3>
        </article>
      </div>
      <div class="col-12 col-md-3">
        <article class="border rounded p-3 bg-white h-100">
          <p class="text-muted mb-1">Rejected</p>
          <h3 class="mb-0">{{ rejectedMembers.length }}</h3>
        </article>
      </div>
    </div>

    <article class="border rounded p-3 bg-white">
      <h3 class="h5">Recent Members</h3>
      <ul class="mb-0">
        <li
          v-for="member in recentMembers"
          :key="member.id"
          class="mb-1"
        >
          {{ member.name }}
          <span class="text-muted">({{ member.joinedAt }})</span>
        </li>
      </ul>
    </article>
  </section>
</template>
