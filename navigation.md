# Navigation du projet

<br><br><br>

## CONFIGURATION

### Configuration Multer
- [Ouvrir dans le code](./server.js#L33) (ligne 33)

### Configuration express
- [Ouvrir dans le code](./server.js#L120) (ligne 120)

<br><br><br>

## MIDDLEWARES

### Authenticate
- [Ouvrir dans le code](./server.js#L154) (ligne 154)

### isAdmin
- [Ouvrir dans le code](./server.js#L168) (ligne 168)

### Compression de fichier unique
- [Ouvrir dans le code](./server.js#L182) (ligne 182)

<br><br><br>

## ROUTES GET

### Page d'accueil
- [Ouvrir dans le code](./server.js#L255) (ligne 255)

### Page de présentation
- [Ouvrir dans le code](./server.js#L283) (ligne 283)

### Page de listing des machines de l'entreprise
- [Ouvrir dans le code](./server.js#L299) (ligne 299)

### Page admin de listing des machines de l'entreprise
- [Ouvrir dans le code](./server.js#L376) (ligne 376)

### Page de listing des réalisations de l'entreprise
- [Ouvrir dans le code](./server.js#L438) (ligne 438)

### Page de demande de devis
- [Ouvrir dans le code](./server.js#L505) (ligne 505)

### Page de contact
- [Ouvrir dans le code](./server.js#L551) (ligne 551)

### Page de connexion
- [Ouvrir dans le code](./server.js#L591) (ligne 591)

### Page de listing des offres d'emploi
- [Ouvrir dans le code](./server.js#L609) (ligne 609)

### Page d'affichage d'une offre spécifique
- [Ouvrir dans le code](./server.js#L661) (ligne 661)

### Page pour postuler une offre précise
- [Ouvrir dans le code](./server.js#L689) (ligne 689)

### Page d'accueil admin
- [Ouvrir dans le code](./server.js#L716) (ligne 716)

### Page de présentation de l'entreprsie pour l'admin
- [Ouvrir dans le code](./server.js#L734) (ligne 734)

### Page de listing des réalisations de l'entreprise, pour l'admin
- [Ouvrir dans le code](./server.js#L752) (ligne 752)

### Page de déconnexion / transition pour se déconnecter et détruire la session
- [Ouvrir dans le code](./server.js#L817) (ligne 817)

### Récupération des dimensions maximales (x,y,z) supportées par les machines
- [Ouvrir dans le code](./server.js#L839) (ligne 839)

### Page de modification d'une réalisation (d'un produit)
- [Ouvrir dans le code](./server.js#L856) (ligne 856)

### Page de suppression globale (catégorie, machine, réalisation)
- [Ouvrir dans le code](./server.js#L889) (ligne 889)

### Page de modification des informations d'une machine de l'entreprise
- [Ouvrir dans le code](./server.js#L912) (ligne 912)

### Page de rentrée d'informations pour l'ajout d'une machine sur le site
- [Ouvrir dans le code](./server.js#L941) (ligne 941)

### Page de rentrée d'information pour l'ajout d'une réalisation sur le site
- [Ouvrir dans le code](./server.js#L979) (ligne 979)

### Page de rentrée d'informations pour l'ajout d'une catégorie sur le site
- [Ouvrir dans le code](./server.js#L1010) (ligne 1010)

### Page de gestion du profil utilisateur
- [Ouvrir dans le code](./server.js#L1046) (ligne 1046)

### Page de listing des offres (côté admin)
- [Ouvrir dans le code](./server.js#L1074) (ligne 1074)

### Page de rentrée d'informations pour l'ajout d'une offre d'emploi sur le site
- [Ouvrir dans le code](./server.js#L1120) (ligne 1120)

### Page de listing des actualités de l'entreprise
- [Ouvrir dans le code](./server.js#L1160) (ligne 1160)

### Page d'affichage d'un article d'actualités précise
- [Ouvrir dans le code](./server.js#L1188) (ligne 1188)

### Page d'entrée d'informations pour l'ajout d'article d'actualités sur le site
- [Ouvrir dans le code](./server.js#L1221) (ligne 1221)

### Page de listing des actualités (admin)
- [Ouvrir dans le code](./server.js#L1234) (ligne 1234)

### Page de récupération du mot de passe oublié
- [Ouvrir dans le code](./server.js#L1259) (ligne 1259)

### Page de désabonnement à la newsletter de l'entreprise
- [Ouvrir dans le code](./server.js#L1273) (ligne 1273)

### Page des politiques de confidentialité
- [Ouvrir dans le code](./server.js#L1292) (ligne 1292)

### Page d'explication "tournage" et "fraisage"
- [Ouvrir dans le code](./server.js#L1312) (ligne 1312)

### Page de mentions légales
- [Ouvrir dans le code](./server.js#L1331) (ligne 1331)

### Page de tests
- [Ouvrir dans le code](./server.js#L1369) (ligne 1369)

<br><br><br>

## ROUTES POST

### Envoi du CV à l’entreprise lors de la candidature à une offre d’emploi.
- [Ouvrir dans le code](./server.js#L1402) (ligne 1402)

### Suppression d'un article d'actualités de l'entreprise
- [Ouvrir dans le code](./server.js#L1625) (ligne 1625)

### Stockage temporaire des images d'articles via Multer
- [Ouvrir dans le code](./server.js#L1691) (ligne 1691)

### Transformation du texte d'un article pour l'insérer dans la BDD
- [Ouvrir dans le code](./server.js#L1714) (ligne 1714)

### Désabonnement de l'utilisateur à la newsletter
- [Ouvrir dans le code](./server.js#L1881) (ligne 1881)

### Ajout de l'adresse mail dans la BDD
- [Ouvrir dans le code](./server.js#L1934) (ligne 1934)

### Renvoie les informations d'un article d'actualité précis pour l'afficher sur la page
- [Ouvrir dans le code](./server.js#L1990) (ligne 1990)

### Renvoie les informations sur une offre d'emploi précise pour l'affichage
- [Ouvrir dans le code](./server.js#L2023) (ligne 2023)

### Ajout d'une offre d'emploi
- [Ouvrir dans le code](./server.js#L2068) (ligne 2068)

### Confirmation des modifications apportées à une offre d'emploi
- [Ouvrir dans le code](./server.js#L2204) (ligne 2204)

### Consulter une offre d'emploi en tant qu'admin
- [Ouvrir dans le code](./server.js#L2416) (ligne 2416)

### Permet d'accéder à la page de modification d'une offre
- [Ouvrir dans le code](./server.js#L2455) (ligne 2455)

### Suppression d'une offre d'emploi
- [Ouvrir dans le code](./server.js#L2486) (ligne 2486)

### Modification de l'identifiant de l'utilisateur
- [Ouvrir dans le code](./server.js#L2505) (ligne 2505)

### Modification de l'adresse mail de l'utilisateur
- [Ouvrir dans le code](./server.js#L2537) (ligne 2537)

### Modification du numéro de téléphone de l'utilisateur
- [Ouvrir dans le code](./server.js#L2566) (ligne 2566)

### Modification du mot de passe de l'utilisateur
- [Ouvrir dans le code](./server.js#L2600) (ligne 2600)

### Suppression d'une catégorie de produits de la BDD
- [Ouvrir dans le code](./server.js#L2692) (ligne 2692)

### Suppression d'une réalisation de la BDD
- [Ouvrir dans le code](./server.js#L2712) (ligne 2712)

### Suppression d'une machine de la BDD
- [Ouvrir dans le code](./server.js#L2745) (ligne 2745)

### Création d'une catégorie de réalisations dans la BDD
- [Ouvrir dans le code](./server.js#L2778) (ligne 2778)

### Création d'une réalisation dans la BDD
- [Ouvrir dans le code](./server.js#L2808) (ligne 2808)

### Création d'une machine dans la BDD
- [Ouvrir dans le code](./server.js#L2838) (ligne 2838)

### Modification d'une réalisation de la BDD
- [Ouvrir dans le code](./server.js#L2924) (ligne 2924)

### Modification des informations d'une machine
- [Ouvrir dans le code](./server.js#L2989) (ligne 2989)

### Envoi de demande de devis
- [Ouvrir dans le code](./server.js#L3105) (ligne 3105)

### Prise de contact depuis la page dédiée
- [Ouvrir dans le code](./server.js#L3359) (ligne 3359)

### Connexion de l'utilisateur
- [Ouvrir dans le code](./server.js#L3518) (ligne 3518)

### Envoi du code de récupération de mot de passe
- [Ouvrir dans le code](./server.js#L3568) (ligne 3568)

### Vérification du code de récupération du MDP
- [Ouvrir dans le code](./server.js#L3643) (ligne 3643)

### Rentrée du nouveau mot de passe suite à l'oubli de l'ancien
- [Ouvrir dans le code](./server.js#L3691) (ligne 3691)

<br><br><br>

## Fonctions annexes

### Formatage du mail d'oubli de mot de passe
- [Ouvrir dans le code](./server.js#L3773) (ligne 3773)

<br><br><br>

## LOCAL ONLY

### Route de connexion rapide en tant qu'admin
- [Ouvrir dans le code](./server.js#L3893) (ligne 3893)

<br><br><br>

## 404 Handler

### Page 404
- [Ouvrir dans le code](./server.js#L3928) (ligne 3928)

<br><br><br>

