import dummyData from '../utils/dummyData';

const OrderService = {
  getAllOrders() {
    const orders = dummyData.orders;
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
        dummyData.orders[index].meal = updatedOrder.meal;
        dummyData.orders[index].address = updatedOrder.address;
        dummyData.orders[index].cost = updatedOrder.cost;
      }
    });
    console.log(dummyData.orders);
    return dummyData.orders;
  }
}

export default OrderService;