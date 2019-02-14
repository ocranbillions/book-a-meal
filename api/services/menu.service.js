import dummyData from '../utils/dummyData';

const menuService = {
  fetchAllMenu() {
    const allMenu = dummyData.menu;
    return allMenu;
  },

  getSingleMenu(date) {
    const singleMenu = dummyData.menu[date];
    return singleMenu;
  }
}

export default menuService;