<script setup>
const projects = [
  {
    title: "Infrastructure réseau Cisco",
    category: "Réseaux & Systèmes",
    description:
      "Conception et configuration d’une infrastructure réseau segmentée avec équipements Cisco, services Linux et Windows Server.",
    technologies: [
      "Cisco",
      "VLAN",
      "802.1Q",
      "Router-on-a-Stick",
      "DHCP",
      "NAT",
      "Linux",
      "Windows Server",
      "ADDS",
      "DNS"
],

points: [
  "Segmentation du réseau avec les VLAN 2 et 3",
  "Configuration du trunk 802.1Q",
  "Routage inter-VLAN avec Router-on-a-Stick",
  "Configuration du DHCP et du NAT/PAT",
  "Déploiement des services FTP et Samba sous Linux",
  "Installation d’Active Directory et du DNS sous Windows Server"
],

route: "/projets/infrastructure-reseau"
},

{
  title: "Infrastructure virtualisée sous Proxmox",
  category: "Virtualisation & Systèmes",

  description:
    "Déploiement d’une infrastructure réseau et systèmes entièrement virtualisée sous Proxmox avec OPNsense, services Linux et Windows Server.",

  technologies: [
    "Proxmox",
    "OPNsense",
    "Debian",
    "Samba",
    "FTP",
    "GLPI",
    "Windows Server",
    "RDS",
    "WSL2"
  ],

  points: [
    "Déploiement de plusieurs machines virtuelles sous Proxmox",
    "Configuration d’OPNsense comme pare-feu et routeur",
    "Mise en place d’un serveur de fichiers Samba",
    "Installation d’un serveur FTP avec vsftpd",
    "Déploiement de GLPI avec Apache, MariaDB et PHP",
    "Configuration de Windows Server avec RDS et WSL2"
  ],

  route: "/projets/infrastructure-proxmox"
}
{
  title: "Serveur NAS virtualisé en RAID 0",
  category: "Stockage & Virtualisation",

  description:
    "Mise en place d’un serveur NAS virtualisé sous VMware Workstation avec stockage RAID 0 et partage réseau SMB.",

  technologies: [
    "VMware Workstation",
    "NAS",
    "DSM 7.1",
    "RAID 0",
    "SMB",
    "Stockage réseau"
  ],

  points: [
    "Création d’une machine virtuelle dédiée au NAS",
    "Ajout de deux disques virtuels",
    "Installation et initialisation de DSM 7.1",
    "Création d’un groupe de stockage en RAID 0",
    "Mise en place d’un partage réseau SMB",
    "Validation de l’accès et du fonctionnement du NAS"
  ],

  route: "/projets/serveur-nas"
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
        <div class="project-points">

  <div
    v-for="point in project.points"
    :key="point"
    class="project-point"
  >
    <span class="check-icon">✓</span>
    <span>{{ point }}</span>
  </div>

</div>
<div class="project-actions">

  <RouterLink
    :to="project.route"
    class="project-button"
  >
    Voir le projet →
  </RouterLink>

  <button class="project-pdf-button">
    ↓ Compte rendu PDF
  </button>
</div>
      </article>
    </div>
  </section>
</template>
