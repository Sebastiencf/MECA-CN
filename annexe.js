/*

L'objectif est ici d'apprendre à développer en javascript.
Je ne souhaite pas faire du code optimisé, mais plutôt à ne pas dépendre de trop d'imports / fonction natives javascript.
De telle sorte, je m'apprends réellement à coder sans dépendre d'autres éléments.
L'apprentissage des méthodes plus "modernes" sera réalisé plus tard, une fois tout ces exos terminé.
L'exercice consistera donc à refaire ces exos, mais de manière optimisée et moderne

*/





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




//ANCHOR: Conversion d'une string en list
// Entrée : "Bonjour"
// Sortie : ["B", "o", "n", "j", "o", "u", "r"]
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




//ANCHOR: Suppression des accents dans une chaine de caractère
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






//ANCHOR: Génération d'un slug URL
// Entrée : "Machine CNC 5 axes"
// Sortie : "machine-cnc-5-axes"
function slugGenerator(text){
    let resultat = noAccent(text).toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
    while (resultat.substr(-1) === "-"){
        resultat = resultat.slice(0,-1);
    }
    return resultat;
}

/*

//TESTS
console.log(slugGenerator("Machine ÇNC 5 Axes"));
console.log(slugGenerator("Je Suis une URL Maintenant"));
console.log(slugGenerator("C'est moi héhé  !  ! ?"));

*/














//ANCHOR: Génération d'un mot de passe aléatoire
// Génération d'un mot de passe aléatoire
// Entrée : longueur = 12
// Sortie : "aK7!zQ9#mLp2"
function generateMdp(len){

    const tabRes = [];

    if (len <= 0){
        return "Longueur inférieure ou égale à 0"
    } else if (len < 5){
        console.log("Attention, votre mot de passe est faible : ")
    }
    const caractere = {
        0 : "abcdefghijklmnopqrstuvwxyzçéè",
        1 : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        2 : "0123456789",
        3 : "!.#&$",
    }

    for (let i = 0; i < len; i++){
        const type = Math.round(Math.random() * 3);
        const charLen = caractere[type].length;
        const charFull = caractere[type]; 
        const aleaCharIndex = Math.round(Math.random() * charLen);
        const aleachar = charFull[aleaCharIndex];
        
        tabRes.push(aleachar);
    }

    const resultat = tabRes.join("");

    return resultat
}


/*

//TESTS
console.log(generateMdp(15));
console.log(generateMdp(2));
console.log(generateMdp(0));
console.log(generateMdp(-1))

*/












//ANCHOR: Génération d'une référence client
// Génération d'une référence client
// Sortie : "CLI-2026-0001"
// ATTENTION : l'import de fs est nécessaire !
import fs from "fs";
const data = JSON.parse(
    fs.readFileSync("./annexe.json", "utf8")
)
function clientRefGenerator(list){
    // Numéro de client
    let numClient = data.lastClientNumber + 1;
    let dernierClient = numClient
    numClient = numClient.toString().padStart(4, "0")
    
    // Année de client
    let date = new Date;
    let formated = date.toDateString();
    let fullList = formated.split(" ")
    let annee = fullList[fullList.length - 1]

    // Concaténation
    let idClient = "CLI-" + annee + "-" + numClient
    
    // Update JSON
    data.lastClientNumber = dernierClient;
    fs.writeFileSync("./annexe.json", JSON.stringify(
            data,
            null, 
            4), 
        'utf8'
    );
    
    return idClient
}

/*
//TEST
console.log(clientRefGenerator([]));
*/
















//ANCHOR: Génération numéro de devis
// Génération d'un numéro de devis
// Sortie : "DEV-202606-421"
// ATTENTION : il est nécessaire d'importer fs pour cette fonction
const dataDevis = JSON.parse(
    fs.readFileSync("./annexe.json", "utf8")
)
function generateDevisNumber(){
    // Numéro Identifiant du devis
    let numDevis = dataDevis.lastDevisNumber + 1;
    let dernierDevis = numDevis;
    numDevis = numDevis.toString().padStart(4, "0");


    // Date Identification du devis
    let date = new Date();
    let formated = date.toDateString();
    let splited = formated.split(" ");
    let goodDate = splited[3] + splited[2];
    

    // Concaténation
    const resultat = "DEV-" + goodDate + "-" + numDevis;
    
    //UPDATE JSON
    dataDevis.lastDevisNumber = dernierDevis;
    fs.writeFileSync("./annexe.json", JSON.stringify(
        dataDevis,
        null,
        4),
        "utf8"
    )

    return resultat
}

/*
//TEST
console.log(generateDevisNumber())
*/













//ANCHOR: vérification d'adresse mail
// Vérification d'adresse email
// Entrée : "contact@meca-cn.fr"
// Sortie : true
function verifMail(mail){
    // Vérifs "." en début
    if (mail[0] === "." || mail[0] === "@"){
        return false
    }
    //Vérif @ et .
    let resultat = false
    let tab = mail.split("@");
    if (tab.length === 2){
        //Vérif caractères interdits
        const hasForbiddenChars = /[()<>]/.test(tab[0]);
        const hasDoubleDot = /\.\./.test(mail);
        if (hasForbiddenChars || hasDoubleDot){
            return false
        }
        // Continuation des vérifs
        let tab2 = tab[tab.length - 1].split(".");
        if (tab2.length >= 2){
            resultat = true
        }
    }
    return resultat
}

/*
//TESTS
console.log(verifMail("sebastienconfrere6@gmail.com"))
console.log(verifMail("mailsansarobasegmail.com"))
console.log(verifMail("mailsanspoint@gmailcom"))
*/










//ANCHOR: Vérification si extension de fichier
// Vérification d'extension de fichier
// Entrée : "piece.step"
// Sortie : true
function verifExt(file){
    let resultat = true
    let tab = file.split(".");
    if (tab.length > 1){
        // Vérif s'il y a un trou (= il y a deux points d'affilés)
        for (let element of tab){
            if (tab.length > 2 && element === ""){
                resultat = false
            }
        }
        if (tab[tab.length - 1] === ""){
            resultat = false
        }
    } else{
        resultat = false
    }
    return resultat
}
/*
//TESTS
console.log(verifExt("image.jpeg"));
console.log(verifExt("image..jpeg"));
console.log(verifExt(".env"));
console.log(verifExt("imagejpeg"));
console.log(verifExt("imagejpeg."));
*/

















//ANCHOR: Conversion taille fichier
// Entrée : 1542876
// Sortie : "1.47 Mo"
function convertSize(size){
    if (size < 0 || typeof(size) !== "number"){
        return false
    }
    let quotient = 0
    let sizeTemp = size
    const sizes = ["otets", "Ko", "Mo", "Go", "To"]
    while (sizeTemp >= 1000){
        if (quotient === 4){
            break;
        }
        sizeTemp = sizeTemp / 1000
        quotient++
    }
    const ext = sizes[quotient]

    for (let i = 0; i < quotient; i++){
        size = size / 1000
    }
    const res = Math.round(size) + " " + ext
    return res
}

/*
//TESTS
console.log(convertSize(0));
console.log(convertSize(-1));
console.log(convertSize(1024));
console.log(convertSize(6555846513560000000));
*/















//ANCHOR: calcul du temps écoulé depuis la date renseignée
// Actuellement, elle ne marche pas, donc il faudra que je revienne dessus
// Entrée : date passée
// Sortie : "Il y a 3 jours"
function timePassed(date){
    let formated = date.split(/[-:/._ ]/).join("/")
    const verif = formated.split("/");
    const months = {
        "Jan" : 1,
        "Feb" : 2,
        "Mar" : 3,
        "Apr" : 4,
        "May" : 5,
        "Jun" : 6,
        "Jul" : 7,
        "Aug" : 8,
        "Sep" : 9,
        "Oct" : 10,
        "Nov" : 11,
        "Dec" : 12
    }
    // Vérifications de base
    if (verif[0].length > 2){
        return "Date invalide : " + date
    } else if (verif[1].length > 2){
        return "Date invalide : " + date
    } else if (verif[2].length !== 4){
        return "Date invalide : " + date
    }
    let newVerif = [verif[2], verif[0], verif[1]];
    

    // Définition du mois actuel
    let dateActuelle = new Date();
    dateActuelle = dateActuelle.toDateString().split(" ")
    dateActuelle = dateActuelle.slice(1, 4)
    let monthActuel = dateActuelle[0];
    let month = months[monthActuel];
    dateActuelle[0] = month.toString();


    // Reverse pour commencer par les années
    let newDateActuelle = [dateActuelle[2],dateActuelle[0], dateActuelle[1]];
    
    let annee;
    let mois;
    let jour;
    for (let i = 0; i < newDateActuelle.length; i++){
        annee = newDateActuelle[0] - newVerif[0];
        mois = newDateActuelle[1] - newVerif[1];
        jour = newDateActuelle[2] - newVerif[2];
    }

    if (jour < 0){
        mois = mois - 1
        jour = -jour
    }
    if (mois < 0){
        annee = annee - 1
        mois = -mois
    }
    if (annee < 0){
        return "Date Invalide"
    }
    return(annee + " année d'écart\n" + mois + " mois d'écart\n" + jour + " jour d'écart")
}


/*
// TESTS
console.log(timePassed("5/13/2026"))
//console.log(timePassed("125.52.2026"))
*/










//ANCHOR: Conversion secondes lisibles
// Conversion secondes vers format lisible
// Entrée : 3671
// Sortie : "1h 1min 11s"
function convertSeconde(sec){
    if (sec < 0 || typeof(sec) !== "number"){
        return ("Temps invalide");
    }
    let min;
    let heure;
    let jour;
    let mois;
    let annee;

    // Conversion
    min = Math.floor(sec / 60);
    heure = Math.floor(min / 60);
    jour = Math.floor(heure / 24);
    mois = Math.floor(jour / 30);
    annee = Math.floor(mois / 12);


    // Retour aux bases
    min = min % 60;
    heure = heure % 24;
    jour = jour % 30;
    mois = mois % 12;
    sec = sec % 60
    

    // Return
    if (annee === 0 ){
        if (mois === 0 ){
            if (jour === 0){
                if (heure === 0){
                    if (min === 0){
                        return(sec + "s")
                    }
                    return(min + "min " + sec + "s")
                }
                return(heure + "h " + min + "min " + sec + "s")
            }
            return(jour + "jours " + heure + "h " + min + "min " + sec + "s")
        }
        return(mois + "mois " + jour + "jours " + heure + "h " + min + "min " + sec + "s")
    }
    return(annee + "ans " + mois + "mois " + jour + "jours " + heure + "h " + min + "min " + sec + "s")
}

/*
//TESTS
console.log(convertSeconde(3671));
console.log(convertSeconde(0));
console.log(convertSeconde(-1));
console.log(convertSeconde("its TIIIIIIIIIIiiiiiiimeeee"));
console.log(convertSeconde(3600));
console.log(convertSeconde(364687635));
*/











//ANCHOR: Converions durée lisible vers secondes
// Conversion durée lisible vers secondes
// Entrée : "1h 30min"
// Sortie : 5400
function GoodtoBad(time){
    let list = time.match(/\d+/g);
    let resultat = 0
    let quotient = 1;
    for (let i = list.length - 1; i >= 0; i--) {
        resultat = resultat + list[i] * quotient
        quotient = quotient * 60
    }

    return resultat
}

/*
//TESTS
console.log(GoodtoBad("1h 1min 11s"))
console.log(GoodtoBad("0s"));
console.log(GoodtoBad("10min 0s"));
console.log(GoodtoBad("1h 0min 0s"))
*/












//ANCHOR: tronquage de texte
// Tronquer un texte
// Entrée : texte de 500 caractères, limite 100
// Sortie : texte coupé + "..."
function tronc(text, size){
    let res = ""
    let i = 0;
    while (i !== size){
        res = res + text[i];
        i++
    }
    return res + "..."
}

/*
//TEST
console.log(tronc(`L’innovation industrielle ne se résume pas aux machines ; elle repose sur l'harmonie entre l’humain et la technologie. Chez MECA-CN, l'arrivée de nouveaux outils numériques transforme notre quotidien. Chaque opérateur monte en compétences, guidé par des formations pointues. Cette transition modernise nos lignes de production et renforce notre précision mécanique. Ensemble, nous façons l’avenir de la manufacture avec audace, durabilité et un savoir-faire d'excellence partagé."`
, 100));
*/








//ANCHOR: compter le nombre de mots d'une chaine de caractère
// Compter le nombre de mots
// Entrée : "Bonjour je suis Sébastien"
// Sortie : 4
function compteMots(text){
    return text.split(/[ ]/).length;
}

/*
//TEST
console.log(compteMots("Bonjour, je suis Sébastien. Sit"));
*/












//ANCHOR: Extraire initiales
// Extraire les initiales
// Entrée : "Sébastien Confrère"
// Sortie : "SC"
function initial(text){
    let resultat = ""
    let tab = text.split(" ");
    for (const element of tab){
        resultat = resultat + element[0];
    }
    return resultat
}

/*
//TESTS
console.log(initial("Keynah Legay"));
console.log(initial("Sébastien Confrère"));
console.log(initial("Coucou Les Amis"))
*/
















//ANCHOR:  palindrome
// Vérifier si une chaîne est un palindrome
// Entrée : "kayak"
// Sortie : true
function palindrome(text){
    let tab = text.split("");
    let tab2  = [];
    for (let i = tab.length - 1; i >= 0; i--){
        tab2.push(tab[i]);
    }
    const newText = tab2.join("");
    return(newText === text);
}
/*
//TESTS
console.log(palindrome("kayak"));
console.log(palindrome("nigger"));
*/











//ANCHOR: Génération de tableau de nombre d'une certaine taille
function generateOrganisedTab(size){
    let tableauComplet = []
    for (let i = 0; i < size; i++){
        tableauComplet.push(i)
    }
    return tableauComplet
}


//ANCHOR: Génération d'un tableau de nombres aléatoires
function generateRandTab(len, max){
    let tab = []
    for(let i = 0; i < len; i++){
        tab.push(Math.floor(Math.random() * max));
    }

    return tab
}

/*
//TEST
console.log(generateRandTab(100, 100));
*/





//ANCHOR: Mélange aléatoire d'un tableau
// Mélanger un tableau aléatoirement
// Entrée : [1,2,3,4,5]
// Sortie : [4,1,5,2,3]
function aleaTab(tab){
    let list = {}
    let tabSortie = []
    const len = tab.length;
    let i = 0;
    while (i < len){
        let rand = Math.floor(Math.random() * len);
        let cle = Object.keys(list);
        let diff = false;
        let lenCle = cle.length
        for (const element of cle){
            if (element == rand){
                diff = true
                break;
            };
        };
        // console.log(count)
        if (diff === false){
            list[rand] = tab[i]
            i++
        };
    };
    for (let j = 0; j < len; j++){
        tabSortie.push(list[j]);
    };
    return tabSortie;
}

/*
//TESTS
console.log(aleaTab([1,5,6,8,11,56]))
console.log(aleaTab([
  39, 98, 50, 72,  4,  7, 71, 13,  2,  9, 74, 15,
  60, 77, 43, 81, 72, 41,  3, 61, 59, 49, 22, 13,
  14, 16,  6,  3, 45, 11, 12, 53, 98, 69, 57, 19,
  59, 82,  7, 33, 15, 77, 41, 36, 48, 94, 41, 90,
   6, 59, 17, 16, 58, 26, 74, 26, 41, 81, 42, 37,
   8, 68, 13, 56,  0, 45, 89, 34, 29, 79, 88, 59,
  50, 96, 93, 52, 53, 21,  6, 19, 17, 69, 78, 14,
  43, 34, 59,  0, 31, 41, 28, 44, 11, 88, 97, 67,
  66, 14, 92, 88
]));
*/













//ANCHOR: Supprimer les doublons d'un tableau
// Supprimer les doublons d'un tableau
// Entrée : [1,2,2,3,4,4]
// Sortie : [1,2,3,4]
function deleteDouble(tab){
    let tabVu = []
    for (let i = 0; i < tab.length; i++){
        let vu = false;
        const nombre = tab[i]
        for (let j = 0; j < tabVu.length; j++){
            if (tabVu[j] === nombre){
                vu = true
            }
        }
        if (vu){
            tab.splice(i, 0)
        } else{
            tabVu.push(tab[i])
        }
    }
    return tabVu
}

/*
//TESTS
console.log(deleteDouble([
    1,2,3,4,5,6,7,8,9,1,10,5,20,89,56,74,23,65
]))
*/











//ANCHOR: Recherche d'un terme dans une chaine de caractère
// Recherche dans un tableau d'objets
// Entrée : liste de pièces + "axe"
// Sortie : toutes les pièces contenant "axe"
function search(text, par) {
    for (const element in text) {
        let indexActuel = Number(element);

        if (text[indexActuel] === par[0]) {
            let j = 0;
            let good = true;

            while (j < par.length) {
                if (text[indexActuel + j] !== par[j]) {
                    good = false;
                    break;
                }
                j++;
            }
            if (good) {
                return indexActuel;
            }
        }
    }
    return -1;
}

/*
//TESTS
console.log(search("Bonjour, ici Sébastien, comment allez-vous ?", "ici"));
*/













//ANCHOR: Pagination d'un tableau
// Pagination
// Entrée : tableau de 100 éléments, page 3, taille 10
// Sortie : éléments 21 à 30
function pagination(tab, page, size){
    const res = [];
    for (let i = page * size; i < page * size + size; i++){
        if (page*size > tab.length){
            break;
        }
        res.push(tab[i])
    }

    return res
}

/*
//TESTS
console.log(pagination(generateOrganisedTab(300),5, 50))
*/











//ANCHOR: Groupement d'objets par catégorie
// Grouper des objets par catégorie
// Entrée : liste de produits
// Sortie : objets regroupés par catégorie
function regroup(prodList) {
    let res = {};

    for (let i = 0; i < prodList.length; i++) {
        let targettedCategory = prodList[i].categorie;
        if (!res[targettedCategory]) {
            res[targettedCategory] = [];
        }
        res[targettedCategory].push(prodList[i]);
    }
    return res;
}

/*
//TESTS
const produitsTest = [
  { id: 1, nom: "Fraiseuse CNC", categorie: "Usinage" },
  { id: 2, nom: "Tour numérique", categorie: "Usinage" },
  { id: 3, nom: "Découpe Laser", categorie: "Laser" },
  { id: 4, nom: "Imprimante 3D", categorie: "Impression" },
  { id: 5, nom: "Marqueur Laser", categorie: "Laser" }
];
console.log(regroup(produitsTest))
*/














//ANCHOR: Calcul stock faible
// Calcul du stock faible
// Entrée : quantité = 3, seuil = 5
// Sortie : true
function stockFaible(qte, seuil){
    return (qte <= seuil)
}

/*
//TESTS
console.log(stockFaible(500,300));
console.log(stockFaible(100,300))
*/














//ANCHOR: Calcul de valorisation du stock
// Calcul de valorisation du stock
// Entrée : quantité = 10, prix = 15
// Sortie : 150
function valeurStock(qte, prix){
    return(qte * prix);
}

/*
//TEST
console.log(valeurStock(10, 15));
console.log(valeurStock(25,150));
*/








//ANCHOR: Detection de références en double
// Détection de doublons dans un stock
// Entrée : liste de références
// Sortie : références en double
function detecRef(list){
    if (!Array.isArray(list)){
        return("Le paramètre envoyé à la fonction detecRef ne correspond pas à ce qui est attendu (liste d'objet []")
    }
    if (list.length <= 0){
        return("La liste que vous avez fournit est vide.")
    }
    let doublons = [];
    let apparu = [];
    for (let i = 0; i < list.length; i++){
        let element = list[i];
        let dejaApparu = false
        for (let j = 0; j < apparu.length; j++){
           
            if (element === apparu[j]){
                dejaApparu = true
                let dejavu = false
                for (let doublon of doublons){
                    if (doublon === element){
                        dejavu = true
                    }
                }
                if (!dejavu){
                    doublons.push(element)
                    dejavu = false
                }
            }
        }
        if (!dejaApparu){
            apparu.push(element)
            dejaApparu = false
        }
    }

    if (doublons.length > 0){
        return doublons
    } else{
        return ("Aucun doublon dans votre liste")
    }
}


/*
//TESTS
console.log(detecRef( [
    "CLI-2026-0001",
    "CLI-2026-0002",
    "CLI-2026-0003",
    "CLI-2026-0004",
    "CLI-2026-0002",
    "CLI-2026-0005",
    "CLI-2026-0006",
    "CLI-2026-0001",
    "CLI-2026-0007",
    "CLI-2026-0008",
    "CLI-2026-0005"
]))

console.log(detecRef(["CLI-2026-0001",
    "CLI-2026-0002",
    "CLI-2026-0003",
    "CLI-2026-0004"]))

console.log(detecRef([]));

console.log(detecRef([
    "CLI-2026-001",
    "CLI-2026-001",
    "CLI-2026-001",
    "CLI-2026-001",
    "CLI-2026-001","CLI-2026-001", "CLI-2026-001", "CLI-2026-001", "CLI-2026-001", "CLI-2026-001"
]))
*/











//ANCHOR: Export en JSON
// Export JSON
// Entrée : objet JavaScript
// Sortie : chaîne JSON
function JSONexport(fileName, js) {
    let existingData = [];

    if (fs.existsSync(fileName)) {
        try {
            const fileContent = fs.readFileSync(fileName, "utf-8");
            if (fileContent.trim() !== "") {
                existingData = JSON.parse(fileContent);
            }
        } catch (error) {
            existingData = [];
        }
    }

    if (!Array.isArray(existingData)) {
        existingData = [existingData];
    }

    if (Array.isArray(js)) {
        existingData = existingData.concat(js);
    } else {
        existingData.push(js);
    }

    fs.writeFileSync(fileName, JSON.stringify(existingData, null, 2), "utf-8");
    
    return JSON.stringify(existingData, null, 2);
}

/*
// TESTS
console.log(JSONexport("clients.json", {
    id: 1,
    nom: "Client test",
    actif: true
}));

console.log(JSONexport("clients.json", [
    { ref: "CLI-2026-0001", nom: "Client A" },
    { ref: "CLI-2026-0002", nom: "Client B" },
    { ref: "CLI-2026-0003", nom: "Client C" }
]));

console.log(JSONexport("clients.json", {
    totalClients: 152,
    derniereRef: "CLI-2026-0152",
    tauxConversion: 0.87
}));
*/









//ANCHOR: Import JSON
// Import JSON
// Entrée : chaîne JSON
// Sortie : objet JavaScript





















//ANCHOR: Deep clone
// Deep Clone
// Description : créer une copie totalement indépendante d'un objet imbriqué.
// Modification de la copie ne doit jamais modifier l'original.

















//ANCHOR: Debounce
// Debounce
// Description : empêche une fonction d'être exécutée trop souvent.
// Exemple : l'utilisateur tape dans une barre de recherche.
// Tant qu'il continue de taper, la recherche n'est pas lancée.
// Elle ne s'exécute qu'après 500 ms d'inactivité.
















//ANCHOR: Limite une fonction à l'éxecution toutes les x secondes
// Throttle
// Description : limite une fonction à une exécution toutes les X secondes.
// Exemple : mise à jour de la position de la souris.
// Même si l'évènement se produit 100 fois/seconde,
// la fonction ne s'exécute qu'une fois toutes les 200 ms.




















//ANCHOR: Limiter le nombre d'action autorisées
// Rate Limiter
// Description : limite le nombre d'actions autorisées.
// Exemple : maximum 5 tentatives de connexion en 10 minutes.
// Au-delà : refus automatique.
















//ANCHOR: Cache mémoire
// Cache mémoire
// Description : mémorise les résultats déjà calculés.
// Si la même donnée est demandée une deuxième fois,
// retourner directement le résultat enregistré.



















//ANCHOR: Historique Annuler / rétablir
// Historique Annuler / Rétablir
// Description : stocke les états successifs d'un objet.
// Permet de faire Undo / Redo comme dans un logiciel de bureautique.



















//ANCHOR: Logger
// ATTENTION : Néecessite l'import du modul fs, ainsi que la création d'un fichier log.json
// Journalisation (Logger)
// Entrée : type + message
// Sortie : "[11/06/2026 14:32] INFO : Utilisateur connecté"
function logger(content){
    const date = new Date()
    const annee = String(date.getFullYear());
    const mois = String(date.getMonth());
    const jour = String(date.getDate());
    const hour = String(date.getHours());
    const minute = String(date.getMinutes());
    const secondes = String(date.getSeconds());
    const milli = date.getMilliseconds();

    const day = jour + "/" + mois + "/" + annee

    const time = hour + ":" + minute + ":" + secondes

    const log = "[" + day + " " + time + "] " + content

    JSONexport("log.json", log)

    //console.log(log);
    //console.log(date);
}


// console.log(logger("INFO : Utilisateur connecté"))







//ANCHOR: Génération de contenu aléatoire pour log
function randomLogGenerator(amount) {
    const log_types = [
        "INFO : Serveur démarré avec succès",
        "WARNING : Mémoire disponible faible",
        "ERROR : Échec de connexion à la base de données",
        "INFO : Nouvel utilisateur enregistré (ID: 4829)",
        "INFO : Tentative de connexion sur l'interface admin",
        "WARNING : Temps de réponse de l'API supérieur à 500ms",
        "ERROR : Impossible de charger le fichier de configuration .env",
        "INFO : Nettoyage des sessions expirées terminé",
        "INFO : Sauvegarde automatique de la base de données réussie",
        "WARNING : Utilisation du processeur supérieure à 85%",
        "ERROR : Erreur 404 - Page non trouvée sur la route /admin/settings",
        "INFO : Image convertie avec succès au format webp",
        "WARNING : Requête SQL suspecte détectée et bloquée",
        "ERROR : Échec d'envoi du mail de confirmation (Nodemailer)",
        "INFO : Déconnexion de l'utilisateur (ID: 1042)",
        "INFO : Indexation du catalogue produit effectuée",
        "WARNING : Certificat SSL expirant dans moins de 30 jours",
        "ERROR : Erreur 500 - Erreur interne du serveur lors du rendu EJS",
        "INFO : Compression d'image réussie (Gain: 74%)",
        "WARNING : Tentatives de connexion infructueuses répétées (IP: 192.168.1.45)",
        "ERROR : Permissions insuffisantes pour écrire dans le dossier /uploads",
        "INFO : Mise à jour du package.json détectée",
        "INFO : Requête de devis générée avec succès",
        "WARNING : Payload de la requête trop volumineux sur la route /upload",
        "ERROR : Clé d'application Gmail invalide ou expirée",
        "INFO : Initialisation du pool de connexions MySQL",
        "INFO : Redirection automatique du client vers la page d'accueil",
        "WARNING : Cache bientôt saturé, purge automatique planifiée",
        "ERROR : Jeton de session altéré ou invalide détecté",
        "INFO : Déploiement de la nouvelle configuration terminé",
        "INFO : CAPTCHA validé par l'utilisateur",
        "WARNING : Connexion lente détectée avec le serveur SMTP",
        "ERROR : Table 'offres' introuvable dans la base de données",
        "INFO : Chargement des variables d'environnement",
        "INFO : Route GET /machines appelée",
        "WARNING : Requête abandonnée par le client avant la réponse",
        "ERROR : Erreur de syntaxe dans le fichier JSON importé",
        "INFO : Redémarrage planifié du service de logs",
        "INFO : Modification d'une réalisation enregistrée par l'admin",
        "WARNING : Version de Node.js obsolète détectée",
        "ERROR : Impossible de lire la propriété 'role' de undefined",
        "INFO : Cookie de session rafraîchi",
        "INFO : Nouvelle offre d'emploi publiée sur le site",
        "WARNING : Dépassement de la capacité maximale X de la machine lors d'une simulation",
        "ERROR : Processus de compression Sharp interrompu brusquement",
        "INFO : Clôture de la connexion MySQL propre",
        "INFO : Appel à l'API /api/max-dimensions",
        "WARNING : Header CORS manquant sur la requête entrante",
        "ERROR : Fuite de mémoire potentielle détectée sur le hook de session",
        "INFO : Script de génération de navigation exécuté"
    ];

    let i = 0;

    function nextLog() {
        if (i < amount) {
            let random = Math.floor(Math.random() * log_types.length);
            logger(log_types[random]);
            i++;

            let delay = Math.floor(Math.random() * (5000 - 200 + 1)) + 200;
            setTimeout(nextLog, delay);
        }
    }

    nextLog();
}

randomLogGenerator(150)





//ANCHOR: Générateur de notification
// Générateur de notifications
// Entrée : type = succès
// Sortie : objet notification prêt à afficher



















//ANCHOR: Gestionnaire de permission
// Gestionnaire de permissions
// Entrée : rôle = admin
// Sortie : liste des actions autorisées
















//ANCHOR: Gestionnaire de sessions
// Gestionnaire de sessions
// Entrée : utilisateur connecté
// Sortie : date d'expiration, token, durée restante











