function randomNumber() {                       //Funktion für eine willkürliche Nummer
  var Number = Math.random() * 6;
  return (Math.floor(Number) + 1);
};

var number1 = randomNumber();                   // 1. Willkürliche Nummer zwischen 1 und 6
var number2 = randomNumber();                   // 2. Willkürliche Nummer zwischen 1 und 6

console.log(number1);                           // Kontrolle ob die Nummer funktionieren
console.log(number2);

var randomImageOne = "dice"+ number1 + ".png";    //  Auswahl der Bilder nach den Nummern
var randomImageTwo = "dice"+ number2 + ".png";
var randomImagePath = "images/" + randomImageOne;   //Auswahl mit dem Kompletten path
var randomImagePath2 = "images/" + randomImageTwo;

function imgSwitch(){
  var newImg = document.getElementsByClassName("img1")[0];
  newImg.setAttribute("src", randomImagePath);
};

function imgSwitch2(){
  var newImg2 = document.getElementsByClassName("img2")[0];
  newImg2.setAttribute("src" , randomImagePath2);
};

function reset(){
  //var resetImg1 = document.getElementsByClassName("img1")[0];
  //resetImg1.setAttribute("src" , "images/dice6.png");
  //var resetImg2 = document.getElementsByClassName("img2")[0];
  //resetImg2.setAttribute("src" , "images/dice6.png");
  location.reload();
}
