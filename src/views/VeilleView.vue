<script setup>
const axes = [
  'IA appliquée aux réseaux',
  'Automatisation de l’administration',
  'SDN & virtualisation',
  'Cloud, 5G & 6G',
  'Zero Trust & cybersécurité',
  'Impact sur le métier'
]

const articles = [
  {
    date: '2026',
    category: 'IA & automatisation',
    title: 'Réseaux autonomes et administration intelligente',
    text: 'Cette zone accueillera les actualités sélectionnées, leur source, un résumé et surtout mon analyse personnelle.'
  }
]
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <p class="eyebrow">Veille technologique</p>
      <h1>Vers des réseaux autonomes : quel avenir pour l’administration réseau ?</h1>
      <p class="lead">
        Ma veille analyse l’évolution des infrastructures vers des réseaux plus
        intelligents, automatisés, programmables et sécurisés.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="veille-intro">
        <article class="content-card">
          <h2>Problématique</h2>
          <p>
            Comment l’intelligence artificielle, l’automatisation et les nouvelles
            architectures réseau transforment-elles le métier d’administrateur systèmes et réseaux ?
          </p>
        </article>

        <article class="content-card">
          <h2>Mes axes de veille</h2>
          <div class="chips">
            <span v-for="axe in axes" :key="axe">{{ axe }}</span>
          </div>
        </article>
      </div>

      <div class="section-heading top-gap">
        <p class="eyebrow">Suivi</p>
        <h2>Actualités sélectionnées</h2>
        <p>Les articles seront ajoutés progressivement avec leur analyse et leur impact sur le métier.</p>
      </div>

      <div class="cards-grid">
        <article class="project-card" v-for="article in articles" :key="article.title">
          <div class="article-meta">{{ article.date }} · {{ article.category }}</div>
          <h2>{{ article.title }}</h2>
          <p>{{ article.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
