<script setup>
import SkillBar from '../components/SkillBar.vue'
import { skills } from '../data/skills'
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <p class="eyebrow">Compétences</p>
      <h1>Mes compétences techniques</h1>
      <p class="lead">
        Les barres donnent une indication de progression. Elles sont accompagnées
        de compétences concrètes et seront reliées à mes projets.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container skills-grid">
      <SkillBar v-for="skill in skills" :key="skill.name" v-bind="skill" />
    </div>
  </section>
</template>
