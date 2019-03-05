import dummyData from '../utils/dummyData';
import Meal from '../models/meal.model';

const menuService = {
  fetchAllMenu() {
    const allMenu = dummyData.menu;
    return allMenu;
  },

  getSingleMenu(date) {
    const singleMenu = dummyData.menu[date];
    return singleMenu;
  },

  addMenu(date, meal, category) {
    // Is there an existing menu for this date?
    if (dummyData.menu[date] !== undefined) {
      const newMeal = new Meal();
      // Is there a meal(s) for this very category?
      if (dummyData.menu[date][category] !== undefined) {
        // Add meal to its category
        newMeal.id = dummyData.menu[date][category].length + 1;
        newMeal.image = meal.image;
        newMeal.name = meal.name;
        newMeal.description = meal.description;
        newMeal.price = meal.price;
        dummyData.menu[date][category].push(newMeal);
      } else {
        // Create category to add this as first meal
        dummyData.menu[date][category] = [];

        // Add meal
        newMeal.id = 1;
        newMeal.image = meal.image;
        newMeal.name = meal.name;
        newMeal.description = meal.description;
        newMeal.price = meal.price;
        dummyData.menu[date][category].push(newMeal);
      }


      return newMeal;
    }
    // Else new date
    dummyData.menu[date] = {};
    // Set meal new category
    dummyData.menu[date][category] = [];

    // Add first meal
    const newMeal = new Meal();
    newMeal.id = 1;
    newMeal.image = meal.image;
    newMeal.name = meal.name;
    newMeal.description = meal.description;
    newMeal.price = meal.price;
    dummyData.menu[date][category].push(newMeal);

    return newMeal;
  },
};

export default menuService;
