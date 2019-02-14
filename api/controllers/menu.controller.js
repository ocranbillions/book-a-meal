import MenuService from '../services/menu.service';

const MenuController = {
  fetchAllMenu(req, res) {
    const allMenu = MenuService.fetchAllMenu();
    return res.json({
      status: 'success',
      data: allMenu
    }).status(200);
  },

  getSingleMenu(req, res) {
    const date = req.params.date;
    const singleMenu = MenuService.getSingleMenu(date);
    return res.json({
      status: 'success',
      data: singleMenu
    }).status(200);
  },

  addMenu(req, res) {
    /*
      Expect json in this format WITH DATE
      {
          date: "some date"
          name: "some food",
          size: "LArge",
          "price": 900
      }
    */
    const date = req.body.date;
    const meal = req.body;
    const addedMeal = MenuService.addMenu(date, meal);
    return res.json({
      status: 'success',
      data: addedMeal
    }).status(201);
  }
}

export default MenuController;