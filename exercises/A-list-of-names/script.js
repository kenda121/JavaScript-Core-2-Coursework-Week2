function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(namesandjobs);
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);

function namesandjobs(peoples) {
  let content = document.querySelector("#content");
  let newh1 = document.createElement("h1");
  newh1.innerText = peoples.name;
  content.appendChild(newh1);
  let newh2 = document.createElement("h2");
  newh2.innerText = peoples.job;
  content.appendChild(newh2);
}
