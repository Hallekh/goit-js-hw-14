const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

function createMarkup(arr) {
  const items = arr.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("item");

    return li;
  });
  console.log(items);
  list.append(...items);
}

createMarkup(ingredients);
