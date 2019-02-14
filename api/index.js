import express from 'express';
import bodyParser from 'body-parser';

// routes
import mealRoutes from './routes/meal.route';
import menuRoutes from './routes/menu.route';

const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
  return res.send('The API is working');
});

// handle all meal routes
app.use('/api/v1/meals', mealRoutes);

// handle all menu routes
app.use('/api/v1/menu', menuRoutes);


const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
