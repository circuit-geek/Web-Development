randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;
 
var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var imageSource1 = "images/" + randomDiceImage1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var imageSource2 = "images/" + randomDiceImage2;

var image1 =  document.getElementsByClassName("img1")[0];
image1.setAttribute("src", imageSource1);

var image2 = document.getElementsByClassName("img2")[0];
image2.setAttribute("src", imageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Play 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Its a draw";
}
