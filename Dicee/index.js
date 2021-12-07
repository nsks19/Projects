var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
randomNumber1 = 1 + Math.floor(randomNumber1*6);
randomNumber2 = 1 + Math.floor(randomNumber2*6);
switch (randomNumber1) {
  case 1:
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
    break;
  case 2:
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
    break;
  case 3:
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
    break;
  case 4:
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
    break;
  case 5:
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
    break;
  case 6:
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
    break;
}
switch (randomNumber2) {
  case 1:
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
    break;
  case 2:
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
    break;
  case 3:
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
    break;
  case 4:
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
    break;
  case 5:
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
    break;
  case 6:
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
    break;
}
var res=document.querySelector("h1");
if(randomNumber1>randomNumber2){
  res.innerHTML="Player 1 Wins";
}else if(randomNumber1<randomNumber2){
  res.innerHTML="Player 2 Wins";
}else{
  res.innerHTML="Draw";
}
