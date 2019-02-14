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
    const mealLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    meal.id = newId;
    dummyData.meals.push(meal);
    return meal;
  },

  getAMeal(id) {
    const meal = dummyData.meals.find(meal => meal.id == id);
    return meal || {};
  },

  updateMeal(id, meal) {
    const index = Number(id) - 1;
    dummyData.meals[index].imgSrc = meal.imgSrc;
    dummyData.meals[index].name = meal.name;
    dummyData.meals[index].description = meal.description;
    dummyData.meals[index].price = meal.price;

    return dummyData.meals[index];
  },

  deleteMeal(id) {
    const indexOfItem = Number(id) - 1;
    dummyData.meals.splice(indexOfItem, 1);
    return dummyData.meals;
  },
};

export default MealService;
