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
        Serveur NAS virtualisé en RAID 0
      </h1>

      <p class="lead">
        Mise en place d’un serveur NAS virtualisé permettant
        de centraliser le stockage et le partage des fichiers
        au sein du réseau local.
      </p>

      <div class="project-main-tags">
        <span>VMware Workstation</span>
        <span>NAS</span>
        <span>DSM 7.1</span>
        <span>RAID 0</span>
        <span>SMB</span>
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
            L’entreprise souhaite centraliser ses documents internes
            afin de simplifier le partage des fichiers et d’améliorer
            leur accessibilité.
          </p>

          <p>
            Avant la mise en place du NAS, les fichiers étaient répartis
            sur plusieurs postes de travail et les échanges étaient réalisés
            manuellement ou à l’aide de supports amovibles.
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
        Installer et configurer un serveur NAS dans un environnement virtualisé.
      </li>

      <li>
        Ajouter deux disques virtuels destinés au stockage.
      </li>

      <li>
        Créer un groupe de stockage en RAID 0.
      </li>

      <li>
        Mettre en place un partage réseau SMB accessible aux utilisateurs.
      </li>

      <li>
        Créer un utilisateur dédié et gérer les permissions d’accès.
      </li>

      <li>
        Tester l’accès au NAS depuis un poste client.
      </li>

      <li>
        Valider le bon fonctionnement du stockage et du partage réseau.
      </li>

    </ul>
  </div>
</article>
<!-- ARCHITECTURE -->

<article class="content-card project-section">
  <p class="project-number">03</p>

  <div class="project-full">
    <h2>Architecture du serveur NAS</h2>

    <p>
      Le serveur NAS est déployé dans une machine virtuelle sous
      VMware Workstation. Deux disques virtuels sont ajoutés afin
      de constituer un espace de stockage en RAID 0.
    </p>

    <div class="architecture-grid">

      <div class="architecture-item">
        <span class="architecture-icon">01</span>

        <div>
          <h3>VMware Workstation</h3>
          <p>
            Plateforme de virtualisation utilisée pour héberger
            la machine virtuelle dédiée au serveur NAS.
          </p>
        </div>
      </div>

      <div class="architecture-item">
        <span class="architecture-icon">02</span>

        <div>
          <h3>Machine virtuelle NAS</h3>
          <p>
            Machine virtuelle configurée avec les ressources nécessaires
            au fonctionnement du système NAS.
          </p>
        </div>
      </div>

      <div class="architecture-item">
        <span class="architecture-icon">03</span>

        <div>
          <h3>Deux disques virtuels</h3>
          <p>
            Deux disques sont ajoutés à la machine virtuelle
            afin de créer le groupe de stockage.
          </p>
        </div>
      </div>

      <div class="architecture-item">
        <span class="architecture-icon">04</span>

        <div>
          <h3>RAID 0</h3>
          <p>
            Les deux disques sont regroupés en RAID 0 afin
            d'obtenir un espace de stockage unifié et de privilégier
            les performances.
          </p>
        </div>
      </div>

      <div class="architecture-item">
        <span class="architecture-icon">05</span>

        <div>
          <h3>DSM 7.1</h3>
          <p>
            Interface d'administration utilisée pour configurer
            le stockage et les services du NAS.
          </p>
        </div>
      </div>

      <div class="architecture-item">
        <span class="architecture-icon">06</span>

        <div>
          <h3>Partage SMB</h3>
          <p>
            Le partage réseau permet aux postes clients Windows
            d'accéder aux fichiers centralisés sur le NAS.
          </p>
        </div>
      </div>

    </div>

    <div class="architecture-placeholder">
      <span>Architecture logique</span>

      <strong>
        VMware Workstation → NAS virtualisé → RAID 0 → Partage SMB
      </strong>

      <p>
        Deux disques virtuels sont associés au NAS afin de créer
        le stockage RAID 0 administré depuis DSM 7.1.
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
      <span>VMware Workstation</span>
      <span>NAS</span>
      <span>DSM 7.1</span>
      <span>RAID 0</span>
      <span>SMB</span>
      <span>Stockage réseau</span>
      <span>Disques virtuels</span>
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
        <strong>1. Création de la machine virtuelle NAS</strong>
        <p>
          Création de la machine virtuelle dans VMware Workstation
          et configuration du matériel virtuel nécessaire au projet.
        </p>
      </div>

      <div class="timeline-item">
        <strong>2. Ajout des disques virtuels</strong>
        <p>
          Ajout de deux disques virtuels destinés à constituer
          le futur espace de stockage du NAS.
        </p>
      </div>

      <div class="timeline-item">
        <strong>3. Construction du loader DSM</strong>
        <p>
          Génération du loader permettant de démarrer et d’installer
          le système DSM sur la machine virtuelle.
        </p>
      </div>

      <div class="timeline-item">
        <strong>4. Installation de DSM 7.1</strong>
        <p>
          Installation et initialisation du système DSM 7.1,
          puis redémarrage et configuration initiale du NAS.
        </p>
      </div>

      <div class="timeline-item">
        <strong>5. Accès à l’interface DSM</strong>
        <p>
          Connexion au bureau DSM afin d’accéder au Gestionnaire
          de stockage et aux différents services du NAS.
        </p>
      </div>

      <div class="timeline-item">
        <strong>6. Création du RAID 0</strong>
        <p>
          Sélection des deux disques virtuels et création du groupe
          de stockage en RAID 0 dans le Gestionnaire de stockage.
        </p>
      </div>

      <div class="timeline-item">
        <strong>7. Validation finale</strong>
        <p>
          Vérification de l’état du NAS, du groupe de stockage
          et de l’accessibilité de l’interface d’administration.
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
        <h3>Aucune difficulté majeure documentée</h3>

        <p>
          Le compte rendu ne signale pas de panne ou d’erreur bloquante
          pendant la réalisation du projet.
        </p>
      </div>

      <div class="issue-card">
        <h3>Points de vigilance</h3>

        <p>
          La configuration du loader DSM, l’installation du système
          et la création du RAID 0 nécessitent de respecter précisément
          l’ordre des étapes afin d’obtenir un NAS fonctionnel.
        </p>
      </div>

    </div>
  </div>
</article>
<!-- SOLUTIONS -->

<article class="content-card project-section">
  <p class="project-number">07</p>

  <div>
    <h2>Solutions apportées</h2>

    <div class="solution-list">

      <div class="solution-card">
        <h3>Configuration progressive de la machine virtuelle</h3>

        <p>
          La machine virtuelle a été configurée étape par étape afin
          de vérifier la compatibilité du matériel virtuel avant
          l’installation du système NAS.
        </p>
      </div>

      <div class="solution-card">
        <h3>Construction du loader avant l’installation</h3>

        <p>
          Le loader DSM a été généré avant l’installation afin
          de permettre le démarrage correct du système DSM
          dans l’environnement virtualisé.
        </p>
      </div>

      <div class="solution-card">
        <h3>Validation du système DSM</h3>

        <p>
          Après l’installation, l’accès au bureau DSM a permis
          de vérifier que le système était correctement initialisé
          et que les outils d’administration étaient disponibles.
        </p>
      </div>

      <div class="solution-card">
        <h3>Contrôle du RAID 0</h3>

        <p>
          Le groupe de stockage a été créé à partir des deux disques
          virtuels puis vérifié dans le Gestionnaire de stockage
          afin de confirmer son bon fonctionnement.
        </p>
      </div>

      <div class="solution-card">
        <h3>Validation finale du NAS</h3>

        <p>
          Le tableau de bord DSM a été utilisé pour vérifier
          l’état général du NAS et confirmer que l’ensemble
          de la configuration était opérationnel.
        </p>
      </div>

    </div>
  </div>
</article>
<!-- RESULTATS -->

<article class="content-card project-section">
  <p class="project-number">08</p>

  <div>
    <h2>Résultats du projet</h2>

    <p>
      La mise en place du serveur NAS a été réalisée avec succès.
      Le système DSM est opérationnel et le stockage RAID 0
      a été correctement configuré.
    </p>

    <div class="results-grid">

      <div class="result-card">
        <strong>DSM 7.1</strong>
        <span>Système installé et opérationnel</span>
      </div>

      <div class="result-card">
        <strong>RAID 0</strong>
        <span>Groupe de stockage créé</span>
      </div>

      <div class="result-card">
        <strong>2 disques</strong>
        <span>Disques virtuels intégrés</span>
      </div>

      <div class="result-card">
        <strong>NAS</strong>
        <span>Accessible sur le réseau</span>
      </div>

    </div>

    <p>
      Le serveur NAS est désormais fonctionnel et prêt à accueillir
      des données ou des services supplémentaires.
    </p>
  </div>
</article>
<!-- COMPETENCES -->

<article class="content-card project-section">
  <p class="project-number">09</p>

  <div>
    <h2>Compétences développées</h2>

    <div class="skills-result">

      <span>Virtualisation avec VMware Workstation</span>

      <span>Création et configuration de machine virtuelle</span>

      <span>Administration d’un serveur NAS</span>

      <span>Installation de DSM 7.1</span>

      <span>Gestion de stockage</span>

      <span>Configuration RAID 0</span>

      <span>Ajout et gestion de disques virtuels</span>

      <span>Partage réseau SMB</span>

      <span>Gestion des utilisateurs et permissions</span>

      <span>Validation de services réseau</span>

      <span>Documentation technique</span>

      <span>Diagnostic d’un environnement virtualisé</span>

    </div>
  </div>
</article>

    </div>
  </section>
</template>