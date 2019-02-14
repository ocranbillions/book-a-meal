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

  addMenu(date, meal) {
    //if there's menu for dat day add meal to menulist
    if (dummyData.menu[date] !== undefined) {
      const newMeal = new Meal();
      newMeal.id = dummyData.menu[date].length + 1;
      newMeal.imgSrc = meal.imgSrc;
      newMeal.name = meal.name;
      newMeal.description = meal.description;
      newMeal.price = meal.price;
      dummyData.menu[date].push(newMeal);
      return newMeal;
    }
    // else new day, new menu begins
    dummyData.menu[date] = [];
    const newMeal = new Meal();
    newMeal.id = 1;
    newMeal.imgSrc = meal.imgSrc;
    newMeal.name = meal.name;
    newMeal.description = meal.description;
    newMeal.price = meal.price;
    dummyData.menu[date].push(newMeal);
    return newMeal;
  }
}

export default menuService;