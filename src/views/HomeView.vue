<script setup>
import SkillBar from '../components/SkillBar.vue'
import { skills } from '../data/skills'
import CertificationsSection from '../components/CertificationsSection.vue'
</script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <p class="eyebrow">BTS SIO · Option SISR</p>
       <h1>Elarrie Alane <span>MAWAGHAN</span></h1>
        <h2>Systèmes, réseaux & infrastructures</h2>
        <p class="hero-text">
          Je développe mes compétences en administration systèmes et réseaux,
          virtualisation, supervision, automatisation et cybersécurité.
        </p>
        <div class="hero-actions">
          <RouterLink class="btn primary" to="/projets">Voir mes projets</RouterLink>
          <RouterLink class="btn secondary" to="/veille">Ma veille technologique</RouterLink>
        </div>
      </div>

      <div class="hero-panel">
        <div class="status-dot"></div>
        <p class="mini-label">Objectif</p>
        <h3>Construire des infrastructures fiables, sécurisées et automatisées.</h3>
        <div class="stack">
          <span>Windows Server</span>
          <span>Linux</span>
          <span>Proxmox</span>
          <span>Zabbix</span>
          <span>GLPI</span>
          <span>Réseaux</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow">Compétences</p>
        <h2>Mes domaines techniques</h2>
        <p>Des compétences illustrées par des projets concrets, avec un niveau affiché par barre de progression.</p>
      </div>

      <div class="skills-grid">
        <SkillBar
          v-for="skill in skills.slice(0, 4)"
          :key="skill.name"
          v-bind="skill"
        />
      </div>

      <div class="section-cta">
        <RouterLink class="text-link" to="/competences">Voir toutes mes compétences →</RouterLink>
      </div>
    </div>
  </section>
  <CertificationsSection />

  <section class="section soft">
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow">Veille technologique</p>
        <h2>Vers des réseaux autonomes : quel avenir pour l’administration réseau ?</h2>
        <p>
          Je suis l’évolution de l’IA appliquée aux réseaux, de l’automatisation,
          du SDN, de la virtualisation, du cloud, de la 5G/6G et du Zero Trust.
        </p>
      </div>
      <RouterLink class="btn primary" to="/veille">Découvrir ma veille</RouterLink>
    </div>
  </section>
</template>
