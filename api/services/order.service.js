import Joi from 'joi';
import dummyData from '../utils/dummyData';

/*
 This implementation here is version1. It only processes a single order at a time
 In version2 I'll modify it to take multiple orders where a customer can more than 1 qty for a particular meal order
 and also have the option of choosing multiple meals in the same order.

 I intentionally kept it simple not to confuse myself for now.

*/
const OrderService = {
  getAllOrders() {
    const { orders } = dummyData;
    return orders;
  },

  getSingleOrder(orderId) {
    const order = dummyData.orders.find(o => o.orderId === orderId);
    return order;
  },

  updateOrder(orderId, updatedOrder) {
    // Define input requirements
    const schema = {
      meal: Joi.string().min(1).required(),
      qty: Joi.string().min(1).required(),
      cost: Joi.string().min(1).required(),
    };

    // Validate input
    let result = Joi.validate(updatedOrder, schema);
    // Bad request, incorrect user input
    if (result.error) return result;

    // Look up meal
    const order = dummyData.orders.find(o => o.orderId === orderId);

    const index = dummyData.orders.indexOf(order);

    // Update meal if possible
    if (dummyData.orders[index].status !== 'processed') {
      dummyData.orders[index].qty = updatedOrder.qty;
      dummyData.orders[index].cost = updatedOrder.cost;
    } else {
      return { order_already_processed: 'Can\'t modify order. Order has already been processed!' };
    }

    return dummyData.orders[index];
  },

  addOrder(order) {
    // Define input requirements
    const schema = {
      meal: Joi.string().min(1).required(),
      qty: Joi.string().min(1).required(),
      cost: Joi.string().min(1).required(),
    };

    // Validate input
    const result = Joi.validate(order, schema);
    // Bad request, incorrect user input
    if (result.error) return result;

    // Create orderId
    order.orderId = dummyData.orders.length + 1;
    // Add date
    order.date = '23-02-2019';
    // Add status
    order.status = 'pending';

    dummyData.orders.push(order);

    // Customer can't modify order after 1min
    setTimeout(() => {
      const index = dummyData.orders.indexOf(order);
      dummyData.orders[index].status = 'processed';
    }, 60000); //<-- 1minute

    return order;
  },
};

export default OrderService;
