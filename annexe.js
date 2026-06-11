//ANCHOR: Génération de token aléatoire
// Cette fonction sert à générer un token aléatoire
/* PARAMETRES
size = taille finale souhaitée. Si ce paramètre n'est pas remplit, generateToken fait appel à une fonction aléatoire pour le générer
*/
function generateToken(size = 0){
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = []
    if (size === 0){
        while (size < 8){
            size = Math.round(Math.random() * 24);
        } 
    };
    for (let i = 0; i < size; i++){
        const alea = Math.floor(Math.random() * 62) // quantité de caractères dans "char"
        result.push(char[alea]);
    }
    const res = result.join("");
    return res
}

//TESTS
/*
console.log("Sans size donnée ↓");
console.log(generateToken());

console.log("Avec size donnée ↓");
console.log(generateToken(6));
*/





// Conversion d'une string en tableau de caracteres uniques
function stringToList(text){
    return text.split("")
}







//ANCHOR: Fonction de capitalisation de la première lettre de chaque mots d'une phrase, et, accessoirement, nettoie la chaine de caractère de tout autre type de carcatere
// Capitalisation automatique, sans utiliser de fonction préfaite
// Entrée : "bonjour je suis là"
// Sortie : "Bonjour Je Suis Là"
function capitalize(text){
    const min = "abcdefghijklmnopqrstuvwxyz"
    const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let tab = [];
    let tab2 = [];
    let index = -1
    const list = text.split(" ");
    // Séparation de toutes les lettres
    for (let i = 0; i < list.length ; i++){
        let actu = list[i];
        let divided = actu.match(/[a-z]/gi)
        tab.push(divided);
    }
    // Capitalisation de la première lettre
    for (const element of tab){
        //trouver l'index de la lettre dans la liste "min" ou "maj"
        for (let j = 0; j < min.length ; j++){
            if (min[j] === element[0] || maj[j] === element[0]){
                index = j;
            };
        };
        if (index !== -1){
            let majLetter = maj[index];
            element[0] = majLetter;
            index = -1;
        }
        // remise en forme des mots
        tab2.push(element.join(""));
    }
    // remise en forme de la phrase
    return tab2.join(" ");
}

// TESTS
// console.log(capitalize("bonjour Cest moi qui suis ton pere"));
// console.log(capitalize("bonjour"))










//ANCHOR: Fonction de formatage de date. Peut importe le format de base, va renvoyer un truc cohérent au format XX/XX/XXXX
// Formatage d'une date
// Entrée : "12:05-2005"
// Sortie : "12/05/2005"
function dateformat(date){
    return date.split(/[-:/._ ]/).join("/")
}

/*
// TESTS
console.log(dateformat("12:15:2006"))
console.log(dateformat("12/15-2006"))
console.log(dateformat("12/15/2006"))
console.log(dateformat("12_15_2006"))
console.log(dateformat("12.15.2006"))
*/





// Suppression des accents
// Entrée : "Éléphant très âgé"
// Sortie : "Elephant tres age"
function noAccent(text){
    const avecAccent = "éÉèÈêÊëËàÀâÂäÄçÇñÑîÎïÏûüùÛÜôöÔÖÿ";
    const sansAccent = "eEeEeEeEaAaAaAcCnNiIiIuuuUUooOOy";
    let solution = ""
    let newletter = ""
    let j = 0
    let tab = text.split("");
    for (let element of tab){
        newletter = element
        for (let i = 0; i < avecAccent.length; i++){
            if (element === avecAccent[i]){
                newletter = sansAccent[i]
            };
            
        }
        tab[j] = newletter
        j++
    }
    // Réassemblage
    solution = tab.join("");
    return solution
    
}

/*
// TESTS
console.log(noAccent("Éléphant très âgé"));
console.log(noAccent("À la revoyure, ñoul"));
console.log(noAccent("Ça fart le djeuns ? Ç'était pas trop compliqué ?"))
*/






// Génération d'un slug URL
// Entrée : "Machine CNC 5 axes"
// Sortie : "machine-cnc-5-axes"
function slugGenerator(text){
    return noAccent(text).toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
}

//TESTS
console.log(slugGenerator("Machine ÇNC 5 Axes"))
console.log(slugGenerator("Je Suis une URL Maintenant"))
console.log(slugGenerator("C'est moi héhé !"))

















// Génération d'un mot de passe aléatoire
// Entrée : longueur = 12
// Sortie : "aK7!zQ9#mLp2"

// Génération d'une référence client
// Sortie : "CLI-2026-0001"

// Génération d'un numéro de devis
// Sortie : "DEV-202606-421"

// Vérification d'adresse email
// Entrée : "contact@meca-cn.fr"
// Sortie : true

// Vérification d'extension de fichier
// Entrée : "piece.step"
// Sortie : true

// Conversion taille fichier
// Entrée : 1542876
// Sortie : "1.47 Mo"

// Calcul du temps écoulé
// Entrée : date passée
// Sortie : "Il y a 3 jours"

// Différence entre deux dates
// Entrée : 01/06/2026 et 11/06/2026
// Sortie : 10

// Conversion secondes vers format lisible
// Entrée : 3671
// Sortie : "1h 1min 11s"

// Conversion durée lisible vers secondes
// Entrée : "1h 30min"
// Sortie : 5400

// Tronquer un texte
// Entrée : texte de 500 caractères, limite 100
// Sortie : texte coupé + "..."

// Compter le nombre de mots
// Entrée : "Bonjour je suis Sébastien"
// Sortie : 4

// Extraire les initiales
// Entrée : "Sébastien Confrère"
// Sortie : "SC"

// Vérifier si une chaîne est un palindrome
// Entrée : "kayak"
// Sortie : true

// Mélanger un tableau aléatoirement
// Entrée : [1,2,3,4,5]
// Sortie : [4,1,5,2,3]

// Supprimer les doublons d'un tableau
// Entrée : [1,2,2,3,4,4]
// Sortie : [1,2,3,4]

// Trier un tableau d'objets par propriété
// Entrée : [{nom:"B"},{nom:"A"}]
// Sortie : [{nom:"A"},{nom:"B"}]

// Recherche dans un tableau d'objets
// Entrée : liste de pièces + "axe"
// Sortie : toutes les pièces contenant "axe"

// Pagination
// Entrée : tableau de 100 éléments, page 3, taille 10
// Sortie : éléments 21 à 30

// Grouper des objets par catégorie
// Entrée : liste de produits
// Sortie : objets regroupés par catégorie

// Calcul du stock faible
// Entrée : quantité = 3, seuil = 5
// Sortie : true

// Calcul de valorisation du stock
// Entrée : quantité = 10, prix = 15
// Sortie : 150

// Détection de doublons dans un stock
// Entrée : liste de références
// Sortie : références en double

// Export JSON
// Entrée : objet JavaScript
// Sortie : chaîne JSON

// Import JSON
// Entrée : chaîne JSON
// Sortie : objet JavaScript

// Deep Clone
// Description : créer une copie totalement indépendante d'un objet imbriqué.
// Modification de la copie ne doit jamais modifier l'original.

// Debounce
// Description : empêche une fonction d'être exécutée trop souvent.
// Exemple : l'utilisateur tape dans une barre de recherche.
// Tant qu'il continue de taper, la recherche n'est pas lancée.
// Elle ne s'exécute qu'après 500 ms d'inactivité.

// Throttle
// Description : limite une fonction à une exécution toutes les X secondes.
// Exemple : mise à jour de la position de la souris.
// Même si l'évènement se produit 100 fois/seconde,
// la fonction ne s'exécute qu'une fois toutes les 200 ms.

// Rate Limiter
// Description : limite le nombre d'actions autorisées.
// Exemple : maximum 5 tentatives de connexion en 10 minutes.
// Au-delà : refus automatique.

// Cache mémoire
// Description : mémorise les résultats déjà calculés.
// Si la même donnée est demandée une deuxième fois,
// retourner directement le résultat enregistré.

// Historique Annuler / Rétablir
// Description : stocke les états successifs d'un objet.
// Permet de faire Undo / Redo comme dans un logiciel de bureautique.

// Journalisation (Logger)
// Entrée : type + message
// Sortie : "[11/06/2026 14:32] INFO : Utilisateur connecté"

// Générateur de notifications
// Entrée : type = succès
// Sortie : objet notification prêt à afficher

// Gestionnaire de permissions
// Entrée : rôle = admin
// Sortie : liste des actions autorisées

// Gestionnaire de sessions
// Entrée : utilisateur connecté
// Sortie : date d'expiration, token, durée restante











