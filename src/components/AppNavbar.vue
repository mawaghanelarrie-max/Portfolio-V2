<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<template>
  <header class="navbar">
    <div class="container nav-inner">
      <RouterLink class="brand" to="/" @click="open = false">
        EA<span>.</span>
      </RouterLink>

      <button class="menu-button" @click="open = !open" aria-label="Ouvrir le menu">
        ☰
      </button>

      <nav :class="{ open }">
        <RouterLink to="/" @click="open = false">Accueil</RouterLink>
        <RouterLink to="/profil" @click="open = false">Profil</RouterLink>
        <RouterLink to="/competences" @click="open = false">Compétences</RouterLink>
        <RouterLink to="/projets" @click="open = false">Projets</RouterLink>
        <RouterLink to="/veille" @click="open = false">Veille</RouterLink>
        <RouterLink to="/contact" @click="open = false">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>
