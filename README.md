# MECA-CN

Site vitrine professionnel développé pour l'entreprise MECA-CN.

---

## 📖 Description

Ce projet contient le site web officiel de l'entreprise MECA-CN.  
Il s'agit d'une plateforme moderne permettant de présenter :

- l'entreprise,
- ses services,
- ses machines,
- ses réalisations,
- ses offres,
- ainsi qu'un système de demande de devis.

L'objectif principal est de faciliter la prospection et de convertir les visiteurs en potentiels clients.

---

## 🎯 Objectifs

- Présenter l'entreprise MECA-CN
- Valoriser les services proposés
- Faciliter la prise de contact
- Renforcer la présence web de l'entreprise
- Centraliser les demandes de devis

---

## 🛠️ Stack Technologique

- Node.js
- Express.js
- EJS
- MySQL
- CSS
- JavaScript

---

## 📁 Structure du Projet

```bash
MECA-CN/
├── public/
├── uploads/
├── views/
├── .env
├── db.js
├── Dump BDD
├── generate-nav.js
├── navigation.md
├── package.json
├── README.md
└── server.js

```

---

## ✨ Fonctionnalités

### Partie client
- **Consultation du catalogue :** Découverte des services et du parc machines (trié par typologie : tournage, fraisage, combiné).
- **Portfolio dynamique :** Visualisation des réalisations avec système de filtrage par secteurs d'activité (médical, automobile, aéronautique, etc.).
- **Espace Recrutement :** Consultation des offres d'emploi disponibles et dépôt de candidature (formulaire avec téléversement de CV).
- **Formulaires sécurisés :** - Prise de contact directe.
  - Demande de devis intelligent avec blocage automatique si les dimensions de la pièce dépassent les capacités maximales ($X, Y, Z$) des machines de l'entreprise.
- **Sécurité Anti-Spam :** Intégration d'un CAPTCHA mathématique généré côté serveur (invisible dans le code source client) pour protéger les formulaires.

### Partie administrateur
- **Tableau de bord :** Interface d'administration sécurisée (accès restreint par rôle).
- **Gestion du Parc Machine :** Ajout, modification et suppression des fiches machines et de leurs caractéristiques techniques.
- **Gestion des Réalisations :** Administration du portfolio (CRUD sur les produits et gestion dynamique des catégories).
- **Gestion RH :** Publication et édition des offres d'emploi.
- **Module de Suppression Global :** Interface centralisée pour nettoyer et purger les anciennes données (machines, produits, catégories).

### Partie interne & Optimisation
- **Gestion des Sessions :** Authentification sécurisée par cookies (Express-session) avec gestion des rôles (`admin`, `client`).
- **Performance Web (Sharp) :** - Compression automatique des images importées par l'administrateur.
  - Conversion à la volée vers le format de nouvelle génération `.webp` (réduction du poids jusqu'à 90% pour un affichage instantané).
  - Redimensionnement automatique des images pour éviter les surcharges serveurs.
- **Sécurisation des données :** Isolation stricte des variables d'environnement (`.env`) et hachage des mots de passe.
- **Architecture Éco-conçue :** Limitation de la charge réseau grâce à l'injection ciblée de fichiers CSS spécifiques par route (via le moteur de template EJS).

---

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/sebastien1909/meca-cn.git
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Créer le fichier `.env`

Créer un fichier nommé `.env` à la racine du projet :

```env
# Configuration base de données
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=meca_cn

# Configuration Nodemailer
EMAIL_USER=votremail@gmail.com
EMAIL_PASS=abcdefghijklmnop
EMAIL_DEST=emaildestinataire@gmail.com

# URL du site
SITE_URL=http://localhost:3000
```

---

## 📌 Variables d'environnement

*ci-dessous les variables à insérer dans le fichier .env*

| Variable | Description |
|---|---|
| DB_HOST | Adresse de la base de données |
| DB_USER | Utilisateur MySQL |
| DB_PASSWORD | Mot de passe MySQL |
| DB_NAME | Nom de la base |
| EMAIL_USER | Adresse mail utilisée pour l'envoi |
| EMAIL_PASS | Clé d'application Gmail |
| EMAIL_DEST | Adresse de réception |
| SITE_URL | URL du site |

---

## ⛔ Informations sensibles

Certaines données doivent impérativement rester privées, notamment :

- La clé d’accès Gmail
- Le mot de passe MySQL
- Les variables présentes dans le fichier `.env`

Par défaut, le fichier `.env` est ignoré par Git grâce au `.gitignore` et n’est donc pas envoyé sur GitHub.

⚠️ Si la règle `.env` est supprimée du `.gitignore`, le fichier pourra être publié en ligne avec l’ensemble des informations sensibles qu’il contient.

---

## 🚀 Lancer le projet

```bash
npm start
```

Le site sera accessible à l'adresse :

```txt
http://localhost:3000
```

---

## 📸 Aperçu

Ajouter ici des captures d'écran du site.

---

## 📚 Tutoriels

### Générer une clé d'application Gmail

#### Étape 1
Accéder à votre compte Google :

https://myaccount.google.com/

#### Étape 2
Activer la validation en deux étapes.

#### Étape 3
Accéder à la section :
Sécurité → Mots de passe des applications

#### Étape 4
Générer une clé pour Nodemailer.

---

## 👨‍💻 Auteur

Créé par : Sébastien Confrère

BUT MMI | Développement Web

---

## 📅 Informations

- Date de création : Avril 2026
- Dernière mise à jour : 19/05/2026



