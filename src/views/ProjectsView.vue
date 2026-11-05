<script setup>
const projects = [
  {
    title: "Infrastructure réseau d’entreprise",
    category: "Réseaux & Infrastructure",
    description:
      "Conception d’une infrastructure réseau destinée à une organisation d’environ 90 utilisateurs, avec segmentation VLAN, virtualisation et équipements réseau.",
    technologies: [
      "Cisco",
      "VLAN",
      "Proxmox",
      "TCP/IP",
      "Cat6A"
    ]
  }
]
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <p class="eyebrow">Projets</p>

      <h1>Mes réalisations</h1>

      <p class="lead">
        Découvrez les projets réalisés durant ma formation en BTS SIO SISR.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container projects-grid">

      <article
        v-for="project in projects"
        :key="project.title"
        class="project-card"
      >

        <span class="project-category">
          {{ project.category }}
        </span>

        <h2>{{ project.title }}</h2>

        <p>
          {{ project.description }}
        </p>

        <div class="project-technologies">
          <span
            v-for="technology in project.technologies"
            :key="technology"
          >
            {{ technology }}
          </span>
        </div>

        <RouterLink
  to="/projets/infrastructure-reseau"
  class="project-button"
>
  Voir le projet →
</RouterLink>

      </article>

    </div>
  </section>
</template>
