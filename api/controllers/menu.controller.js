import MenuService from '../services/menu.service';

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
    /*
      Expect data from db
      {
        date: 'some date',
        image: 'some image link',
        name: 'some meal',
        description: 'some description',
        price: 'some price',
      }
    */

    const date = req.body.date; // Expect date from form
    const meal = req.body; // this should come from db
    const result = MenuService.addMenu(date, meal);
    return res.json({
      result,
      status: 'success',
    });
  }
}

export default MenuController;