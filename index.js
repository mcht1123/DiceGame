var randomNumber1 = Math.floor((Math.random()*6)) + 1;
var source1 = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor((Math.random()*6)) + 1;
var source2 = "images/dice" + randomNumber2 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", source1);
document.getElementsByClassName("img2")[0].setAttribute("src", source2);

if (randomNumber1 > randomNumber2){
    document.getElementsByTagName("h1")[0].textContent = "Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2){
    document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins!"
}
else{
    document.getElementsByTagName("h1")[0].textContent = "Draw!"
}