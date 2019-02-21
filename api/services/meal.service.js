import Joi from 'joi';
import dummyData from '../utils/dummyData';
import Meal from '../models/meal.model';


const MealService = {
  fetchAllMeals() {
    const validMeals = dummyData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.image = meal.image;
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

    // Validate input
    const result = Joi.validate(meal, schema);
    if (result.error) return result;

    // Add meal.id to meal
    meal.id = dummyData.meals.length + 1;
    dummyData.meals.push(meal);
    return meal;
  },

  getAMeal(id) {
    const meal = dummyData.meals.find(m => m.id === id);
    return meal;
  },

  updateMeal(id, newMeal) {
    // Define input requirements
    const schema = {
      name: Joi.string().min(3).required(),
      price: Joi.string().required(),
      image: Joi.string().required(),
      description: Joi.string().min(5).required(),
    };

    // Validate input
    const result = Joi.validate(newMeal, schema);
    if (result.error) return result;


    // Lookup the meal
    const meal = dummyData.meals.find(m => m.id === id);
    const index = dummyData.meals.indexOf(meal);

    // Update meal
    dummyData.meals[index].imgSrc = newMeal.imgSrc;
    dummyData.meals[index].name = newMeal.name;
    dummyData.meals[index].description = newMeal.description;
    dummyData.meals[index].price = newMeal.price;

    // Return updated meal
    return dummyData.meals[index];
  },

  deleteMeal(id) {
    // Lookup the meal
    const meal = dummyData.meals.find(m => m.id === id);
    if (meal) {
      const index = dummyData.meals.indexOf(meal);
      // By convention, we return the meal that was delted
      return dummyData.meals.splice(index, 1);
    }
    // Meal not found
    return 404;
  },
};

export default MealService;
