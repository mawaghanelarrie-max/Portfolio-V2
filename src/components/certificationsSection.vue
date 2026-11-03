<script setup>
import { certifications } from '../data/certifications'
</script>

<template>
  <section class="section certifications-section">
    <div class="container">

      <div class="section-heading">
        <p class="eyebrow">Certifications</p>
        <h2>Mes certifications</h2>
        <p>
          Certifications obtenues dans les domaines des réseaux,
          de la cybersécurité et de la gestion des risques.
        </p>
      </div>

      <div class="certifications-grid">

        <article
          v-for="cert in certifications"
          :key="cert.title"
          class="certification-card"
        >

          <div class="logo-wrapper">
            <img
              :src="cert.logo"
              :alt="cert.issuer"
              class="certification-logo"
            />
          </div>

          <h3>{{ cert.title }}</h3>

          <p class="issuer">
            {{ cert.issuer }}
          </p>

          <p class="date">
            {{ cert.date }}
          </p>

          <a
            :href="cert.file"
            target="_blank"
            rel="noopener noreferrer"
            class="certification-button"
          >
            Voir le certificat
          </a>

        </article>

      </div>
    </div>
  </section>
</template>

<style scoped>
.certifications-section {
  padding: 82px 0;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.certification-card {
  background: linear-gradient(
    180deg,
    rgba(19, 35, 58, 0.95),
    rgba(15, 27, 45, 0.95)
  );

  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 22px;
  padding: 28px;

  display: flex;
  flex-direction: column;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease;
}

.certification-card:hover {
  transform: translateY(-5px);
  border-color: rgba(96, 165, 250, 0.5);
}

.logo-wrapper {
  height: 90px;

  display: flex;
  align-items: center;

  margin-bottom: 22px;
}

.certification-logo {
  max-width: 160px;
  max-height: 75px;
  object-fit: contain;
}

.certification-card h3 {
  font-size: 1.25rem;
  line-height: 1.4;
  margin-bottom: 12px;
}

.issuer {
  color: #94a3b8;
  margin-bottom: 8px;
}

.date {
  color: #60a5fa;
  font-weight: 700;
  margin-bottom: 24px;
}

.certification-button {
  margin-top: auto;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: fit-content;

  padding: 10px 16px;

  border-radius: 10px;

  background: #3b82f6;
  color: white;

  font-weight: 700;
  text-decoration: none;

  transition: background 0.2s ease;
}

.certification-button:hover {
  background: #2563eb;
}

@media (max-width: 900px) {
  .certifications-grid {
    grid-template-columns: 1fr;
  }
}
</style>