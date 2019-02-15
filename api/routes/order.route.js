import { Router } from 'express';

// controller
import OrderController from '../controllers/order.controller';


const orderRouter = Router();

orderRouter.get('/', OrderController.getAllOrders);
orderRouter.get('/:orderId', OrderController.getSingleOrder);
orderRouter.put('/:orderId', OrderController.updateOrder);
orderRouter.post('/', OrderController.addOrder);

export default orderRouter;
