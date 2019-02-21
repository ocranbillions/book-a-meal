import MealService from '../services/meal.service';


const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();
    return res.json({
      allMeals,
      status: 'success',
    });
  },
  addAMeal(req, res) {
    /*
        Expect json of the format
        {
          imgSrc: 'image-url',
          name: 'mealName',
          description: 'Some description',
          price: '450'
        }
    */
    let meal = req.body;
    const result = MealService.addMeal(meal);

    if (result.error) return res.status(400).send(result.error.message);

    meal = result;
    return res.json({
      meal,
      status: 'success',
    });
  },
  getSingleMeal(req, res) {
    let { id } = req.params;
    id = parseInt(id);
    const meal = MealService.getAMeal(id);
    if (meal) {
      return res.json({ meal });
    }
    return res.status(404).send('The meal with the given ID was not found.');
  },
  updateMeal(req, res) {
    let { id } = req.params;
    id = parseInt(id);
    const newMeal = req.body;
    const updatedMeal = MealService.updateMeal(id, newMeal);
    return res.json({
      updatedMeal,
      status: 'success',
    });
  },
  deleteMeal(req, res) {
    let { id } = req.params;
    id = parseInt(id);
    const result = MealService.deleteMeal(id);
    if (result === 404) return res.status(404).send('The meal with the given ID was not found.');
    return res.json({ result, message: 'Delete was successful' });
  },
};

export default MealController;
