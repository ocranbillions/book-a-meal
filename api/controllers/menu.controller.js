import MenuService from '../services/menu.service';
import MealService from '../services/meal.service';

const MenuController = {
  fetchAllMenu(req, res) {
    const allMenu = MenuService.fetchAllMenu();
    return res.json({
      allMenu,
      status: 'success',
    });
  },

  getSingleMenu(req, res) {
    const { date } = req.params;
    const menu = MenuService.getSingleMenu(date);
    return res.json({
      menu,
      status: 'success',
    });
  },

  addMenu(req, res) {
    // When testing this (with postman), this endpoint expects req.body.mealName to contain a meal
    // that is already in the db or dummyData.js else it wont work.
    // this is bcos the html has a select element that will contain names of meals in our db.
    // for now, our db is dummyData and so we can only select meals from dummyData.js
    const { mealName } = req.body;
    const { date } = req.body;
    const { category } = req.body;

    // Alternatively, you can uncomment these lines below
    // run a post request to add noodles (already in dummyData) to tomorrow's menu
    // this is to simulate data (mealName & date) comiming from the form
    // const mealName = 'noodles';
    // const date = 'tomorrow';

    // Get meal from db
    const meal = MealService.findMealByName(mealName);

    const result = MenuService.addMenu(date, meal, category);

    return res.json({
      result,
      status: 'success',
    });
  },
};

export default MenuController;
