<script setup>
const projects = [
  {
    title: 'Infrastructure systèmes & réseaux',
    tag: 'SISR',
    text: 'Mise en place progressive d’une infrastructure avec services réseau, machines virtuelles et administration centralisée.'
  },
  {
    title: 'Supervision Zabbix',
    tag: 'Supervision',
    text: 'Suivi des équipements, métriques, déclencheurs et alertes afin de détecter rapidement les anomalies.'
  },
  {
    title: 'Gestion de parc GLPI',
    tag: 'ITSM',
    text: 'Inventaire et gestion des équipements avec GLPI et agents de remontée automatique.'
  }
]
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <p class="eyebrow">Projets</p>
      <h1>Mes réalisations</h1>
      <p class="lead">
        Cette section accueillera les projets avec contexte, architecture,
        technologies, difficultés, solutions et résultats.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container cards-grid">
      <article class="project-card" v-for="project in projects" :key="project.title">
        <span class="tag">{{ project.tag }}</span>
        <h2>{{ project.title }}</h2>
        <p>{{ project.text }}</p>
        <a href="#" @click.prevent>Fiche détaillée bientôt →</a>
      </article>
    </div>
  </section>
</template>
