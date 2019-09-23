class Meal {
  id;
  categoryId: string[];
  title;
  affordability;
  complexity;
  imageUrl;
  duration;
  ingredients;
  steps;
  isGlutenFree;
  isVegan;
  isVegitaian;
  isLactoseFree;
  constructor({
    id,
    categoryId,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegitaian,
    isLactoseFree
  }) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegitaian = isVegitaian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
