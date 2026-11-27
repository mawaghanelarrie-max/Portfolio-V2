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
        Infrastructure virtualisée sous Proxmox
      </h1>

      <p class="lead">
        Déploiement d’une infrastructure réseau et systèmes entièrement
        virtualisée sous Proxmox avec OPNsense, services Linux et Windows Server.
      </p>

      <div class="project-main-tags">
        <span>Proxmox</span>
        <span>OPNsense</span>
        <span>Debian</span>
        <span>Samba</span>
        <span>vsftpd</span>
        <span>GLPI</span>
        <span>Windows Server</span>
        <span>RDS</span>
        <span>WSL2</span>
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
            Ce TP a été réalisé dans un environnement entièrement virtualisé
            sous Proxmox.
          </p>

          <p>
            L’objectif était de déployer une infrastructure réseau et systèmes
            composée de plusieurs machines virtuelles communiquant entre elles
            via OPNsense.
          </p>
        </div>
      </article>
      <!-- OBJECTIFS -->

<article class="content-card project-section">
  <p class="project-number">02</p>

  <div>
    <h2>Objectifs</h2>

    <ul class="project-list">
      <li>Déployer une infrastructure entièrement virtualisée sous Proxmox.</li>
      <li>Mettre en place OPNsense comme pare-feu et routeur central.</li>
      <li>Déployer un serveur Debian pour le partage de fichiers avec Samba.</li>
      <li>Mettre en place un serveur FTP avec vsftpd.</li>
      <li>Installer et configurer GLPI avec Apache, MariaDB et PHP.</li>
      <li>Déployer Windows Server 2022 dans l’environnement Proxmox.</li>
      <li>Configurer Remote Desktop Services (RDS).</li>
      <li>Mettre en place WSL2 avec un environnement Linux sous Windows Server.</li>
      <li>Tester et valider la communication entre les différentes machines virtuelles.</li>
    </ul>
  </div>
</article>
<!-- ARCHITECTURE -->

<article class="content-card project-section">
  <p class="project-number">03</p>

  <div class="project-full">
    <h2>Architecture de l’infrastructure</h2>

    <p>
      L’infrastructure est entièrement virtualisée sous Proxmox.
      Plusieurs machines virtuelles communiquent entre elles
      sur le même réseau LAN à travers OPNsense.
    </p>

    <div class="architecture-grid">

      <div class="architecture-item">
        <span class="architecture-icon">01</span>

        <div>
          <h3>OPNsense</h3>
          <p>
            Pare-feu et routeur central de l’infrastructure.
            Il gère les interfaces WAN et LAN ainsi que l’accès Internet.
          </p>
        </div>
      </div>

      <div class="architecture-item">
        <span class="architecture-icon">02</span>

        <div>
          <h3>Debian SMB</h3>
          <p>
            Machine virtuelle dédiée au partage de fichiers
            avec le service Samba.
          </p>
        </div>
      </div>

      <div class="architecture-item">
        <span class="architecture-icon">03</span>

        <div>
          <h3>Debian FTP + GLPI</h3>
          <p>
            Machine virtuelle hébergeant le serveur FTP avec vsftpd
            ainsi que la solution GLPI.
          </p>
        </div>
      </div>

      <div class="architecture-item">
        <span class="architecture-icon">04</span>

        <div>
          <h3>Windows Server 2022</h3>
          <p>
            Machine virtuelle utilisée pour les services RDS
            et l’intégration de WSL2.
          </p>
        </div>
      </div>

    </div>

    <div class="architecture-placeholder">
      <span>Architecture logique</span>

      <strong>
        Proxmox → OPNsense → Machines virtuelles
      </strong>

      <p>
        OPNsense : pare-feu / routeur<br>
        Debian SMB : partage Samba<br>
        Debian FTP + GLPI : services FTP et gestion de parc<br>
        Windows Server 2022 : RDS et WSL2
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
      <span>Proxmox</span>
      <span>OPNsense</span>
      <span>Debian</span>
      <span>Samba</span>
      <span>vsftpd</span>
      <span>GLPI</span>
      <span>Apache</span>
      <span>MariaDB</span>
      <span>PHP</span>
      <span>Windows Server 2022</span>
      <span>RDS</span>
      <span>WSL2</span>
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
        <strong>1. Déploiement de l’environnement Proxmox</strong>
        <p>
          Mise en place de l’environnement de virtualisation et création
          des différentes machines virtuelles nécessaires à l’infrastructure.
        </p>
      </div>

      <div class="timeline-item">
        <strong>2. Configuration d’OPNsense</strong>
        <p>
          Déploiement d’OPNsense comme pare-feu et routeur central,
          avec gestion des interfaces WAN et LAN ainsi que de l’accès Internet.
        </p>
      </div>

      <div class="timeline-item">
        <strong>3. Mise en place du serveur Samba</strong>
        <p>
          Installation de Samba sur Debian, création des utilisateurs,
          des groupes et du partage de fichiers accessible depuis Windows.
        </p>
      </div>

      <div class="timeline-item">
        <strong>4. Installation du serveur FTP</strong>
        <p>
          Installation et configuration de vsftpd, création de l’utilisateur FTP
          et validation de la connexion depuis un poste Windows.
        </p>
      </div>

      <div class="timeline-item">
        <strong>5. Déploiement de GLPI</strong>
        <p>
          Installation d’Apache, MariaDB, PHP et GLPI,
          puis configuration de la base de données et finalisation via navigateur.
        </p>
      </div>

      <div class="timeline-item">
        <strong>6. Configuration de Windows Server 2022</strong>
        <p>
          Installation de Remote Desktop Services et mise en place de WSL2
          avec un environnement Linux sous Windows Server.
        </p>
      </div>

      <div class="timeline-item">
        <strong>7. Tests de validation</strong>
        <p>
          Vérification de la connectivité, des services Samba, FTP, GLPI,
          RDS et WSL2 afin de valider le fonctionnement de l’infrastructure.
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
        <h3>Sources APT incomplètes sous Debian</h3>

        <p>
          Après l’installation de Debian depuis le DVD, les sources APT
          étaient incomplètes, ce qui empêchait certaines mises à jour
          et installations de paquets.
        </p>
      </div>

      <div class="issue-card">
        <h3>Ligne cdrom encore active</h3>

        <p>
          Une ligne cdrom restait présente dans le fichier sources.list,
          provoquant des erreurs lors de l’utilisation de la commande apt update.
        </p>
      </div>

      <div class="issue-card">
        <h3>Compatibilité PHP / GLPI</h3>

        <p>
          La version de PHP installée n’était pas compatible avec certaines
          versions de GLPI, ce qui a nécessité d’adapter la version utilisée.
        </p>
      </div>

      <div class="issue-card">
        <h3>Configuration de vsftpd</h3>

        <p>
          Le fichier vsftpd.conf avait été mal configuré et comportait
          des caractères manquants, empêchant le bon fonctionnement du service FTP.
        </p>
      </div>

      <div class="issue-card">
        <h3>Mauvais bridge réseau Proxmox</h3>

        <p>
          La machine virtuelle Windows était connectée au mauvais bridge réseau,
          ce qui l’empêchait d’accéder correctement au LAN.
        </p>
      </div>

      <div class="issue-card">
        <h3>OPNsense non démarré</h3>

        <p>
          OPNsense n’était pas démarré au début de la session,
          ce qui coupait l’accès Internet des machines virtuelles.
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
        <h3>Correction des sources APT</h3>

        <p>
          Les dépôts Debian en ligne ont été ajoutés manuellement
          dans le fichier sources.list afin de permettre les mises à jour
          et l’installation correcte des paquets.
        </p>
      </div>

      <div class="solution-card">
        <h3>Désactivation de la source cdrom</h3>

        <p>
          La ligne cdrom encore présente dans sources.list a été commentée
          pour éviter les erreurs lors de la commande apt update.
        </p>
      </div>

      <div class="solution-card">
        <h3>Choix d’une version compatible de GLPI</h3>

        <p>
          Une version de GLPI compatible avec la version de PHP installée
          a été utilisée afin de terminer correctement l’installation.
        </p>
      </div>

      <div class="solution-card">
        <h3>Réinitialisation de la configuration FTP</h3>

        <p>
          Le fichier vsftpd.conf a été repris et corrigé
          afin de restaurer une configuration cohérente du service FTP.
        </p>
      </div>

      <div class="solution-card">
        <h3>Correction du bridge Proxmox</h3>

        <p>
          La machine virtuelle Windows a été reconnectée au bon bridge réseau
          afin de rétablir l’accès au LAN et la communication avec les autres VMs.
        </p>
      </div>

      <div class="solution-card">
        <h3>Démarrage d’OPNsense</h3>

        <p>
          OPNsense a été redémarré afin de rétablir le routage,
          la passerelle par défaut et l’accès Internet des machines virtuelles.
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
      Les différents tests réalisés ont permis de valider le bon fonctionnement
      de l’infrastructure virtualisée et des services déployés.
    </p>

    <div class="results-grid">

      <div class="result-card">
        <strong>OPNsense</strong>
        <span>Pare-feu et routage opérationnels</span>
      </div>

      <div class="result-card">
        <strong>Samba</strong>
        <span>Partage accessible depuis Windows</span>
      </div>

      <div class="result-card">
        <strong>FTP</strong>
        <span>Connexion et authentification validées</span>
      </div>

      <div class="result-card">
        <strong>GLPI</strong>
        <span>Interface web fonctionnelle</span>
      </div>

      <div class="result-card">
        <strong>RDS</strong>
        <span>Bureau à distance opérationnel</span>
      </div>

      <div class="result-card">
        <strong>WSL2</strong>
        <span>Ubuntu opérationnel sous Windows Server</span>
      </div>

    </div>

    <p>
      L’infrastructure finale permet de centraliser plusieurs services
      réseau et systèmes dans un environnement entièrement virtualisé
      sous Proxmox.
    </p>
  </div>
</article>
<!-- COMPETENCES -->

<article class="content-card project-section">
  <p class="project-number">09</p>

  <div>
    <h2>Compétences développées</h2>

    <div class="skills-result">

      <span>Virtualisation avec Proxmox</span>

      <span>Configuration de machines virtuelles</span>

      <span>Administration OPNsense</span>

      <span>Configuration réseau et bridges</span>

      <span>Administration Debian</span>

      <span>Gestion des utilisateurs et groupes Linux</span>

      <span>Configuration Samba / SMB</span>

      <span>Configuration FTP avec vsftpd</span>

      <span>Déploiement de GLPI</span>

      <span>Administration Apache</span>

      <span>Configuration MariaDB</span>

      <span>Administration Windows Server 2022</span>

      <span>Remote Desktop Services</span>

      <span>WSL2</span>

      <span>Diagnostic réseau et système</span>

      <span>Résolution d’incidents</span>

    </div>
  </div>
</article>

    </div>
  </section>
</template>