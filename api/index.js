import express from 'express';
import bodyParser from 'body-parser';
// routes
import mealRoutes from './routes/meal.route';

const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
  return res.send('The API is working');
});

// handle all meal routes
app.use('/api/v1/meals', mealRoutes);


const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
