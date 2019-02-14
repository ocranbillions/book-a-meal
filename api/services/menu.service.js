import dummyData from '../utils/dummyData';

const menuService = {
  fetchAllMenu() {
    const allMenu = dummyData.menu;
    return allMenu;
  }
}

export default menuService;