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
            name: "some food",
            size: "LArge",
            "price": 900
        }
    */
    const newMeal = req.body;
    const createdMeal = MealService.addMeal(newMeal);
    return res.json({
      createdMeal,
      status: 'success',
    });
  },
  getSingleMeal(req, res) {
    let { id } = req.params;
    id = parseInt(id);
    const meal = MealService.getAMeal(id);
    // if (Object.entries(meal).length !== 0 && meal.constructor === Object) {
    if (meal) {
      return res.json({ meal });
    }
    return res.status(404).send(`The meal with the given ID was not found.`);
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
    return res.json({
      result,
      status: 'success',
    });
  },
};

export default MealController;
