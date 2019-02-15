import dummyData from '../utils/dummyData';

/*
 This implementation here is version1. It only processes a single order at a time
 In version2 I'll modify it to take multiple orders where a customer can more than 1 qty for a particular meal order
 and also have the option of choosing multiple meals in the same order.

 I intentionally kept it simple not to confuse myself for now.

*/
const OrderService = {
  getAllOrders() {
    const orders = dummyData.orders;
    // const orders = dummyData[ , , order]; DESTRUCTURING TO BE USED HERE
    return orders;
  },

  getSingleOrder(orderId) {
    const order = dummyData.orders.find(order => order.orderId == orderId);
    // const meal = dummyData.meals.find(meal => meal.id == id);
    return order || {};
  },

  updateOrder(orderId, updatedOrder) {
    dummyData.orders.find((order, index) => {
      if (order.orderId == orderId) {
        if (order.status !== 'processed') {
          dummyData.orders[index].meal = updatedOrder.meal;
          dummyData.orders[index].address = updatedOrder.address;
          dummyData.orders[index].cost = updatedOrder.cost;
        } else {
          console.log('Can\'t modify order. Order has already been processed!');
          // alert('Order has already been processed!');
        }
      }
    });
    return dummyData.orders;
  },

  // Place order - user cannot modify the order after 5mins
  // After 1min change status to 'processed' so user can't modify
  // wil be changed to 5mins on production
  addOrder(order) {
    const id = dummyData.orders.length + 1;
    order.orderId = id;
    dummyData.orders.push(order);

    setTimeout(() => {
      const index = dummyData.orders.indexOf(order);
      dummyData.orders[index].status = 'processed';
    }, 60000); //<-- 1minutes 

    const orders = dummyData.orders;
    return orders;
  }
}

export default OrderService;