import MenuService from '../services/menu.service';

const MenuController = {
  fetchAllMenu(req, res) {
    const allMenu = MenuService.fetchAllMenu();
    return res.json({
      status: 'success',
      data: allMenu
    }).status(200);
  }
}

export default MenuController;