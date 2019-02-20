export default {
  meals: [
    {
      id: 50,
      imgSrc: 'https://via.placeholder.com/80',
      name: 'Fried Rice1',
      description: 'Some very nice fried rice you can\'t resist',
      price: '450'
    },
    {
      id: 60,
      imgSrc: 'https://via.placeholder.com/80',
      name: 'Fried Rice2',
      description: 'Some very nice fried rice you can\'t resist',
      price: '450'
    },
    {
      id: 70,
      imgSrc: 'https://via.placeholder.com/80',
      name: 'Fried Rice3',
      description: 'Some very nice fried rice you can\'t resist',
      price: '450'
    },
    {
      id: 80,
      imgSrc: 'https://via.placeholder.com/80',
      name: 'Fried Rice4',
      description: 'Some very nice fried rice you can\'t resist',
      price: '450'
    }
  ],
  menu: {
    today: [
      {
        id: 1,
        imgSrc: 'https://via.placeholder.com/80',
        meal: 'Beanss',
        price: '500',
      },
      {
        id: 2,
        imgSrc: 'https://via.placeholder.com/80',
        meal: 'Fried Rice',
        price: '500',
      },
      {
        id: 3,
        imgSrc: 'https://via.placeholder.com/80',
        meal: 'Pounded Yam',
        price: '500',
      },
    ],
    tomorrow: [
      {
        id: 1,
        imgSrc: 'https://via.placeholder.com/80',
        meal: 'Beans',
        price: '500',
      },
      {
        id: 2,
        imgSrc: 'https://via.placeholder.com/80',
        meal: 'Fried Rice',
        price: '500',
      },
      {
        id: 3,
        imgSrc: 'https://via.placeholder.com/80',
        meal: 'Pounded Yam',
        price: '500',
      },
    ]
  },
  orders: [
    {
      orderId: 1,
      date: '14-02-2019',
      meal: 'Hot Eba',
      address: '14 Penninsula, Lekki',
      status: 'pending',
      cost: 500
    },
    {
      orderId: 2,
      date: '01-01-2019',
      meal: 'Beans with Plantain',
      address: '3 Ajose Adeogun, Victoria Island',
      status: 'pending',
      cost: 300
    },
    {
      orderId: 3,
      date: '11-01-2019',
      meal: 'Chicken',
      address: '22 Ajao Estate, Lagos',
      status: 'processed',
      cost: 600
    },
  ]
};
