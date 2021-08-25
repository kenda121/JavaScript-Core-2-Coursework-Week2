let bluebutton = document.querySelector("#blueBtn");
bluebutton.addEventListener("click", changecolor);
function changecolor() {
  let jomborton = document.querySelector(".jumbotron");
  jomborton.style.background = "#588fbd";
  let donate = document.querySelector(".buttons a");
  donate.style.backgroundColor = "#ffa500";
  let volunteer = document.querySelector(".buttons a:nth-child(2)");
  volunteer.style.background = "black";
  volunteer.style.color = "white";
}
let orangebutton = document.querySelector("#orangeBtn");
orangebutton.addEventListener("click", changecolors);
function changecolors() {
  let jomborton = document.querySelector(".jumbotron");
  jomborton.style.background = "#f0ad4e";
  let donate = document.querySelector(".buttons a");
  donate.style.backgroundColor = "#5751fd";
  let volunteer = document.querySelector(".buttons a:nth-child(2)");
  volunteer.style.background = "#31b0d5";
  volunteer.style.color = "white";
}
let greenbutton = document.querySelector("#greenBtn");
greenbutton.addEventListener("click", changescolors);
function changescolors() {
  let jomborton = document.querySelector(".jumbotron");
  jomborton.style.background = "#87ca8a ";
  let donate = document.querySelector(".buttons a");
  donate.style.backgroundColor = "black ";
  let volunteer = document.querySelector(".buttons a:nth-child(2)");
  volunteer.style.background = "# 8c9c08";
}
changecolor();
changecolors();
changescolors();

let submitbutton = document.querySelector("button[type = submit]");
submitbutton.addEventListener("click", submiting);
function submiting() {
  let username = document.querySelector("#example-text-input");
  username.style.backgroundColor = "red";
}
