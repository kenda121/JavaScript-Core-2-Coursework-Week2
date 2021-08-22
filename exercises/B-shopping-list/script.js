function shoppingList(arrayOfPeople) {
  let thediv = document.querySelector("#content");
  arrayOfPeople.forEach(shoppingList);
  // Write your code here...
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
function shoppingList(items) {
  let thediv = document.querySelector("#content");
  let newul = document.createElement("ul");
  thediv.appendChild(newul);
  let newli = document.createElement("li");
  newli.innerText = shopping;
  newul.appendChild(newli);
}
