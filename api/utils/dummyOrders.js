export default {
  meals: [
    {
      id: 50,
      image: 'https://via.placeholder.com/80',
      name: 'jollof',
      description: 'Some very nice jollof you can\'t resist',
      price: '450',
    },
    {
      id: 60,
      image: 'https://via.placeholder.com/80',
      name: 'beans',
      description: 'Some very nice beans you can\'t resist',
      price: '450',
    },
    {
      id: 70,
      image: 'https://via.placeholder.com/80',
      name: 'plantain',
      description: 'Some very nice plantain you can\'t resist',
      price: '450',
    },
    {
      id: 80,
      image: 'https://via.placeholder.com/80',
      name: 'noodles',
      description: 'Some very noodles rice you can\'t resist',
      price: '450',
    },
  ],
  menu: {
    today: {
      breakfast: [
        {
          id: 1,
          image: 'https://via.placeholder.com/80',
          name: 'noodles',
          description: 'Some very noodles rice you can\'t resist',
          price: '450',
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/80',
          name: 'plantain',
          description: 'Some very nice plantain you can\'t resist',
          price: '450',
        },
      ],
      lunch: [
        {
          id: 1,
          image: 'https://via.placeholder.com/80',
          name: 'noodles',
          description: 'Some very noodles rice you can\'t resist',
          price: '450',
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/80',
          name: 'plantain',
          description: 'Some very nice plantain you can\'t resist',
          price: '450',
        },
      ],
      dinner: [
        {
          id: 1,
          image: 'https://via.placeholder.com/80',
          name: 'noodles',
          description: 'Some very noodles rice you can\'t resist',
          price: '450',
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/80',
          name: 'plantain',
          description: 'Some very nice plantain you can\'t resist',
          price: '450',
        },
      ],
    },

  },
  orders: [
    {
      orderId: 1,
      date: '14-02-2019',
      clientId: 44,
      phone: 34354545,
      items: [
        {
          mealId: 50,
          meal: 'jollof',
          qty: '2',
          price: '4000',
        },
        {
          mealId: 60,
          meal: 'plantain',
          qty: '1',
          price: '2000',
        },
      ],
      status: 'pending',
      total_cost: 500,
    },
  ],
};
