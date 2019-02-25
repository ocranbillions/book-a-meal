import OrderService from '../services/order.service';

const OrderController = {
  getAllOrders(req, res) {
    const orders = OrderService.getAllOrders();
    return res.json({
      orders,
      status: 'success',
    });
  },

  getSingleOrder(req, res) {
    const id = parseInt(req.params.orderId);
    const order = OrderService.getSingleOrder(id);
    return res.json({
      order,
      status: 'success',
    });
  },

  addOrder(req, res) {
    /*
      Expect json of the format
      {
        meal: 'some meal',
        qty: 1,
        cost: 300
      }
    */
    let order = req.body;
    const result = OrderService.addOrder(order);
    // Bad request, error in user inputs
    if (result.error) return res.status(400).send(result.error.message);

    // Valid input, addOrder() was successful
    order = result;
    return res.json({
      order,
      status: 'success',
    });
  },

  updateOrder(req, res) {
    let { orderId } = req.params;
    orderId = parseInt(orderId);
    let order = req.body;
    const result = OrderService.updateOrder(orderId, order);

    // error in user inputs 
    if (result.error) return res.status(400).send(result.error.message);

    // order already processed
    if (result.order_already_processed) return res.status(400).send(result.order_already_processed);

    order = result;
    return res.json({
      order,
      status: 'success',
    });
  },


};

export default OrderController;
