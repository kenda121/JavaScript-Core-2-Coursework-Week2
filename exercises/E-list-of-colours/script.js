function listOfColours(colours) {
  let div = document.querySelector("#content");
  let select = document.createElement("select");
  div.appendChild(select);
  let paragraph = document.createElement("P");

  div.appendChild(paragraph);
  // Write your code here...
  colours.forEach(changecolor);
}
function changecolor(colors) {
  let select = document.querySelector("select");
  let options = document.createElement("option");
  select.appendChild(options);
  options.innerText = colors;

  select.addEventListener("change", colorchange);
  function colorchange() {
    let paragraph = document.querySelector("p");
    paragraph.innerText = select.value;
    paragraph.style.color = select.value;
  }
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
