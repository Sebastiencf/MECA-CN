/*

L'objectif est ici d'apprendre à développer en javascript.
Je ne souhaite pas faire du code optimisé, mais plutôt à ne pas dépendre de trop d'imports / fonction natives javascript.
De telle sorte, je m'apprends réellement à coder sans dépendre d'autres éléments.
L'apprentissage des méthodes plus "modernes" sera réalisé plus tard, une fois tout ces exos terminé.
L'exercice consistera donc à refaire ces exos, mais de manière optimisée et moderne

*/




//SECTION: String utilities


//ANCHOR: Conversion d'une string en list
// Entrée : "Bonjour"
// Sortie : ["B", "o", "n", "j", "o", "u", "r"]
function stringToList(text){
    return text.split("")
}




//ANCHOR: Fonction de capitalisation de la première lettre de chaque mots.
// (D'une phrase, et, accessoirement, nettoie la chaine de caractère de tout autre type de carcatere)
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






//ANCHOR: Normalisation de chaine
// Normalisation de chaîne (nettoyage global)
// Entrée : "   HéLLo--wOrLD!!  "
// Sortie : "hello-world"
function normalization(txt){
    const regex = new RegExp(`[/! ]`, "g");
    return txt.replace(regex, "").replace(`é`, "e").replace("è", "e").toLowerCase();
}

// console.log(normalization("   HéLLo--wOrLD!!  "))



//ANCHOR: Génération dictionnaire SEO
// Génération de mot-clé SEO à partir d'un texte
// Entrée : "Usinage CNC de haute précision"
// Sortie : ["usinage", "cnc", "haute", "precision"]
function SEOKeywords(txt){
    let res = txt.split(" ");
    let answer = []
    for (let element of res){
        if (element.length > 2){
            answer.push(element);
        }
    }

    return answer
}

// console.log(SEOKeywords("Usinage CNC de haute précision"));



//ANCHOR: Extraction de domaine mail
// Extraction de domaine email
// Entrée : "test@gmail.com"
// Sortie : "gmail.com"
function domaineExtraction(mail){
    let dom = mail.split("@");
    return dom[dom.length - 1]
}



// console.log(domaineExtraction("confreresebastien6@gmail.com"))




//ANCHOR: inversion de chaine de caractere
function reverseString(txt){
    let tab = txt.split("");
    let secondTab = []
    for (let i = tab.length - 1; i >= 0; i--){
        secondTab.push(tab[i]);
    }

    let res = secondTab.join("");
    return res
}

/*
//TESTS
console.log(reverseString("salut, moi c'est mickey"))
console.log(reverseString("yekcim tse'c iom ,tulas"))
*/



//ANCHOR: compte les occurences d'un caractère dans un texte
function countOccurence(txt, char){
    let count = 0;
    let tab = txt.split("");
    for (let element of tab){
        if (element === char){
            count += 1;
        };
    };

    return count;
}

// console.log(countOccurence("Salut, c'est moi, Mickey !", "i"))





//ANCHOR: extraire les # d'un texte
function extractHashtag(txt){
    let tab = txt.split(" ");
    let res = []
    for (let element of tab){
        if (element[0] === "#"){
            res.push(element)
        }
    }
    return res
}

// console.log(extractHashtag("Salut C'est Moi #Mickey les #amis !"))


//ANCHOR: Retirer les espaces en trop
function removeExtraSpace(txt){
    let tab = txt.split(" ");

    for (let i = tab.length - 1; i >= 0; i--){
        if (tab[i] === ""){
            tab.splice(i, 1);
        }
    }

    return tab.join(" ");
}

// console.log(removeExtraSpace("Salut  c'est moi   Mickey        !"));





//ANCHOR: transformer une chaine de caractere en KebabCase
function toKebabCase(txt){
    let tab = txt.split(" ");
    let tabres = [];
    let res = ""
    for (let element of tab){
        let premiereLettre = element[0].toUpperCase();
        let motSuite = element.slice(1);

        let mot = premiereLettre + motSuite
        tabres.push(mot);

    }
    res = tabres.join("")

    return res
}

// console.log(toKebabCase("hello world its me Mario"))




//ANCHOR: 






//SECTION: Numbers / Maths / Calculs



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






//ANCHOR: Pourcentage d'avancement
// Calcul de pourcentage d'avancement
// Entrée : 45 / 120
// Sortie : 37.5 (%)
function pourcentageAvencement(a,b){
    return ((a / b) * 100 + "%")
}

/*
//TEST
console.log(pourcentageAvencement(45,120))
*/







//ANCHOR: Limitation d'un nombre
// Limitation d'un nombre à un intervalle
// Entrée : valeur = 150, min = 0, max = 100
// Sortie : 100
function limitNumber(val, min, max){
    if (val > max){
        return max;
    } else if (val < min){
        return min
    }
    return val
}
/*
//TESTS
console.log(limitNumber(150, 0, 100));
console.log(limitNumber(25, 30, 150));
console.log(limitNumber(0, 0, 100));
console.log(limitNumber(0, 0, 0));
*/






//ANCHOR: Calcul marge commerciale
// Calcul de marge commerciale
// Entrée : prix_vente = 120, prix_achat = 80
// Sortie : 33.33 (%)
function marge(vente, achat){
    return (((vente - achat) / vente * 100).toFixed(4) + "%")
}


console.log(marge(120,80));



//ANCHOR: Factoriel
function factorial(n){
    let res = n;
    for (let i=n - 1; i > 0; i--){
        res *= i
    }

    return res
}

/*
//TEST
console.log(factorial(5))
*/



//ANCHOR: isEven
function isEven(n){
    return (n%2 === 0);
}


//ANCHOR: isOdd
function isOdd(n){
    return (n%2 === 1);
}

/*
//TEST
console.log(isEven(5))
console.log(isOdd(5))
console.log(isOdd(4))
console.log(isEven(4))
*/



//ANCHOR: Plus grand diviseur commun
function gcd(a,b){
    let lowest;
    if (a > b){
        lowest = b;
    } else{
        lowest = a;
    }

    let highestGCD
    let i = 1;

    while (i <= lowest){
        if (a % i === 0 && b % i === 0){
            highestGCD = i
        }
        i++
    }

    return highestGCD
}

console.log(gcd(150,250))











//SECTION: Dates / Temps


//ANCHOR: Fonction de formatage de date. 
// Peut importe le format de base, va renvoyer un truc cohérent au format XX/XX/XXXX
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























//SECTION: Identifiants / génération de données



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


import { reverse } from "dns";
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



//ANCHOR: générateur d'UUID
// Génération d'UUID simple (version maison)
// Entrée : rien
// Sortie : "550e8400-e29b-41d4-a716-446655440000"
function UUIDGenerator(){
    const char = "0123456789abc3456defghij0123456789klmn345678opqrs56789tuvwxyz0123456789";
    let UUID = ""
    let j = 0;
    for (let i = 0; i < 18; i++){
        let random = Math.floor(Math.random() * 71);
        if (j === 8 || j === 13 || j === 18){
            UUID += "-"
        }
        UUID += char[random];
        j++
    }
    let date = String(Math.floor(Date.now() / 1000)).padEnd(12, '0');
    // console.log(date)
    UUID += "-" + date;
    return UUID
}

//console.log(UUIDGenerator())





const dataProduit = JSON.parse(
    fs.readFileSync("./annexe.json", "utf8")
);

//ANCHOR: code produit interne
// Générateur de code produit interne
// Entrée : catégorie = "VIS", diamètre = 8
// Sortie : "VIS-M8-2026-0001"

function codeProduit(cat, d){
    if (dataProduit.dataProduit[cat] === undefined){
        dataProduit.dataProduit[cat] = {};
    }
    if (dataProduit.dataProduit[cat][d] === undefined){
        dataProduit.dataProduit[cat][d] = {
            lastProduit: 0
        };
    }

    // Incrémentation compteur
    dataProduit.dataProduit[cat][d].lastProduit += 1;

    const numero = dataProduit.dataProduit[cat][d].lastProduit.toString().padStart(4, "0");
    // Année
    const annee = new Date().getFullYear();
    // Construction du code
    const resultat = cat.toUpperCase() + "-M" + d + "-" + annee + "-" + numero;
    // Sauvegarde JSON
    fs.writeFileSync(
        "./annexe.json",
        JSON.stringify(dataProduit, null, 4),
        "utf8"
    );

    return resultat;
}

/*
// TESTS
console.log(codeProduit("VIS", 8));
console.log(codeProduit("VIS", 2));
console.log(codeProduit("VIS", 3));
console.log(codeProduit("VIS", 4));
console.log(codeProduit("VIS", 5));
console.log(codeProduit("VIS", 6));
console.log(codeProduit("VIS", 8));
console.log(codeProduit("VIS", 10));
console.log(codeProduit("VIS", 12));
console.log(codeProduit("VIS", 12));
console.log(codeProduit("VIS", 12));

console.log(codeProduit("ECROU", 2));
console.log(codeProduit("ECROU", 4));
console.log(codeProduit("ECROU", 4));
console.log(codeProduit("ECROU", 4));
console.log(codeProduit("ECROU", 4));
console.log(codeProduit("ECROU", 6));
console.log(codeProduit("ECROU", 6));
console.log(codeProduit("ECROU", 8));
console.log(codeProduit("ECROU", 10));
console.log(codeProduit("ECROU", 10));
console.log(codeProduit("ECROU", 10));
console.log(codeProduit("ECROU", 12));

console.log(codeProduit("RONDELLE", 3));
console.log(codeProduit("RONDELLE", 4));
console.log(codeProduit("RONDELLE", 5));
console.log(codeProduit("RONDELLE", 5));
console.log(codeProduit("RONDELLE", 5));
console.log(codeProduit("RONDELLE", 6));
console.log(codeProduit("RONDELLE", 6));
console.log(codeProduit("RONDELLE", 8));
console.log(codeProduit("RONDELLE", 10));
console.log(codeProduit("RONDELLE", 8));

console.log(codeProduit("AXE", 5));
console.log(codeProduit("AXE", 8));
console.log(codeProduit("AXE", 5));
console.log(codeProduit("AXE", 8));
console.log(codeProduit("AXE", 5));
console.log(codeProduit("AXE", 8));
console.log(codeProduit("AXE", 5));
console.log(codeProduit("AXE", 8));
console.log(codeProduit("AXE", 5));
console.log(codeProduit("AXE", 8));
console.log(codeProduit("AXE", 5));
console.log(codeProduit("AXE", 8));
console.log(codeProduit("AXE", 5));
console.log(codeProduit("AXE", 5));
console.log(codeProduit("AXE", 5));
console.log(codeProduit("AXE", 5));
console.log(codeProduit("AXE", 10));
console.log(codeProduit("AXE", 12));
console.log(codeProduit("AXE", 10));
console.log(codeProduit("AXE", 12));
console.log(codeProduit("AXE", 16));
console.log(codeProduit("AXE", 10));
console.log(codeProduit("AXE", 10));
console.log(codeProduit("AXE", 10));
console.log(codeProduit("AXE", 20));
console.log(codeProduit("AXE", 20));

console.log(codeProduit("ENTRETOISE", 4));
console.log(codeProduit("ENTRETOISE", 6));
console.log(codeProduit("ENTRETOISE", 4));
console.log(codeProduit("ENTRETOISE", 6));
console.log(codeProduit("ENTRETOISE", 4));
console.log(codeProduit("ENTRETOISE", 6));
console.log(codeProduit("ENTRETOISE", 8));
console.log(codeProduit("ENTRETOISE", 8));
console.log(codeProduit("ENTRETOISE", 8));
console.log(codeProduit("ENTRETOISE", 8));
console.log(codeProduit("ENTRETOISE", 8));
console.log(codeProduit("ENTRETOISE", 8));
console.log(codeProduit("ENTRETOISE", 8));
console.log(codeProduit("ENTRETOISE", 12));
console.log(codeProduit("ENTRETOISE", 12));
console.log(codeProduit("ENTRETOISE", 16));

console.log(codeProduit("POULIE", 20));
console.log(codeProduit("POULIE", 25));
console.log(codeProduit("POULIE", 30));
console.log(codeProduit("POULIE", 25));
console.log(codeProduit("POULIE", 25));
console.log(codeProduit("POULIE", 25));
console.log(codeProduit("POULIE", 30));
console.log(codeProduit("POULIE", 25));
console.log(codeProduit("POULIE", 30));
console.log(codeProduit("POULIE", 40));

console.log(codeProduit("BAGUE", 6));
console.log(codeProduit("BAGUE", 6));
console.log(codeProduit("BAGUE", 8));
console.log(codeProduit("BAGUE", 10));
console.log(codeProduit("BAGUE", 8));
console.log(codeProduit("BAGUE", 10));
console.log(codeProduit("BAGUE", 8));
console.log(codeProduit("BAGUE", 10));
console.log(codeProduit("BAGUE", 8));
console.log(codeProduit("BAGUE", 10));
console.log(codeProduit("BAGUE", 15));
console.log(codeProduit("BAGUE", 15));
console.log(codeProduit("BAGUE", 15));
console.log(codeProduit("BAGUE", 15));
console.log(codeProduit("BAGUE", 15));
console.log(codeProduit("BAGUE", 15));
console.log(codeProduit("BAGUE", 15));
console.log(codeProduit("BAGUE", 15));
console.log(codeProduit("BAGUE", 20));

console.log(codeProduit("FLASQUE", 30));
console.log(codeProduit("FLASQUE", 30));
console.log(codeProduit("FLASQUE", 40));
console.log(codeProduit("FLASQUE", 50));
console.log(codeProduit("FLASQUE", 40));
console.log(codeProduit("FLASQUE", 50));
console.log(codeProduit("FLASQUE", 50));
console.log(codeProduit("FLASQUE", 50));
console.log(codeProduit("FLASQUE", 50));
console.log(codeProduit("FLASQUE", 50));
console.log(codeProduit("FLASQUE", 40));
console.log(codeProduit("FLASQUE", 50));
console.log(codeProduit("FLASQUE", 60));

console.log(codeProduit("SUPPORT", 8));
console.log(codeProduit("SUPPORT", 8));
console.log(codeProduit("SUPPORT", 8));
console.log(codeProduit("SUPPORT", 8));
console.log(codeProduit("SUPPORT", 8));
console.log(codeProduit("SUPPORT", 10));
console.log(codeProduit("SUPPORT", 12));
console.log(codeProduit("SUPPORT", 10));
console.log(codeProduit("SUPPORT", 12));
console.log(codeProduit("SUPPORT", 16));
console.log(codeProduit("SUPPORT", 16));
console.log(codeProduit("SUPPORT", 16));
console.log(codeProduit("SUPPORT", 16));

console.log(codeProduit("PLATINE", 50));
console.log(codeProduit("PLATINE", 50));
console.log(codeProduit("PLATINE", 50));
console.log(codeProduit("PLATINE", 50));
console.log(codeProduit("PLATINE", 80));
console.log(codeProduit("PLATINE", 80));
console.log(codeProduit("PLATINE", 100));

console.log(codeProduit("BRIDE", 10));
console.log(codeProduit("BRIDE", 10));
console.log(codeProduit("BRIDE", 12));
console.log(codeProduit("BRIDE", 16));
console.log(codeProduit("BRIDE", 16));
console.log(codeProduit("BRIDE", 16));
console.log(codeProduit("BRIDE", 20));

console.log(codeProduit("DOUILLE", 6));
console.log(codeProduit("DOUILLE", 6));
console.log(codeProduit("DOUILLE", 8));
console.log(codeProduit("DOUILLE", 6));
console.log(codeProduit("DOUILLE", 8));
console.log(codeProduit("DOUILLE", 8));
console.log(codeProduit("DOUILLE", 8));
console.log(codeProduit("DOUILLE", 8));
console.log(codeProduit("DOUILLE", 8));
console.log(codeProduit("DOUILLE", 8));
console.log(codeProduit("DOUILLE", 8));
console.log(codeProduit("DOUILLE", 8));
console.log(codeProduit("DOUILLE", 8));
console.log(codeProduit("DOUILLE", 8));
console.log(codeProduit("DOUILLE", 8));
console.log(codeProduit("DOUILLE", 8));
console.log(codeProduit("DOUILLE", 10));
console.log(codeProduit("DOUILLE", 10));
console.log(codeProduit("DOUILLE", 10));
console.log(codeProduit("DOUILLE", 12));
console.log(codeProduit("DOUILLE", 16));
console.log(codeProduit("DOUILLE", 16));
console.log(codeProduit("DOUILLE", 16));
console.log(codeProduit("DOUILLE", 16));

console.log(codeProduit("PIGNON", 20));
console.log(codeProduit("PIGNON", 25));
console.log(codeProduit("PIGNON", 30));
console.log(codeProduit("PIGNON", 20));
console.log(codeProduit("PIGNON", 25));
console.log(codeProduit("PIGNON", 30));
console.log(codeProduit("PIGNON", 20));
console.log(codeProduit("PIGNON", 25));
console.log(codeProduit("PIGNON", 30));
console.log(codeProduit("PIGNON", 20));
console.log(codeProduit("PIGNON", 25));
console.log(codeProduit("PIGNON", 30));
console.log(codeProduit("PIGNON", 20));
console.log(codeProduit("PIGNON", 20));
console.log(codeProduit("PIGNON", 30));
console.log(codeProduit("PIGNON", 20));
console.log(codeProduit("PIGNON", 30));
console.log(codeProduit("PIGNON", 40));

console.log(codeProduit("ENGRENAGE", 40));
console.log(codeProduit("ENGRENAGE", 40));
console.log(codeProduit("ENGRENAGE", 40));
console.log(codeProduit("ENGRENAGE", 40));
console.log(codeProduit("ENGRENAGE", 40));
console.log(codeProduit("ENGRENAGE", 50));
console.log(codeProduit("ENGRENAGE", 60));
console.log(codeProduit("ENGRENAGE", 60));

console.log(codeProduit("ARBRE", 10));
console.log(codeProduit("ARBRE", 10));
console.log(codeProduit("ARBRE", 10));
console.log(codeProduit("ARBRE", 10));
console.log(codeProduit("ARBRE", 15));
console.log(codeProduit("ARBRE", 20));
console.log(codeProduit("ARBRE", 25));
console.log(codeProduit("ARBRE", 15));
console.log(codeProduit("ARBRE", 20));
console.log(codeProduit("ARBRE", 25));
console.log(codeProduit("ARBRE", 20));
console.log(codeProduit("ARBRE", 25));
console.log(codeProduit("ARBRE", 30));
console.log(codeProduit("ARBRE", 30));

console.log(codeProduit("MANCHON", 8));
console.log(codeProduit("MANCHON", 12));
console.log(codeProduit("MANCHON", 16));
console.log(codeProduit("MANCHON", 20));
console.log(codeProduit("MANCHON", 20));

console.log(codeProduit("COLLIER", 15));
console.log(codeProduit("COLLIER", 20));
console.log(codeProduit("COLLIER", 20));
console.log(codeProduit("COLLIER", 20));
console.log(codeProduit("COLLIER", 25));

console.log(codeProduit("TIGE", 4));
console.log(codeProduit("TIGE", 6));
console.log(codeProduit("TIGE", 4));
console.log(codeProduit("TIGE", 6));
console.log(codeProduit("TIGE", 8));
console.log(codeProduit("TIGE", 8));
console.log(codeProduit("TIGE", 8));
console.log(codeProduit("TIGE", 8));
console.log(codeProduit("TIGE", 8));
console.log(codeProduit("TIGE", 8));
console.log(codeProduit("TIGE", 10));
console.log(codeProduit("TIGE", 12));

console.log(codeProduit("VIS", 8));
console.log(codeProduit("VIS", 8));
console.log(codeProduit("VIS", 8));
console.log(codeProduit("VIS", 8));

console.log(codeProduit("AXE", 12));
console.log(codeProduit("AXE", 12));
console.log(codeProduit("AXE", 12));
console.log(codeProduit("AXE", 12));

console.log(codeProduit("DOUILLE", 10));
console.log(codeProduit("DOUILLE", 10));

console.log(codeProduit("PLATINE", 100));
console.log(codeProduit("PLATINE", 100));
console.log(codeProduit("PLATINE", 100));

console.log(codeProduit("ENGRENAGE", 50));
console.log(codeProduit("ENGRENAGE", 50));
console.log(codeProduit("ENGRENAGE", 50));
console.log(codeProduit("ENGRENAGE", 50));

console.log(codeProduit("PIGNON", 30));
*/





//ANCHOR: générateru de seed
// Génération de seed aléatoire reproductible
// Entrée : seed = 12345
// Sortie : suite pseudo-aléatoire stable
function seedGenerator(seed){
    const a = 1664525;
    const c = 1013904223;
    const m = 4294967296;
    let seeed = (a * seed + c) % m;
    let random = seeed / m;

    let res = String(random).split(".")[1];
    return res
}

// console.log(seedGenerator(generateNumber()))



function generateNumber(){
    let len = Math.floor(Math.random() * 7 + 4);
    let i = 0;
    let number = ""
    while (i < len){
        let random = Math.floor(Math.random() * 9)
        number += random
        i++
    }
    return number
}


// console.log(generateNumber())












//SECTION: Fichiers / JSON / Persistence










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






















//SECTION: Tableaux / Data Structure


















//ANCHOR: Je sais pas trop ce que ça fait
function chunkarray(arr, size){
    let tab = [];
    let newTab = [];
    for (let j = 0; j < arr.length; j = j + size){
        for (let i = 0; i < size; i++){
            newTab.push(arr[i]);
            arr.splice(i, 1);
        }

        tab.push(newTab);
        newTab = []
    }

    return tab
    
}

/*
//TESTS
console.log(chunkarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 4))
/*
Résultat : 
[
  [ 1, 3, 5, 7 ],
  [ 2, 6, 9, 11 ],
  [ 4, 10, 13, 15 ],
  [ 8, 14, 17, 19 ]
]

Comment c'est possible ? Je sais pas. J'aurais pas réussit si je l'avais voulu
*/







//ANCHOR: Bon ChunkArray
function chunkArray(arr, size){
    let tab = [];

    for (let j = 0; j < arr.length; j += size){
        let newTab = [];

        for (let i = 0; i < size && j + i < arr.length; i++){
            newTab.push(arr[j + i]);
        }

        tab.push(newTab);
    }

    return tab;
}

console.log(chunkArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 4))







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






//ANCHOR: Deep compare objets
// Deep compare de deux objets
// Entrée : {a:1, b:{c:2}}, {a:1, b:{c:2}}
// Sortie : true
function deepCompare(a, b){
    return (a === b)
}






//ANCHOR: Tri référence client
// Tri intelligent de références client
// Entrée : ["CLI-2026-0003", "CLI-2026-0001"]
// Sortie : tri numérique propre
function triClient(list, type="croissant"){
    if (list.length <= 0){
        return "Le tableau que vous essayez de trier est vide"
    }
    let tab = [];
    for (let element of list){
        tab.push(element.split("-"));
    }

    if (type === "croissant"){
        // Tri sur la date
        function triDateCroissant(tableau){
            for (let i = 1; i < tableau.length; i++){
                if (tableau[i][1] < tableau[i - 1][1]){
                    [tableau[i], tableau[i-1]] = [tableau[i-1], tableau[i]];
                    return triDateCroissant(tableau)
                }
            }
            return tableau
        }
        let trieDate = triDateCroissant(tab);


        // Tri par valeur
        function triValeurCroissant(tableau){
            for (let i = 1; i < tableau.length; i++){
                if (tableau[i][2] < tableau[i-1][2] && tableau[i][1] === tableau[i-1][1]){
                    [tableau[i], tableau[i-1]] = [tableau[i-1], tableau[i]];
                    return triValeurCroissant(tableau)
                }
            }
            return tableau
        }    
        return triValeurCroissant(trieDate)




    } else if (type === "decroissant"){
        // Tri sur la date
        function triDateDecroissant(tableau){
            for (let i = 1; i < tableau.length; i++){
                if (tableau[i][1] > tableau[i - 1][1]){
                    [tableau[i], tableau[i-1]] = [tableau[i-1], tableau[i]];
                    return triDateDecroissant(tableau)
                }
            }
            return tableau
        }
        let trieDate = triDateDecroissant(tab);


        // Tri par valeur
        function triValeurDecroissant(tableau){
            for (let i = 1; i < tableau.length; i++){
                if (tableau[i][2] > tableau[i-1][2] && tableau[i][1] === tableau[i-1][1]){
                    [tableau[i], tableau[i-1]] = [tableau[i-1], tableau[i]];
                    return triValeurDecroissant(tableau)
                }
            }
            return tableau
        }    
        return triValeurDecroissant(trieDate)




    } else{
        return "Nous n'arrivons pas à trier le tableau selon votre demande"
    }
    

}

function triClientAvecSort(list, type="croissant") {
    const copie = [...list];
    
    return copie.sort((a, b) => {
        // On découpe comme dans votre fonction
        const partA = a.split("-");
        const partB = b.split("-");
        
        // 1. Comparaison par année
        if (partA[1] !== partB[1]) {
            return type === "croissant" 
                ? partA[1].localeCompare(partB[1]) 
                : partB[1].localeCompare(partA[1]);
        }
        
        // 2. Si les années sont égales, comparaison par numéro (convertis en nombres)
        const numA = parseInt(partA[2], 10);
        const numB = parseInt(partB[2], 10);
        
        return type === "croissant" ? numA - numB : numB - numA;
    });
}


//TESTS
/*
console.log(triClient(["CLI-2026-0003", "CLI-2026-0001"]));
console.log(triClient([
    "CLI-2026-0003", "CLI-2026-0001", "CLI-2025-0001", "CLI-2025-003", "CLI-2026-1083"
], "decroissant"));
*/
let table = [
  "CLI-2025-0042", "CLI-2026-1102", "CLI-2024-0001", "CLI-2025-0891", "CLI-2023-0012",
  "CLI-2026-0003", "CLI-2025-1540", "CLI-2022-0310", "CLI-2026-0001", "CLI-2024-1984",
  "CLI-2025-0001", "CLI-2021-0055", "CLI-2026-1083", "CLI-2025-003",  "CLI-2023-0741",
  "CLI-2024-0015", "CLI-2026-0923", "CLI-2022-1115", "CLI-2025-0009", "CLI-2020-0001",
  "CLI-2026-2145", "CLI-2024-0562", "CLI-2025-1277", "CLI-2023-0001", "CLI-2026-0054",
  "CLI-2021-1890", "CLI-2025-0423", "CLI-2024-0003", "CLI-2022-0001", "CLI-2026-1500",
  "CLI-2025-2210", "CLI-2023-1045", "CLI-2026-0122", "CLI-2024-0875", "CLI-2025-0011",
  "CLI-2021-0932", "CLI-2026-1002", "CLI-2022-0045", "CLI-2025-1999", "CLI-2023-0321",
  "CLI-2024-1200", "CLI-2026-0007", "CLI-2020-1542", "CLI-2025-0555", "CLI-2022-0981",
  "CLI-2026-1874", "CLI-2024-0099", "CLI-2025-0002", "CLI-2021-0001", "CLI-2023-2412",
  "CLI-2026-0345", "CLI-2025-1122", "CLI-2024-2101", "CLI-2022-1432", "CLI-2026-0090",
  "CLI-2023-0056", "CLI-2025-0789", "CLI-2021-1243", "CLI-2026-1321", "CLI-2024-0412",
  "CLI-2025-0007", "CLI-2022-0002", "CLI-2020-0512", "CLI-2026-0765", "CLI-2023-1892",
  "CLI-2025-1654", "CLI-2024-0002", "CLI-2021-0431", "CLI-2026-2231", "CLI-2022-0711",
  "CLI-2025-0024", "CLI-2023-0003", "CLI-2026-0012", "CLI-2024-1563", "CLI-2025-0943",
  "CLI-2021-2110", "CLI-2026-1188", "CLI-2022-0014", "CLI-2025-1842", "CLI-2020-0095",
  "CLI-2024-0320", "CLI-2026-0002", "CLI-2023-1254", "CLI-2025-0156", "CLI-2022-2341",
  "CLI-2026-1642", "CLI-2021-0004", "CLI-2024-1182", "CLI-2025-0088", "CLI-2023-0912",
  "CLI-2026-0511", "CLI-2022-0192", "CLI-2025-1411", "CLI-2020-2201", "CLI-2024-0005",
  "CLI-2026-2499", "CLI-2021-0812", "CLI-2025-0004", "CLI-2023-0015", "CLI-2026-0083"
]
// console.log(triClient([]));

/*
// Comparaison de temps entre ma fonction et le .sort

// ==========================================
// TEST DE RAPIDITÉ (BENCHMARK)
// ==========================================

console.log("--- Début du Benchmark ---");

// Test 1 : Votre fonction récursive triClient
// On fait une copie superficielle pour votre fonction
const copiePourMoi = [...table]; 

console.time("Chrono - Ma fonction triClient");
const resultatMoi = triClient(copiePourMoi, "croissant");
console.timeEnd("Chrono - Ma fonction triClient");


// Test 2 : La fonction avec le .sort() natif
console.time("Chrono - Fonction native .sort()");
const resultatSort = triClientAvecSort(table, "croissant");
console.timeEnd("Chrono - Fonction native .sort()");




// ============================================
// TEST AVEC GRAND TABLEAU
// ============================================

// ==========================================
// 1. GÉNÉRATEUR ALÉATOIRE DE RÉFÉRENCES
// ==========================================
function genererTableauClients(taille) {
    const annees = ["2020", "2021", "2022", "2023", "2024", "2025", "2026"];
    let tableauGenere = [];
    
    for (let i = 0; i < taille; i++) {
        // Choix d'une année aléatoire
        const anneeAleatoire = annees[Math.floor(Math.random() * annees.length)];
        
        // Génération d'un numéro aléatoire (ex: entre 1 et 2500)
        const numeroAleatoire = Math.floor(Math.random() * 2500) + 1;
        
        // Formatage avec des zéros à gauche (ex: 42 devient "0042")
        // Pour tester le comportement avec des formats courts (ex: "003"), 
        // 1 fois sur 10 on génère un format plus court sans zéros de complétion.
        let numStr = "";
        if (Math.random() < 0.1) {
            numStr = String(numeroAleatoire); // Ex: "3" ou "54"
        } else {
            numStr = String(numeroAleatoire).padStart(4, '0'); // Ex: "0003"
        }
        
        tableauGenere.push(`CLI-${anneeAleatoire}-${numStr}`);
    }
    
    return tableauGenere;
}

// ==========================================
// 2. FONCTION DE BENCHMARK GLOBAL
// ==========================================
function executerGrandBenchmark(tailleTableau) {
    console.log(`\n==========================================`);
    console.log(`DÉBUT DU TEST POUR UN TABLEAU DE : ${tailleTableau} ÉLÉMENTS`);
    console.log(`==========================================\n`);

    // Génération du jeu de données unique
    const sourceData = genererTableauClients(tailleTableau);

    // Duplications strictes pour ne pas fausser les tris
    const copiePourMoi = [...sourceData];
    const copiePourLeSort = [...sourceData];
    const copiePourVersionRobuste = [...sourceData];

    // --- TEST 1 : VOTRE FONCTION RÉCURSIVE ---
    // On met un try/catch car au-delà de 150-200 éléments, elle va crasher.
    try {
        console.time("Chrono - Votre fonction triClient (Récursive)");
        triClient(copiePourMoi, "croissant");
        console.timeEnd("Chrono - Votre fonction triClient (Récursive)");
    } catch (error) {
        console.log("❌ Chrono - Votre fonction triClient (Récursive) : CRASHED (Maximum call stack size exceeded)");
    }

    // --- TEST 2 : LA FONCTION AVEC LE .SORT() OPTIMISÉ (SPLIT) ---
    console.time("Chrono - Fonction native .sort() (avec split)");
    triClientAvecSort(copiePourLeSort, "croissant");
    console.timeEnd("Chrono - Fonction native .sort() (avec split)");

    // --- TEST 3 : VOTRE LOGIQUE MAIS SANS RÉCURSION (BOUCLE WHILE) ---
    console.time("Chrono - Votre logique version Robuste (Boucle)");
    triClientRobuste(copiePourVersionRobuste, "croissant");
    console.timeEnd("Chrono - Votre logique version Robuste (Boucle)");
}


// ==========================================
// 3. ADAPTATION ROBUSTE DE VOTRE LOGIQUE (SANS CRASH)
// ==========================================
function triClientRobuste(list, type="croissant") {
    if (list.length <= 0) return [];
    
    let tab = list.map(element => element.split("-"));

    if (type === "croissant") {
        // Tri sur l'année en boucle while
        let permuteDate = true;
        while (permuteDate) {
            permuteDate = false;
            for (let i = 1; i < tab.length; i++) {
                if (tab[i][1] < tab[i - 1][1]) {
                    [tab[i], tab[i - 1]] = [tab[i - 1], tab[i]];
                    permuteDate = true;
                }
            }
        }

        // Tri sur le numéro
        let permuteValeur = true;
        while (permuteValeur) {
            permuteValeur = false;
            for (let i = 1; i < tab.length; i++) {
                // Conversion en entier pour comparer correctement "003" et "0042"
                let numActuel = parseInt(tab[i][2], 10);
                let numPrecedent = parseInt(tab[i - 1][2], 10);
                
                if (numActuel < numPrecedent && tab[i][1] === tab[i - 1][1]) {
                    [tab[i], tab[i - 1]] = [tab[i - 1], tab[i]];
                    permuteValeur = true;
                }
            }
        }
    }
    return tab.map(el => el.join("-"));
}


// ==========================================
// LANCEZ LES TESTS ICI
// ==========================================

// Test à petite échelle (Tout le monde répond présent)
// executerGrandBenchmark(100);

// Test à moyenne échelle (Votre fonction d'origine va sûrement saturer la mémoire)
//executerGrandBenchmark(500);

// Test à grande échelle (Le .sort() va montrer sa vraie nature d'algorithme lourd mais stable)
// executerGrandBenchmark(25000);


*/







//ANCHOR: BreadCrumb Generator
// Génération de breadcrumb (fil d'Ariane)
// Entrée : "/produits/cnc/fraiseuse"
// Sortie : ["produits", "cnc", "fraiseuse"]
function breadCrumb(t){
    let tab = t.split("/");
    for (let i = 0; i < tab.length; i++){
        if (tab[i] === ""){
            tab.splice(i, 1)
        }
    }
    return tab
}

/*
//TESTS
console.log(breadCrumb("/produits/cnc/fraiseuses"))
*/













//SECTION: Validation / Vérification








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







//ANCHOR: Validation numéro de téléphone FR
// Validation d'un numéro de téléphone FR
// Entrée : "06 12 34 56 78"
// Sortie : true / false
function verifPhone(number){
    let txt = number.split(/[/. -]+/).filter(Boolean).join("");
    if (/^\+33/.test(txt) && (txt.length === 12 ||txt.length === 13) && (txt[3] <= 9 && txt[3] >= 1)){
        return true
    } else if (txt[0] == "0" && (txt.length === 10 ||txt.length === 11) && (txt[1] <= 9 && txt[1] >= 1) && typeof(txt[1] >= 1)){
        return true
    } else{
        return false
    }
}

// console.log(verifPhone("+33.7.82/95 03-62"));















//SECTION: Génération / systèmes avancés (architecture)











//ANCHOR: Logger
// ATTENTION : Néecessite l'import du modul fs, ainsi que la création d'un fichier log.json
// Journalisation (Logger)
// Entrée : type + message
// Sortie : "[11/06/2026 14:32] INFO : Utilisateur connecté"
/*
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
*/

// console.log(logger("INFO : Utilisateur connecté"))








//ANCHOR: Génération de contenu aléatoire pour log
function randomLogGenerator(amount) {
    if (amount < 0){
        return "Veuillez rentrer un nombre positif ou égal à 0"
    }
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









//ANCHOR: Cache mémoire
// Cache mémoire
// Description : mémorise les résultats déjà calculés.
// Si la même donnée est demandée une deuxième fois,
// retourner directement le résultat enregistré.






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





//ANCHOR: Historique Annuler / rétablir
// Historique Annuler / Rétablir
// Description : stocke les états successifs d'un objet.
// Permet de faire Undo / Redo comme dans un logiciel de bureautique.




















//SECTION: Deep / Objects / Structures



//ANCHOR: Deep clone
// Deep Clone
// Description : créer une copie totalement indépendante d'un objet imbriqué.
// Modification de la copie ne doit jamais modifier l'original.



//ANCHOR: Fusion de deux objets
// Fusion de deux objets avec priorité
// Entrée : {a:1, b:2}, {b:5, c:3}
// Sortie : {a:1, b:5, c:3}
function mergeMaxValue(o1, o2){
    // On parcours le deuxième et, pour chaque élément, on parcours le premier. Si la clé est identique, on regarde la valeur associé, et on met dans un nouveau dico. Sinon, on ajoute juste au dico. Ensuite, on tri le dico en fonction des clés

    // Étape 1 : fusionner les deux tableaux
    let tab = o1
    for (let element in o2){
        let valeur = o2[element];
        let cle = element;
        let isTrue = false
        for (let moreElement in o1){
            let moreValeur = o1[moreElement]
            if (moreElement === cle){
                if (valeur > moreValeur){
                    tab[cle] = valeur
                } else{
                    tab[moreElement] = moreValeur
                };
                isTrue = true;
            }
        }
        if (!isTrue){
            tab[element] = valeur;
        };
    };

    // Étape 2 : Remettre en ordre lesdeux tableaux en fonction de l'ordre alphabétique de leur valeur
    let newTab = {};
    let keys = Object.keys(tab);
    for (let i = 0; i < keys.length - 1; i++) {
        for (let j = 0; j < keys.length - 1 - i; j++) {
            if (keys[j] > keys[j + 1]) {
                let temp = keys[j];
                keys[j] = keys[j + 1];
                keys[j + 1] = temp;
            };
        };
        for (let i = 0; i <keys.length; i++){
            let cle = keys[i];
            newTab[cle] = tab[cle];
        }
        return newTab;
    };
        
};

// console.log(mergeMaxValue({a:1, e:1, b:5, c:3}, {c: 6, b:1, e:2}));




//ANCHOR: Détection de changement
// Détection de changements entre deux objets
// Entrée : oldObj, newObj
// Sortie : {modifiés: [...], ajoutés: [...], supprimés: [...]}











//SECTION: Sécurité / Hash / génération "tech"



//ANCHOR: Hash simple
// Simulation de hash simple (non cryptographique)
// Entrée : "motDePasse"
// Sortie : "a94f2c1d"
function hashSimple(mdp){
    let hashed = "";
    function hash(l){
        const char = "a1b2c3d4e5f6g7h8i9j0klmnopqrstuvwxyz";
        const big = "VKZBEQ6H0JDO3NLAX7STUPWFYCI18M45GR29";
        let indexOfChar = char.indexOf(l) - 2;
        if (indexOfChar < 0){
            indexOfChar *= -1;
        }
        return char[indexOfChar] + big[indexOfChar];
    }
    for (let i = 0; i < mdp.length; i++){
        let car = hash(mdp[i]);
        hashed += car;
    };

    function alt(motDePasse) {
        const numbers = "9135682470";
        const length = motDePasse.length;
        let positions = [];
        let indexNumber = 0;
        if (length <= 5) {
            positions = [3];
        }
        else if (length <= 8) {
            positions = [2, 6];
        }
        else if (length <= 13) {
            positions = [1, 2, 8];
        }
        else if (length <= 20) {
            positions = [5, 19];
        }
        else {
            positions = [3, 20];
        }
        if (length > 10) {
            indexNumber = numbers.length - positions.length;
        }
        let resultat = motDePasse;
        positions.forEach((pos, i) => {
            const chiffre = numbers[indexNumber + i];
            const positionReelle = pos - 1 + i;
            resultat = resultat.slice(0, positionReelle) + chiffre + resultat.slice(positionReelle);
        });
        return resultat;
    }

    let secondStep = alt(hashed)

    function third(mdp) {
        const lettres = "QWERTYUIOPASDFGHJKLZXCVBNM";
        const length = mdp.length;
        let positions = [];
        let indexLettre = 0;
        if (length <= 5) {
            positions = [2];
        }
        else if (length <= 8) {
            positions = [3, 7];
        }
        else if (length <= 13) {
            positions = [2, 5, 10];
        }
        else if (length <= 20) {
            positions = [4, 12, 18];
        }
        else {
            positions = [3, 9, 17, 25];
        }
        if (length > 10) {
            indexLettre = lettres.length - positions.length;
        }

        let resultat = mdp;

        positions.forEach((pos, i) => {
            const lettre = lettres[indexLettre + i];
            const positionReelle = pos - 1 + i;
            resultat = resultat.slice(0, positionReelle) + lettre + resultat.slice(positionReelle);
        });
        return resultat;
    }



    let thirdStep = third(secondStep)



    function fourth(mdp){
        let resultat = "";
        for(let i = 0; i < mdp.length; i += 2){
            resultat += mdp[i];
        }
        for(let i = 1; i < mdp.length; i += 2){
            resultat += mdp[i];
        }

        return resultat;
    }

    let fourthStep = fourth(thirdStep)


    function fifth(mdp){
        const alpha = "abcdefghijklmnopqrstuvwxyz";
        let resultat = "";

        for(let c of mdp){
            const idx = alpha.indexOf(c);

            if(idx !== -1){
                resultat += alpha[(idx + 7) % 26];
            } else {
                resultat += c;
            }
        }

        return resultat;
    }

    let fifthStep = fifth(fourthStep)


    function sixth(mdp){
        const milieu = Math.floor(mdp.length / 2);

        return (
            mdp.slice(0, milieu)
            .split("")
            .reverse()
            .join("")
            +
            mdp.slice(milieu)
        );
    };

    let sixthStep = sixth(fifthStep);


    function checksum(mdp){
        let somme = 0;
        for(let c of mdp){
            somme += c.charCodeAt(0);
        }
        return mdp + (somme % 97);
    }

    let seventhStep = checksum(sixthStep)

    function shuffle(mdp){
        let tab = mdp.split("");
        for(let i = 0; i < tab.length; i++){
            let j = (tab[i].charCodeAt(0) + i) % tab.length;

            [tab[i], tab[j]] = [tab[j], tab[i]];
        }

        return tab.join("");
    };

    let eigthStep = shuffle(seventhStep);

    let whileNumber = "8604897301256718456095387980659210"
    while (eigthStep.length < 26){
        eigthStep += Math.floor(whileNumber[eigthStep.length] * 11 + 5 / 6 + 3 * Math.log(whileNumber[eigthStep.length])) % 10
    }
    let finalStep = eigthStep
    return finalStep
}
// console.log(hashSimple("bonjour"))
//console.log(hashSimple("Salutation jeune entrepreneur, je suis un mot de passe, et je ne pense pas pouvoir te laisser passer au travers ed cette sécurité mémorable qu'a installé l'administrateur!"))





//SECTION: Recherche / Matching / intelligence des données



//ANCHOR: Recherche "fuzzy" (approximation)
// Simulation de recherche fuzzy (approximation)
// Entrée : "ax", ["axe", "axial", "max", "taxe"]
// Sortie : ["axe", "axial"]










//SECTION: Normalisation de fichiers / filesystem Utils


//ANCHOR: Secured File Name Generator
// Génération de nom de fichier sécurisé
// Entrée : "Rapport CNC final !! 2026"
// Sortie : "rapport-cnc-final-2026.pdf-safe"
function securedFileName(fileName){
    let charsToRemove = "|/#.?!§;:,%^¨$()[]" 
    let result = fileName.split(" ").join("-").toLowerCase().replace(new RegExp(`[${charsToRemove.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`, "g"), "").split("-").filter(item => item != "").join("-") + ".pdf-safe";
    return result
};

// console.log(securedFileName("Rapport CNC final || 2026"));





























