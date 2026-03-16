<script setup lang="ts">
const { members } = useMembers()
</script>

<template>
  <section class="container py-4">
    <h2 class="mb-3">Viewer Members List</h2>
    <p class="text-muted">Viewer can only view member information.</p>

    <div class="table-responsive border rounded bg-white">
      <table class="table table-hover align-middle mb-0">
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
            v-for="member in members"
            :key="member.id"
          >
            <td>{{ member.name }}</td>
            <td>{{ member.age }}</td>
            <td>{{ member.location }}</td>
            <td class="text-capitalize">{{ member.status }}</td>
            <td>
              <button class="btn btn-sm btn-outline-secondary" disabled>
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
