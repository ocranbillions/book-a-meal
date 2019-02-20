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
    const { id } = req.params;
    const meal = MealService.getAMeal(id);
    if (Object.entries(meal).length !== 0 && meal.constructor === Object) {
      return res.json({ meal });
    }
    return res.status(404);
  },
  updateMeal(req, res) {
    const { id } = req.params;
    const newMeal = req.body;
    const updatedMeal = MealService.updateMeal(id, newMeal);
    return res.json({
      updatedMeal,
      status: 'success',
    });
  },
  deleteMeal(req, res) {
    const { id } = req.params;
    const result = MealService.deleteMeal(id);
    return res.json({
      result,
      status: 'success',
    });
  },
};

export default MealController;
