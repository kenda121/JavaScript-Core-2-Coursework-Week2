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
