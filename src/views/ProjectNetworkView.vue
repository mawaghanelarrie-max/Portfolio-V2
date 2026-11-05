<template>
  <section class="page-hero project-hero">
    <div class="container">

      <RouterLink
        to="/projets"
        class="back-link"
      >
        ← Retour aux projets
      </RouterLink>

      <p class="eyebrow">
        Projet BTS SIO SISR
      </p>

      <h1>
        Infrastructure réseau d’entreprise
      </h1>

      <p class="lead">
        Conception d’une infrastructure réseau destinée à une
        organisation d’environ 90 utilisateurs, intégrant
        segmentation VLAN, virtualisation et équipements Cisco.
      </p>

      <div class="project-main-tags">
        <span>Cisco</span>
        <span>Proxmox</span>
        <span>VLAN</span>
        <span>TCP/IP</span>
        <span>Cat6A</span>
      </div>

    </div>
  </section>


  <section class="section">
    <div class="container project-detail">


      <!-- CONTEXTE -->

      <article class="content-card project-section">
        <p class="project-number">01</p>

        <div>
          <h2>Contexte du projet</h2>

          <p>
            L’objectif de ce projet est de concevoir une infrastructure
            informatique capable de répondre aux besoins d’une entreprise
            d’environ 90 utilisateurs.
          </p>

          <p>
            L’infrastructure doit permettre de connecter les différents
            postes de travail, de segmenter le réseau et d’héberger des
            services virtualisés tout en conservant une architecture
            évolutive et administrable.
          </p>
        </div>
      </article>


      <!-- OBJECTIFS -->

      <article class="content-card project-section">
        <p class="project-number">02</p>

        <div>
          <h2>Objectifs</h2>

          <ul class="project-list">
            <li>
              Concevoir une infrastructure réseau adaptée à environ
              90 utilisateurs.
            </li>

            <li>
              Segmenter le réseau à l’aide de plusieurs VLAN.
            </li>

            <li>
              Configurer les communications entre les équipements réseau.
            </li>

            <li>
              Mettre en place une infrastructure de virtualisation
              avec deux serveurs Proxmox.
            </li>

            <li>
              Organiser les connexions réseau avec des équipements Cisco.
            </li>

            <li>
              Concevoir une infrastructure évolutive et documentée.
            </li>
          </ul>
        </div>
      </article>


      <!-- ARCHITECTURE -->

      <article class="content-card project-section">
        <p class="project-number">03</p>

        <div class="project-full">
          <h2>Architecture réseau</h2>

          <p>
            L’architecture repose sur une segmentation logique du réseau,
            associée à une infrastructure de virtualisation.
          </p>

          <div class="architecture-grid">

            <div class="architecture-item">
              <span class="architecture-icon">01</span>

              <div>
                <h3>Switch Cisco</h3>
                <p>
                  Élément central permettant de connecter les équipements
                  et de gérer la segmentation réseau.
                </p>
              </div>
            </div>


            <div class="architecture-item">
              <span class="architecture-icon">02</span>

              <div>
                <h3>VLAN 30 et VLAN 40</h3>
                <p>
                  Séparation logique des équipements afin d’organiser
                  et sécuriser les différents flux réseau.
                </p>
              </div>
            </div>


            <div class="architecture-item">
              <span class="architecture-icon">03</span>

              <div>
                <h3>Trunk réseau</h3>
                <p>
                  Transport de plusieurs VLAN entre les équipements
                  compatibles.
                </p>
              </div>
            </div>


            <div class="architecture-item">
              <span class="architecture-icon">04</span>

              <div>
                <h3>2 serveurs Proxmox</h3>
                <p>
                  Hébergement des machines virtuelles et des différents
                  services nécessaires à l’infrastructure.
                </p>
              </div>
            </div>


            <div class="architecture-item">
              <span class="architecture-icon">05</span>

              <div>
                <h3>Postes clients</h3>
                <p>
                  Machines utilisées pour tester l’accès au réseau
                  et la communication avec les différents services.
                </p>
              </div>
            </div>


            <div class="architecture-item">
              <span class="architecture-icon">06</span>

              <div>
                <h3>Câblage Cat6A</h3>
                <p>
                  Support physique retenu pour assurer les connexions
                  Ethernet de l’infrastructure.
                </p>
              </div>
            </div>

          </div>


          <div class="architecture-placeholder">
            <span>Schéma réseau</span>

            <strong>
              Le schéma détaillé de l’infrastructure sera intégré ici.
            </strong>

            <p>
              Il permettra de visualiser les VLAN, les équipements Cisco,
              les serveurs Proxmox et les postes clients.
            </p>
          </div>

        </div>
      </article>


      <!-- TECHNOLOGIES -->

      <article class="content-card project-section">
        <p class="project-number">04</p>

        <div>
          <h2>Technologies utilisées</h2>

          <div class="project-technologies">
            <span>Cisco</span>
            <span>Proxmox</span>
            <span>VLAN</span>
            <span>Trunk</span>
            <span>TCP/IP</span>
            <span>Ethernet</span>
            <span>Cat6A</span>
            <span>Virtualisation</span>
          </div>
        </div>
      </article>


      <!-- REALISATION -->

      <article class="content-card project-section">
        <p class="project-number">05</p>

        <div>
          <h2>Étapes de réalisation</h2>

          <div class="timeline">

            <div class="timeline-item">
              <strong>1. Analyse des besoins</strong>
              <p>
                Identification du nombre d’utilisateurs,
                des équipements et des besoins réseau.
              </p>
            </div>


            <div class="timeline-item">
              <strong>2. Conception de l’architecture</strong>
              <p>
                Organisation des équipements et préparation
                du schéma réseau.
              </p>
            </div>


            <div class="timeline-item">
              <strong>3. Création des VLAN</strong>
              <p>
                Mise en place des VLAN 30 et 40 afin de
                segmenter le réseau.
              </p>
            </div>


            <div class="timeline-item">
              <strong>4. Configuration des équipements Cisco</strong>
              <p>
                Configuration des ports, des VLAN et des liens trunk.
              </p>
            </div>


            <div class="timeline-item">
              <strong>5. Mise en place de Proxmox</strong>
              <p>
                Installation et configuration de l’environnement
                de virtualisation.
              </p>
            </div>


            <div class="timeline-item">
              <strong>6. Tests réseau</strong>
              <p>
                Vérification de la communication entre les équipements
                et validation de l’infrastructure.
              </p>
            </div>

          </div>
        </div>
      </article>


 <!-- DIFFICULTES -->

<article class="content-card project-section">
  <p class="project-number">06</p>

  <div>
    <h2>Difficultés rencontrées</h2>

    <div class="issue-list">

      <div class="issue-card">
        <h3>Configuration des VLAN</h3>

        <p>
          La configuration des VLAN nécessite de vérifier que chaque port
          du switch est associé au bon réseau et que les équipements
          communiquent uniquement selon l’architecture prévue.
        </p>
      </div>

      <div class="issue-card">
        <h3>Configuration des liens trunk</h3>

        <p>
          La configuration des trunks demande une attention particulière
          afin de transporter correctement les VLAN entre les différents
          équipements réseau.
        </p>
      </div>

      <div class="issue-card">
        <h3>Intégration de Proxmox au réseau</h3>

        <p>
          L’intégration des serveurs Proxmox nécessite de configurer
          correctement les interfaces réseau et les réseaux virtuels
          afin que les machines virtuelles puissent communiquer avec
          l’infrastructure.
        </p>
      </div>

    </div>

    <p class="project-note">
      Cette section sera ajustée avec les difficultés réellement rencontrées
      pendant la réalisation du projet.
    </p>

  </div>
</article>


<!-- SOLUTIONS -->

<article class="content-card project-section">
  <p class="project-number">07</p>

  <div>
    <h2>Solutions apportées</h2>

    <div class="solution-list">

      <div class="solution-card">
        <h3>Vérification de la configuration VLAN</h3>

        <p>
          Contrôle de l’affectation des ports et vérification de la
          configuration des VLAN sur les équipements Cisco.
        </p>
      </div>

      <div class="solution-card">
        <h3>Contrôle des trunks</h3>

        <p>
          Vérification des VLAN autorisés sur les liens trunk et réalisation
          de tests de communication entre les différents segments réseau.
        </p>
      </div>

      <div class="solution-card">
        <h3>Tests de connectivité</h3>

        <p>
          Utilisation de tests réseau pour vérifier l’adressage IP,
          la communication entre les équipements et l’accès aux services
          hébergés sur Proxmox.
        </p>
      </div>

    </div>
  </div>
</article>


      <!-- RESULTATS -->

      <article class="content-card project-section">
        <p class="project-number">08</p>

        <div>
          <h2>Résultats</h2>

          <p>
            Le projet permet de disposer d’une architecture structurée,
            segmentée et virtualisée pouvant servir de base à une
            infrastructure d’entreprise.
          </p>
        </div>
      </article>


      <!-- COMPETENCES -->

      <article class="content-card project-section">
        <p class="project-number">09</p>

        <div>
          <h2>Compétences développées</h2>

          <div class="skills-result">

            <span>Configuration Cisco</span>

            <span>Segmentation VLAN</span>

            <span>Configuration de trunks</span>

            <span>Adressage TCP/IP</span>

            <span>Virtualisation Proxmox</span>

            <span>Diagnostic réseau</span>

            <span>Conception d’architecture</span>

            <span>Documentation technique</span>

          </div>
        </div>
      </article>


    </div>
  </section>
</template>