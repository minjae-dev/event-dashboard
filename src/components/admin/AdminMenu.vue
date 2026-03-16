<template>
  <nav class="d-flex gap-2 flex-wrap mb-4">
    <NuxtLink
      to="/admin/dashboard"
      class="btn btn-outline-dark btn-sm"
      active-class="active"
    >
      Dashboard
    </NuxtLink>
    <NuxtLink
      to="/admin/members"
      class="btn btn-outline-dark btn-sm"
      active-class="active"
    >
      Members
    </NuxtLink>
    <NuxtLink
      to="/admin/pending"
      class="btn btn-outline-dark btn-sm"
      active-class="active"
    >
      Pending Approval
    </NuxtLink>
  </nav>
</template>
