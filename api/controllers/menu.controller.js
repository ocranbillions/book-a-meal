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
    // Expect data from form element
    // const mealName = req.body.meals.value; //meal names should gotten from db
    // const date = req.body.date;

    const mealName = req.body.name;
    const date = req.body.date;


    // Get meal from db
    const meal = MealService.findMealByName(mealName);

    const result = MenuService.addMenu(date, meal);

    return res.json({
      result,
      status: 'success',
    });
  }
}

export default MenuController;