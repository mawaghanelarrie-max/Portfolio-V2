<script setup>
defineProps({
  name: String,
  level: Number,
  details: String
})
</script>

<template>
  <article class="skill-card">
    <div class="skill-top">
      <h3>{{ name }}</h3>
      <span>{{ level }}%</span>
    </div>
    <div class="progress-track">
      <div class="progress-fill" :style="{ width: level + '%' }"></div>
    </div>
    <p>{{ details }}</p>
  </article>
</template>
