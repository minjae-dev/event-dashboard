<template>
  <div class="col-12 col-sm-6 col-md-4 mb-3">
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text fs-4">{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  value: [String, Number],
});
</script>
