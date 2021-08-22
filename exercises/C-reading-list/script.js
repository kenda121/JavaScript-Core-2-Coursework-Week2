function readingList(books) {
  // Write your code here...
  let reading = document.querySelector("#content");
  let newul = document.createElement("ul");

  reading.appendChild(newul);
  books.forEach(readingbooks);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    cover: "./cover2.jpeg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    cover: "./cover1.jpeg",
  },

  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    cover: "./cover3.jpeg",
  },
];

readingList(books);
function readingbooks(book) {
  let newul = document.querySelector("ul");

  let newli = document.createElement("li");
  newul.appendChild(newli);
  let newp = document.createElement("p");
  newp.innerText = book.title + " - " + book.author;
  newli.appendChild(newp);
  let img = document.createElement("img");
  img.src = book.cover;
  newli.appendChild(img);
  if (book.alreadyRead === true) {
    newli.style.backgroundColor = "red";
  } else {
    newli.style.backgroundColor = "green";
  }
}
