import Joi from 'joi';
import dummyData from '../utils/dummyData';
// import Meal from '../models/meal.model';
import models from '../../models';

const MealService = {
  async fetchAllMeals() {
    const Meals = await models.Meal.findAll()
      .then((resp) => {
        return resp;
      })
      .catch(err => err);
    return Meals;
  },

  async addMeal(meal) {
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
    // meal.id = dummyData.meals.length + 1;

    const rerturnedMeal = await models.Meal.create({
      image: meal.image,
      name: meal.name,
      description: meal.description,
      price: meal.price,
    })
      .then(resp => resp.dataValues)
      .catch(error => error);

    return rerturnedMeal;
  },

  async getAMeal(mealId) {
    const meal = await models.Meal.findOne({ where: { id: mealId } });
    return meal;
  },

  async findMealByName(mealName) {
    const meal = await models.Meal.findOne({ where: { name: mealName } });
    return meal;
  },

  async updateMeal(mealId, newMeal) {
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

    await models.Meal.update(newMeal, { where: { id: mealId } });

    const meal = await models.Meal.findOne({ where: { id: mealId } });
    return meal;
  },

  async deleteMeal(mealId) {
    // Lookup the meal
    const meal = await models.Meal.findOne({ where: { id: mealId } });

    if (!meal) { return 404; }

    // Destroy meal
    await meal.destroy();

  },
};

export default MealService;
