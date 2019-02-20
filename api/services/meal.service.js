import dummyData from '../utils/dummyData';
import Meal from '../models/meal.model';


const MealService = {
  fetchAllMeals() {
    const validMeals = dummyData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.imgSrc = meal.imgSrc;
      newMeal.name = meal.name;
      newMeal.description = meal.description;
      newMeal.price = meal.price;
      return newMeal;
    });
    // const validMeals = dummyData.meals;
    return validMeals;
  },

  addMeal(meal) {
    meal.id = dummyData.meals.length + 1;
    dummyData.meals.push(meal);
    return meal;
  },

  getAMeal(id) {
    const meal = dummyData.meals.find(m => m.id === id);
    // return meal otherwise if undefined meal, return empty obj;
    // return meal || {};
    return meal;
  },

  updateMeal(id, meal) {
    // Lookup the meal
    // meal = dummyData.meals.find(m => m.id === id);
    // If not existting, return 404
    // if (!meal) return 404;

    // Validate
    // If invalid, return 400 - Bad request
    // return 404;

    // Update course
    const index = id - 1;
    dummyData.meals[index].imgSrc = meal.imgSrc;
    dummyData.meals[index].name = meal.name;
    dummyData.meals[index].description = meal.description;
    dummyData.meals[index].price = meal.price;

    // Return updated course+
    return dummyData.meals[index];
  },

  deleteMeal(id) {
    // Lookup the course
    const meal = dummyData.meals.find(m => m.id === id);
    // Not existing? return 404

    // Get index
    const index = dummyData.meals.indexOf(meal);
    // Delete, then Return the same course (by convention)
    return dummyData.meals.splice(index, 1);
  },
};

export default MealService;
