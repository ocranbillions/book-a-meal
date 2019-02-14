import { Router } from 'express';

// controller
import MenuController from '../controllers/menu.controller';


const router = Router();

router.get('/', MenuController.fetchAllMenu);

export default router;
