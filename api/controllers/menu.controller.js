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
  }
}

export default MenuController;