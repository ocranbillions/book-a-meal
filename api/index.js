import express from 'express';
import bodyParser from 'body-parser';
// import Sequelize from 'sequelize';

// routes
import mealRoutes from './routes/meal.route';
import menuRoutes from './routes/menu.route';
import orderRoutes from './routes/order.route';

const models = require('../models');

const Op = models.Sequelize.Op;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Weclome to book-a-meal!');
});

// handle all meal routes
app.use('/api/v1/meals', mealRoutes);

// handle all menu routes
app.use('/api/v1/menu', menuRoutes);

// handle all order routes
app.use('/api/v1/orders', orderRoutes);


app.get('/testing_db', (req, res) => {
  models.Meal.findAll().then(pr => res.send(pr));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
});

// Export for testing
export default app;
