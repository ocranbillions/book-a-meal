import OrderService from '../services/order.service';

const OrderController = {
  getAllOrders(req, res) {
    const orders = OrderService.getAllOrders();
    return res.json({
      status: 'success',
      data: orders
    }).status(200);
  },

  getSingleOrder(req, res) {
    const id = req.params.orderId;
    const order = OrderService.getSingleOrder(id);
    return res.json({
      status: 'success',
      data: order
    }).status(200);
  },

  updateOrder(req, res) {
    const id = req.params.orderId;
    const order = req.body;
    const result = OrderService.updateOrder(id, order);
    return res.json({
      status: 'success',
      data: result
    }).status(200);
  },

  addOrder(req, res) {
    /*
        Expect json of the format
      {
        date: '01-01-2019',
        meal: 'Beans with Plantain',
        address: '3 Ajose Adeogun, Victoria Island',
        status: 'pending'
        cost: 300
      }
    */
    const order = req.body;
    const result = OrderService.addOrder(order);
    return res.json({
      status: 'success',
      data: result
    }).status(201);
  },

}

export default OrderController;
