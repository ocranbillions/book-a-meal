import { Router } from 'express';

// controller
import MenuController from '../controllers/menu.controller';


const router = Router();

router.get('/', MenuController.fetchAllMenu);
router.get('/:date', MenuController.getSingleMenu);
router.post('/', MenuController.addMenu);

export default router;
