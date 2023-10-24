function randomCategory() {
  const categories = {
      "Lunch": "L",
      "Dinner": "D",
      "Sushi": "S"
  };

  const categoriesArray = Object.entries(categories);
  const randomIndex = Math.floor(Math.random() * categoriesArray.length);
  return categoriesArray[randomIndex][1];
}
