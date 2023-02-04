const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

//Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updating heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.className = "subheading";

//Question 5
const paragraphs = document.querySelectorAll("p");
for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

//Question 6
const resultsContainer = document.querySelector(".results");
console.log(resultsContainer.innerHTML);
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7
function listvalues(lists) {
  for (i = 0; i < lists.length; i++) {
    console.log(lists[i]);
  }
}
listvalues(cats);

//Question 8
function createCats(cats) {
  let list = "";

  for (let i = 0; i < cats.length; i++) {
    list += `<h5>${cats[i].name}</h5><p>${cats[i].age}</p>`;

    console.log(list);
  }
  const htmlFinal = "<div>" + list + "</div>";
  return htmlFinal;
}

const container = document.querySelector(".cat-container");

const newHtml = createCats(cats);

container.innerHTML = newHtml;

createCats(cats);
