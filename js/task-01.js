const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.children;

console.log(`Number of categories: ${categoriesItems.length}`);

for (const category of categoriesItems) {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelector("ul").children;

  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
}
