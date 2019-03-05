import MealService from '../services/meal.db.service';

// import MealService from '../services/meal.service';

const MealController = {
  async fetchAllMeals(req, res) {
    const allMeals = await MealService.fetchAllMeals();
    return res.json({
      allMeals,
      status: 'success',
    });
  },
  async addAMeal(req, res) {
    /*
        Expect json of the format
        {
          imgage: 'image-url',
          name: 'mealName',
          description: 'Some description',
          price: '450'
        }
    */
    let meal = req.body;
    const result = await MealService.addMeal(meal);

    // Bad request, error in user inputs
    if (result.error) return res.status(400).send(result.error.message);

    // Valid input, addMeal() was successful
    meal = result;
    console.log(result);
    console.log(meal);
    return res.json({
      meal,
      status: 'success',
    });
  },

  async getSingleMeal(req, res) {
    let { id } = req.params;
    id = parseInt(id);
    const meal = await MealService.getAMeal(id);
    if (meal) {
      return res.json({ meal });
    }
    return res.status(404).send('The meal with the given ID was not found.');
  },

  async updateMeal(req, res) {
    let { id } = req.params;
    id = parseInt(id);
    let meal = req.body;
    const result = await MealService.updateMeal(id, meal);

    if (result.error) return res.status(400).send(result.error.message);

    meal = result;
    return res.json({
      meal,
      status: 'success',
    });
  },

  async deleteMeal(req, res) {
    let { id } = req.params;
    id = parseInt(id);
    const result = await MealService.deleteMeal(id);
    if (result === 404) return res.status(404).send('The meal with the given ID was not found.');

    const meal = result;
    return res.json({ meal, message: 'Delete was successful' });
  },
};

export default MealController;
