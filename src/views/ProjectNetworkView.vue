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
      Configuration d’une infrastructure réseau Cisco
     </h1>

      <p class="lead">
        Mise en place d’une infrastructure réseau segmentée avec un switch
        et un routeur Cisco, des services Linux et un serveur Windows
        assurant Active Directory et DNS.
      </p>
      <div class="project-main-tags">
  <span>Cisco</span>
  <span>VLAN</span>
  <span>802.1Q</span>
  <span>Router-on-a-Stick</span>
  <span>DHCP</span>
  <span>NAT</span>
  <span>Linux</span>
  <span>Windows Server</span>
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
        Segmenter le réseau à l’aide de VLAN afin d’isoler
        les postes utilisateurs et les serveurs.
      </li>

      <li>
        Mettre en place un routage inter-VLAN avec la méthode
        Router-on-a-Stick.
      </li>

      <li>
        Distribuer automatiquement les adresses IP grâce au DHCP.
      </li>

      <li>
        Permettre l’accès Internet aux différents réseaux
        grâce au NAT/PAT.
      </li>

      <li>
        Déployer des services Linux de transfert et de partage
        de fichiers avec FTP et Samba.
      </li>

      <li>
        Mettre en place un domaine Active Directory
        sous Windows Server.
      </li>

      <li>
        Assurer la résolution de noms interne grâce au DNS.
      </li>

      <li>
        Tester et valider la connectivité de l’ensemble
        de l’infrastructure.
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
      L’infrastructure repose sur un routeur Cisco connecté à Internet
      et à un switch Cisco manageable. Le réseau est segmenté en plusieurs
      VLAN afin de séparer les postes utilisateurs et les serveurs.
    </p>

    <div class="architecture-grid">

      <div class="architecture-item">
        <span class="architecture-icon">01</span>

        <div>
          <h3>Accès Internet / WAN</h3>
          <p>
            Le routeur Cisco reçoit son adresse WAN automatiquement
            via DHCP sur l’interface G0/0.
          </p>
        </div>
      </div>

      <div class="architecture-item">
        <span class="architecture-icon">02</span>

        <div>
          <h3>Routeur Cisco</h3>
          <p>
            Il assure le routage inter-VLAN, le DHCP et l’accès Internet
            grâce au NAT/PAT.
          </p>
        </div>
      </div>

      <div class="architecture-item">
        <span class="architecture-icon">03</span>

        <div>
          <h3>Trunk 802.1Q</h3>
          <p>
            Le port Fa0/24 du switch transporte les VLAN 1, 2 et 3
            vers le routeur sur un seul lien trunk.
          </p>
        </div>
      </div>

      <div class="architecture-item">
        <span class="architecture-icon">04</span>

        <div>
          <h3>VLAN 2 — 192.168.2.0/24</h3>
          <p>
            Le VLAN 2 accueille les postes utilisateurs et le
            Windows Server. Sa passerelle est 192.168.2.254.
          </p>
        </div>
      </div>

      <div class="architecture-item">
        <span class="architecture-icon">05</span>

        <div>
          <h3>VLAN 3 — 192.168.3.0/24</h3>
          <p>
            Le VLAN 3 accueille le serveur Linux fournissant notamment
            les services FTP et Samba. Sa passerelle est 192.168.3.254.
          </p>
        </div>
      </div>

      <div class="architecture-item">
        <span class="architecture-icon">06</span>

        <div>
          <h3>Router-on-a-Stick</h3>
          <p>
            Les sous-interfaces G0/1.2 et G0/1.3 du routeur permettent
            la communication entre les VLAN 2 et 3.
          </p>
        </div>
      </div>

    </div>

    <div class="architecture-placeholder">
      <span>Schéma logique</span>

      <strong>
        Internet → Routeur Cisco → Trunk 802.1Q → Switch Cisco
      </strong>

      <p>
        VLAN 2 : postes utilisateurs + Windows Server<br>
        VLAN 3 : serveur Linux<br>
        VLAN 1 : réseau principal
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
  <span>VLAN</span>
  <span>802.1Q</span>
  <span>Router-on-a-Stick</span>
  <span>DHCP</span>
  <span>NAT/PAT</span>
  <span>TCP/IP</span>
  <span>Linux</span>
  <span>FTP</span>
  <span>Samba / SMB</span>
  <span>Windows Server</span>
  <span>ADDS</span>
  <span>DNS</span>
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
        <strong>1. Câblage et accès aux équipements Cisco</strong>
        <p>
          Branchement des équipements et connexion aux consoles
          du switch et du routeur Cisco avec PuTTY.
        </p>
      </div>

      <div class="timeline-item">
        <strong>2. Configuration du switch Cisco</strong>
        <p>
          Création des VLAN 2 et 3, affectation des ports
          utilisateurs et configuration du port Fa0/24 en trunk 802.1Q.
        </p>
      </div>

      <div class="timeline-item">
        <strong>3. Configuration du routeur Cisco</strong>
        <p>
          Configuration des interfaces et sous-interfaces,
          du Router-on-a-Stick, des pools DHCP et du NAT/PAT
          pour permettre l'accès Internet.
        </p>
      </div>

      <div class="timeline-item">
        <strong>4. Validation de la partie réseau</strong>
        <p>
          Vérification des VLAN, du trunk, du routage inter-VLAN,
          de l'attribution DHCP et de la connectivité Internet.
        </p>
      </div>

      <div class="timeline-item">
        <strong>5. Mise en place des services Linux</strong>
        <p>
          Installation et configuration du service FTP avec vsftpd
          et du partage de fichiers SMB avec Samba.
        </p>
      </div>

      <div class="timeline-item">
        <strong>6. Configuration de Windows Server</strong>
        <p>
          Configuration d'une adresse IP fixe, installation d'ADDS,
          promotion en contrôleur de domaine, configuration DNS
          et création des utilisateurs et groupes.
        </p>
      </div>

      <div class="timeline-item">
        <strong>7. Tests et validation finale</strong>
        <p>
          Vérification de la résolution DNS, de l'accès au domaine,
          des services Linux et de la communication entre
          les différents segments réseau.
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
        <h3>Conflit dans la configuration NAT</h3>

        <p>
          La première configuration utilisait plusieurs ACL NAT séparées
          sur la même interface WAN, ce qui provoquait un conflit dans
          la configuration du routeur.
        </p>
      </div>

      <div class="issue-card">
        <h3>Segmentation et routage inter-VLAN</h3>

        <p>
          La mise en place des VLAN et du Router-on-a-Stick demandait
          une configuration précise du trunk 802.1Q et des sous-interfaces
          du routeur afin de permettre la communication entre les réseaux.
        </p>
      </div>

      <div class="issue-card">
        <h3>Configuration des services Windows Server</h3>

        <p>
          Le serveur Windows devait être configuré avec une adresse IP fixe
          et un DNS adapté avant le déploiement d'Active Directory afin
          d'assurer le bon fonctionnement du domaine.
        </p>
      </div>

      <div class="issue-card">
        <h3>Validation de la connectivité</h3>

        <p>
          Plusieurs tests ont été nécessaires pour vérifier le DHCP,
          le routage inter-VLAN, le NAT, le DNS interne et l'accès
          aux différents services.
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
        <h3>Correction de la configuration NAT</h3>

        <p>
          Les ACL NAT ont été regroupées afin d'éviter les conflits
          sur l'interface WAN. La configuration a ensuite été associée
          au NAT overload pour permettre à plusieurs réseaux privés
          de partager l'accès Internet.
        </p>
      </div>

      <div class="solution-card">
        <h3>Configuration du Router-on-a-Stick</h3>

        <p>
          Le lien entre le switch et le routeur a été configuré en trunk 802.1Q.
          Des sous-interfaces G0/1.2 et G0/1.3 ont été créées sur le routeur
          afin d'assurer le routage entre les VLAN 2 et 3.
        </p>
      </div>

      <div class="solution-card">
        <h3>Configuration correcte de Windows Server</h3>

        <p>
          Une adresse IP statique a été attribuée au serveur Windows,
          avec la passerelle du VLAN 2 et un DNS local adapté.
          L'Active Directory et le DNS ont ensuite été configurés
          pour assurer l'authentification et la résolution de noms internes.
        </p>
      </div>

      <div class="solution-card">
        <h3>Réalisation de tests de validation</h3>

        <p>
          Des commandes de vérification et des tests réseau ont été utilisés
          pour contrôler les VLAN, le trunk, le DHCP, le routage inter-VLAN,
          le NAT, le FTP, le SMB, le DNS et l'accès au domaine.
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
      Les tests réalisés ont permis de valider le bon fonctionnement
      de l'ensemble de l'infrastructure réseau et système.
    </p>

    <div class="results-grid">

      <div class="result-card">
        <strong>VLAN 2 & 3</strong>
        <span>Configurés et opérationnels</span>
      </div>

      <div class="result-card">
        <strong>802.1Q</strong>
        <span>Trunk actif sur Fa0/24</span>
      </div>

      <div class="result-card">
        <strong>DHCP</strong>
        <span>Adresses distribuées automatiquement</span>
      </div>

      <div class="result-card">
        <strong>NAT/PAT</strong>
        <span>Accès Internet fonctionnel</span>
      </div>

      <div class="result-card">
        <strong>FTP & SMB</strong>
        <span>Services Linux accessibles</span>
      </div>

      <div class="result-card">
        <strong>ADDS & DNS</strong>
        <span>Domaine Windows opérationnel</span>
      </div>

    </div>

    <p>
      L'infrastructure finale permet la segmentation des réseaux,
      la communication inter-VLAN, l'accès Internet, le partage de fichiers,
      le transfert FTP, l'authentification centralisée et la résolution
      de noms interne.
    </p>
  </div>
</article>


     <!-- COMPETENCES -->

<article class="content-card project-section">
  <p class="project-number">09</p>

  <div>
    <h2>Compétences développées</h2>

    <div class="skills-result">

      <span>Configuration de switch Cisco</span>

      <span>Création et gestion de VLAN</span>

      <span>Configuration de trunk 802.1Q</span>

      <span>Routage inter-VLAN</span>

      <span>Router-on-a-Stick</span>

      <span>Configuration DHCP</span>

      <span>Configuration NAT/PAT</span>

      <span>Administration Linux</span>

      <span>Configuration FTP avec vsftpd</span>

      <span>Partage SMB avec Samba</span>

      <span>Administration Windows Server</span>

      <span>Active Directory Domain Services</span>

      <span>Configuration DNS</span>

      <span>Gestion des utilisateurs et groupes</span>

      <span>Diagnostic réseau</span>

      <span>Tests de connectivité</span>

    </div>
  </div>
</article>
    </div>
  </section>
</template>