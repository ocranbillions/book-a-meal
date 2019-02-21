import Joi from 'joi';
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
    // Define input requirements
    const schema = {
      name: Joi.string().min(3).required(),
      price: Joi.string().required(),
      image: Joi.string().required(),
      description: Joi.string().min(5).required(),
    };

    // Validate meal
    const result = Joi.validate(meal, schema);
    if (result.error) return result;

    // Give the meal an id and add it to db
    meal.id = dummyData.meals.length + 1;
    dummyData.meals.push(meal);
    return meal;
  },

  getAMeal(id) {
    const meal = dummyData.meals.find(m => m.id === id);
    return meal;
  },

  updateMeal(id, newMeal) {
    // Lookup the meal
    const meal = dummyData.meals.find(m => m.id === id);
    // If not existting, return 404
    if (!meal) return 404;

    const index = dummyData.meals.indexOf(meal);
    // Validate
    // If invalid, return 400 - Bad request
    // return 404;

    // Update course
    dummyData.meals[index].imgSrc = newMeal.imgSrc;
    dummyData.meals[index].name = newMeal.name;
    dummyData.meals[index].description = newMeal.description;
    dummyData.meals[index].price = newMeal.price;

    // Return updated course+
    return dummyData.meals[index];
  },

  deleteMeal(id) {
    // Lookup the course
    const meal = dummyData.meals.find(m => m.id === id);
    if (meal) {
      const index = dummyData.meals.indexOf(meal);
      // Delete, then Return the same course (by convention)
      return dummyData.meals.splice(index, 1);
    }
    return 404;
  },
};

export default MealService;
