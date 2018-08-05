/*2.Exercice 2 : Calculs divers

var somme = 3*3;
console.log(somme);
somme = 12/0;
console.log(somme);
somme = 4+9+78;
console.log(somme);
somme = 12-7;
console.log(somme);
somme = 5e4;
console.log(somme);*/
/*
3.Exercice 3 : Communiquer avec l'ordinateur

var UserName = prompt("C'est quoi votre nom?");
var Welcome = "Bonjour ";
alert( Welcome + UserName);
*/

/*
4.Exercice 4 : Nom et prénom

var FamillyName = prompt("Nom");
var FirstName = prompt("Prénom");
var Welcome = "Bonjour ";
alert(Welcome + FamillyName + FirstName);
*/
/*
5.Exercice 5 : Des caractères au nombre(transformer la strng en nombre)*/

/*var myNumber = "123";
myNumber = Number(myNumber);
console.log(myNumber+123);*/
/*
ar reponseUtilisateur;
var taches = [];
while (reponseUtilisateur != "fin") {
 reponseUtilisateur = prompt("Que devez-vous faire ? (tapez fin pour stopper le programme)");
 if(reponseUtilisateur != "fin") {
   taches.push(reponseUtilisateur);
 }
}

console.log("Vous devez faire : ");

for (var i = 0; i < taches.length; i++) {
 console.log(taches[i]);
}
un exemple de pierre feuille ciseaux avec des fonctions
// Pierre feuille ciseaux

// Variables
var choixOrdinateur;
var choixUtilisateur;
//Stock les scores dans un tableau, score utilisateur en index 0 et ordinateur en index 1
var scores = [0, 0];
var gagnant;
//Functions
//Lance un prompt et vérifie le choix de l'utilisateur
function utilisateurChoisit() {
 var choix = prompt("Choisissez entre pierre, feuille ou ciseaux").toLowerCase();
 while (choix != "pierre" && choix != "feuille" && choix != "ciseaux") {
   choix = prompt("Rentrez une valeur correcte : pierre, feuille ou ciseaux").toLowerCase();
 }
 return choix;
}

//Crée un choix aléatoire pour l'ordinateur
function ordinateurChoisit() {
 var randomNumber = Math.random();
 if(randomNumber < 0.33) {
   var choixOrdinateur = "pierre";
 }
 else if (randomNumber < 0.66) {
   var choixOrdinateur = "feuille";
 }
 else {
   var choixOrdinateur = "ciseaux";
 }
 return choixOrdinateur;
}

// Compare les réponses, return :
// true si utilisateur gagnant
// false si utilisateur perdant
// undefined si match nul
function compareReponses(choixUtilisateur, choixOrdinateur) {
 if(choixOrdinateur === choixUtilisateur) {
   return;
 }
 else if(
   (choixUtilisateur === "pierre" && choixOrdinateur === "ciseaux") ||
   (choixUtilisateur === "feuille" && choixOrdinateur === "pierre") ||
   (choixUtilisateur === "ciseaux" && choixOrdinateur === "feuille")
 ) {
   return true;
 }
 else {
   return false;
 }
}

//Augmente le score sur la base du gagnant
function augmenteScore(scores, gagnant) {
 if(gagnant) {
   scores[0] ++;
 }
 else {
   scores[1] ++;
 }
 return scores;
}

//Affiche un message après un tour de jeux sur la base du gagnant
function messageTour(gagnant, choixUtilisateur, choixOrdinateur) {
 if(typeof gagnant === 'undefined') {
   alert("Vous avez choisi " + choixUtilisateur + ", l'ordinateur a choisi " + choixOrdinateur + " c'est un match nul");
 }
 else if(gagnant) {
   alert("Vous avez choisi " + choixUtilisateur + ", l'ordinateur a choisi " + choixOrdinateur + " vous gagnez");

 }
 else {
   alert("Vous avez choisi " + choixUtilisateur + ", l'ordinateur a choisi " + choixOrdinateur + " vous perdez");
 }
}

//Message quand le match est fini
function messageFinal(scores) {
 if(scores[0] > scores[1]) {
   alert("Vous gagnez le match, bravo !");
 }
 else {
   alert("Vous avez perdu, dommage !");
 }
}

//Code logic

//La boucle tourne tant qu'aucun des joueurs n'a marqué 2 points
while(scores[0] != 2 && scores[1] != 2) {
 //Chacun choisit sa réponse
 choixUtilisateur = utilisateurChoisit();
 choixOrdinateur = ordinateurChoisit();
 // On compare les réponses
 gagnant = compareReponses(choixUtilisateur, choixOrdinateur);
 // On affiche le résultat
 messageTour(gagnant, choixUtilisateur, choixOrdinateur);
 // Si ce n'est pas un match nul on augmente le score
 if (typeof gagnant !== 'undefined') {
    scores = augmenteScore(scores, gagnant)
 }
}
// Le match est fini on affiche le dernier message
messageFinal(scores);
@chaîne et voilà un exemple de test unitaire
//Exemple de test unitaire fait maison

// function addition(a, b) {
//   if(typeof a === "number" && typeof b === "number") {
//     return a + b;
//   }
//   else {
//     return "on attend des nombres"
//   }
// }
//
// var testsAddition = [
//   [5, 5, 10],
//   [2, 8, 10],
//   [456, 300, 756],
//   [-15, -8, -23],
//   ["5", "10", "on attend des nombres"]
// ]
//
// function testAddition(testsAddition) {
//   var errors = [];
//   for (var i = 0; i < testsAddition.length; i++) {
//     var result = addition(testsAddition[i][0], testsAddition[i][1]);
//     if(result != testsAddition[i][2]) {
//       errors.push("Erreur test : " + i);
//     }
//   }
//   if(errors.length > 0) {
//     console.log(errors);
//   }
//   else {
//     console.log("success");
//   }
// }
//
// testAddition(testsAddition*/






/*
6.Exercice 6 : Majuscules et muniscules

var chaine = "texte à mettre en majuscule";
console.log(chaine.toUpperCase());
console.log(chaine.toLowerCase());
*/

/*
1.Exercice 1 : Le nombre le plus grand

var a = 5;
var b = 2;
var c = 3;
var d = 4;
if (a>b && a>c && a>d) {
    console.log("a est le plus grand");
    
}
else if(b>a && b>c && b>d) {
    console.log("b est le plus grand");
}
else if(c>a && c>b && c>d){
    console.log("c est plus grand");
}
else{
    console.log("d est le plus grand");
}
*/

/*
2.Exercice 2 : Condition d'âge
var userAge = prompt("Quel est votre âge?");
userAge = Number(userAge);
console.log(userAge);

if (userAge <= 0) {
   
    userAge = prompt( "Vous avez déclaré une valeur négative pour votre âge, veillez renseiger votre âge réel.");
}
if (userAge >= 21){
    alert("Bienvenue");
}
if (userAge%2 === 0){
    alert("votre âge est pair");
}
*/

/*
3.Exercice 3 : Le nombre caché
var nombreCache = 4;
var nombrePropose;
alert(typeof nombrePropose);

while(nombrePropose != nombreCache) { 
    if (nombrePropose< nombreCache){
        alert("nombre plus grand");
    }
    if (nombrePropose> nombreCache){
        alert("nombre plus petit");
    }
    nombrePropose = prompt("mettez un chiffre");
}

alert("Bravo vous avez gagné");
*/
/*les boucles: une boucles c'est un élément qui tourne, il faut y mettre des acctions.
1 boucle while = tant que quelque chose est raie excute les 
tant que l'autilisateur n'a pas repondu stop.
si je mets var = "stope" la boucle s'arrête dés que l'autilisateur met autre chose.

var userAnswer = "";
while(userAnswer != "stop") {
    userAnswer = prompt("une question?");
}
var userPassword = "monpassword";
userAnswerlance moi une boucle qui démarre à 0 tant que i est inferieur ou égale à 10 et rajoute + à chaque MSFIDOSignature.
pour rajouter 2 à chaque fois je lui dis i+=2
la boucle for sert à afficher les catalogues sur les sites e-commerce
la boucle for sert à parcourir un élément dans des tableaux.

for (var i = 0; i <=10 ; i++) {
    console.log(i);*/

/*pour stocker un grand nombre d'autilisateurs et en afficher un en particukier on utilise les tableaux
var userNames = [] tableau simple.
var userNames =

var userNames = ["", "", "",...];
console.log(userNames [1 ou 2 ou 3]) selon la position de la string que je veux afficher.
un tableau contient des élémnts prémitifs( string, number...) mais il peut aussi contenir des tableaux. on l'appelle un tableau multi dimentionnel.
pour afficher un élément précis qui est dans mon tableau j'ecris: console.log(userNam[0][2]);
ce qui veut dire console logue moi le tableau 0 et dans ce tableau l'élement 2,

var userNames =["jean", "hélène", "marc"];
console.log("les autilisateurs de site sont");
for (var  i= 0; i< userNames.length; i++) {
    console.log(userNames[i]);
}*/

/*
les fonctions servent à nous éviter de ré écrire le code plusieurs fois.
//je declare ma fonction
fonction maFonction({
    alert("Test");
})
*/

/*pyramide
    var pyramide = "*";
for (var i = 1; i<=5 ; i++) {
pyramide = pyramide + "*";
console.log(pyramide);
}
        
main.js:150 **
main.js:150 ***
main.js:150 ****
main.js:150 *****

*
var pyramide = "";
for (var i = 1; i<=5 ; i++) {
console.log(pyramide);
pyramide = pyramide + "*";
console.log(pyramide);
}
main.js:155 *
main.js:157 **
main.js:155 **
main.js:157 ***
main.js:155 ***
main.js:157 ****
main.js:155 ****
main.js:157 *****
*/


/* fizz buzz
pour trouver le reste d'une divison


for (var i = 1; i<= 100: i++) {
    if (i )
    pour afficher les nombres de 0 à 100.
}
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FIZZ BUZZ");
    }
    else if (i % 5 === 0) {
      console.log("BUZZ");
    }
    else if (i % 3 ===0) {
      console.log("FIZZ");
    }
    else {
      console.log(i);
    }
   }*/
   /*
   'échéquier
//On déclare une variable qui stock le plateau
var plateau = "";

//On lance une 1er boucle pour créer les lignes
for (var i = 1; i <= 8; i++) {
 //A chaque ligne, on lance une boucle pour créer les case
 for (var j = 1; j <= 16; j++) {
   //Si la somme de la ligne et de la case est paire
   //On affiche un blanc
   if ( (i + j) % 2 === 0) {
     plateau = plateau + " ";
   }
   //Sinon on affiche un noir
   else {
     plateau = plateau + "#";
   }
 }
 //Juste avant de passer à la ligne suivante
 //On ajoute un retour à la ligne
 plateau = plateau + "\n";
}

//On affiche le plateau
console.log(plateau);
*/

/*
1.Exercice 1 : True ou False ?
Déclarer 2 variables de type String. L'une d'entre elles doit être vide.
Ecrire un programme vérifiant si la String est vide ou non, et renvoyer la valeur (true ou false) dans la console.
Pour cet exercice, vous devrez commencer à vous renseigner par vous-même sur les conditions en JavaScript.
var stringPleine = "pleine";
var stringVide = "";
if (stringPleine.length > 0) {
  
    stringPleine = true;
}
else  {
     
    stringPleine = false;
}

console.log("La variable stringPleine renvoie la valeur:" + stringPleine);

if (stringVide.length > 0){
    stringVide = true;
}
else{
    stringVide = false;
}
console.log("la variable stringVide renvoie la valeur:" + stringVide);*/
/*
2.Exercice 2 : Calculer mon âge
Réalisez un programme qui demande au visteur l'année actuelle, son année de naissance, calcule l'âge du visiteur puis l'affiche dans un message à l'écran.
Pour allez plus loin, demandez l'âge de la personne à côté de vous et afficher dans un message le cumul de vos deux âges.

var demandeAnneeActuelle =  prompt("quelle est l'année actuelle?");
var demandeAnneeNaissance = prompt("quelle est votre année de naissance?");
var userAge = "vous avez" + (demandeAnneeActuelle - demandeAnneeNaissance);
alert(userAge);
*/

/*
3.Exercice 3 : Problème de chaussures
Marc fait un peu de shopping. Il achète des chaussures à 70€, un jean à 59€ et un t-shirt à 20€.
Heureusement pour son portefeuille, il bénéficie d'une réduction de 20%.
Déclarez chacun des articles achetés dans une variable différente. (prix1, prix2, etc.).
Déclarez une dernière variable 'total' qui aura pour valeur la somme des achats, et l'afficher dans la console.
Attention: ne pas oublier la réduction. 
 var chaussures = 70;
 var jean = 59;
 var tshirt = 20;
var total = chaussures  + jean + tshirt;
console.log(total - 28.8);*/
/*

.Exercice 4 : une calculatrice JavaScript
Vous allez créer une mini calculatrice qui permet d'additionner des nombres. Quand le visiteur arrive sur la page vous lui 
demandez les nombres à additionner, puis vous affichez le résultat à l'écran.


var chiffreDonne1 = Number( prompt("Entrez le 1er chiffre"));
var chiffreDonne2 = Number( prompt("Entrez le 2ème chiffre"));
var totalAdition = "Resultat de l'adition" + (chiffreDonne1 + chiffreDonne2);
alert(totalAdition);
*/
/*tableau
var mesEnfants = ["Ilias 7 ans", "Sarah 5 ans", "Inès 3 ans", "Adam 9 mois"];
console.log(mesEnfants[3]);*/
/*
function remplissagePiscine(largeur, longueur, hauteur, debit){
    var volum = largeur*longueur*hauteur;
    var temps = volum/debit;
    alert("le temps de remplissage de votre piscine est: " + temps +" min");
}

remplissagePiscine(4, 10, 2, 2);
*/
/*
function nombrePaire(montant){
    montant = Math.round(montant);
    if(montant%2===0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
var nombreDonne = prompt("rentrez un nombre");
nombrePaire( nombreDonne);
*/
/*var userPassword = "monpassword";
var userAnswer;
while(userAnswer != userPassword) {
   userAnswer = prompt("rentrez votre mot de passe");
   if(userAnswer != userPassword) {
     alert("Mot de passe incorrect rententez votre chance");
   }
}
alert("Vous êtes connecté");
*/
/*
var userNames = ["Jean", "Héléne", "Steven", "Marie", "Youssef", "Renauds"];
console.log("Les utilisateurs du sites sont : ")
for (var i = 0; i < userNames.length; i++) {
 console.log(userNames[i]);
}
@chaîne script de base pour parcourir un tableau*/
/*
/Tableau qui contient tous les utilisateurs
var users = [
 //Tableau utilisateur 0
 [
   "Dussart",
   "Guillaume",
   45,
   false
 ],
 //Tableau utilisateur 1
 [
   "Jonsson",
   "Olle",
   24,
   false
 ],
 //Tableau utilisateur 2
 [
   "Tchekov",
   "Nathalia",
   32,
   true
 ]
]

console.log("Les utilisateurs sont : ")
//Première boucle qui parcours users
for (var i = 0; i < users.length; i++) {
 //Deuxième boucle qui parcour chaque tableau utilisateur
 for (var j = 0; j < users[i].length; j++) {
   //Si on est au sexe de la personne
   if (j === 3) {
     //Si l'utilisateur est une femme
     if (users[i][j] === true) {
       console.log("Femme");
     }
     //Sinon c'est un homme
     else {
       console.log("Homme");
     }
   }
   //Sinon on affiche la valeur de manière classique
   else {
     console.log(users[i][j]);
   }
 }
 //Après avoir bouclé sur le tableau d'un utilisateur on ajoute une séparation visuelle
 console.log("--------");
}
@chaîne script pour boucler sur un tableau multi-dimensionnel et afficher les informations

thom [12 h 13]
//dÉCLARATION
function addition(a, b) {
 console.log(a+b);
}

function soustraction(a, b) {
 console.log(a-b);
}

function multiplication(a, b) {
 console.log(a*b);
}

function calcul(a, b) {
 addition(a, b);
 soustraction(a, b);
 multiplication(a, b);
}

//Utilisation
calcul(200, 15);
@chaîne exemples de fonctions simples

thom [12 h 38]
///////////
//Global Data and variables
//////////

//Tableau qui contient tous les utilisateurs
var myUsers = [
 //Tableau utilisateur 0
 [
   "Dussart",
   "Guillaume",
   45,
   false
 ],
 //Tableau utilisateur 1
 [
   "Jonsson",
   "Olle",
   24,
   false
 ],
 //Tableau utilisateur 2
 [
   "Tchekov",
   "Nathalia",
   32,
   true
 ]
];

///////////
//Functions
//////////

function showSexe(user) {
 //Si l'utilisateur est une femme
 if (user[3] === true) {
   console.log("Femme");
 }
 //Sinon c'est un homme
 else {
   console.log("Homme");
 }
}

function loopUsers(users) {
 //Première boucle qui parcours users
 for (var i = 0; i < users.length; i++) {
   //Deuxième boucle qui parcour chaque tableau utilisateur
   for (var j = 0; j < users[i].length; j++) {
     //Si on est au sexe de la personne
     if (j === 3) {
       showSexe(users[i]);
     }
     //Sinon on affiche la valeur de manière classique
     else {
       console.log(users[i][j]);
     }
   }
 }
}

function showUsers(users) {
 console.log("Les utilisateurs sont : ");
   loopUsers(users);
   //Après avoir bouclé sur le tableau d'un utilisateur on ajoute une séparation visuelle
   console.log("--------");
}

///////////
//Program logic
//////////

showUsers(myUsers);*/

function circle()
{
  var canvas = document.getElementById("canvas1"); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.lineWidth="2";
  context.arc(100, 100, 90, 0, 2 * Math.PI);
  context.stroke();
}
circle();  










